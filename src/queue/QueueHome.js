import React, { Component } from 'react';
import './../style/queue.css';
import { Icon,Modal,Carousel } from 'antd';
import history from './../history';
import 'whatwg-fetch';


// const obj = (<div>222222222222</div>);

export default class QueueHome extends Component {
    constructor(){
        super();
        this.state = {
            visible: false,
            trip:"对不起，暂时暂停营业",
            queueInfo:{
                numberNow:"~~",
                tableNumber:"~"
            },
            configInfo:[]
        }
    }



    showModal = (e) => {
        this.setState({
            trip:e,
            visible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    getNumberNow = () => {
        const that = this;
        console.log("获取当前叫号");
        const {queueInfo} = this.state;
        fetch("/queue/arriving").then(function(response){
            return response.json();
        }).then(function(jsonData){
            that.setState({queueInfo:{
                numberNow:jsonData.QueueInfo.queueInfos,
                tableNumber:jsonData.QueueInfo.tables
            }});
        }).catch(function(){
            console.log("获取当前叫号失败");
        })
        console.log(this.state.queueInfo.numberNow);
    }

    componentWillMount(){
        // this.getNumberNow();
        const that = this;
        fetch("/restaurant/broadcastMachine/homePage").then(function(response) {
            return response.json();
        }).then(function (jsonData) {
            console.log(jsonData)
            let data =[];
            jsonData.broadcastHomePage.photoUrls.map((k,index) =>{
                console.log(k);
                let obj = {
                    id:index,
                    url:k,
                    color:jsonData.broadcastHomePage.broadcastMachine.fontColour,
                    fontSize:jsonData.broadcastHomePage.broadcastMachine.fontSize
                }
                data.push(obj);
            })
            that.setState({
                configInfo:data
            })
        }).catch(function () {
            console.log("失败");
        })
    }
    componentDidMount(){
        // this.getNumberNow();
        this.timer = setInterval(()=>{
            this.getNumberNow()},3000)
    }

    componentWillUnmount () {
        clearInterval(this.timer)
    }

    render() {
        const BannerElements=[];      //保存渲染以后 JSX的数组
        for(let item of this.state.configInfo){
            console.log(item);
            BannerElements.push(
                <div style={{backgroundImage:"url("+item.url+")",fontSize:item.fontSize,color:item.color}} className="App-header">请{this.state.queueInfo.numberNow}号顾客到{this.state.queueInfo.tableNumber}桌用餐</div>
            )
        }

        return (
            <div className="App">
                <div className="Carousel">
                    <Carousel autoplay="true" >
                      {BannerElements}
                    </Carousel>
                </div>
                <div className="centerInfo">
                    <div className="queueInfo">
                        <input  type="button" className="btn btn-success" value="排队抽号" onClick={this.go.bind(this)} />
                    </div>
                    <div className="checkInfo">
                        <input  type="button" className="entry" value="入场验证" onClick={this.verfiy} />
                        <input  type="button" className="checkQueue" value="查看排队" onClick={this.waitInfo}/>
                    </div>
                    <div  className="trip">
                        <Icon type="desktop" className = "desIcon"/>
                        <p>查看个人状况及入场验证，请将您收到的二维码，放置感应区进行扫描</p>
                    </div>
                </div>
                <div className="footer">
                    <Icon type="qrcode" style={{fontSize:70 }} />
                </div>
                <Modal
                    title="提示"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>{this.state.trip}</p>
                </Modal>
            </div>
        );
    }

     go(){
        const that = this;
         let info = {"customerName": "Hubot"};
         fetch('/queue/virtualqueue', {
             method: 'POST',
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(info)
         }).then(function(response) {
             return response.json();
         }).then(function (jsonData) {
             console.log(jsonData);
             if(jsonData.ErrorCode ===  '0'){
                 history.push({
                     pathname: '/queueup/'+ jsonData.id
                 })
             }else{
                 that.showModal(jsonData.ErrorMessage);
             }
         }).catch(function () {
             that.showModal("网络出现故障或服务器未打开");
         });
    };

    waitInfo(){
        history.push({
            pathname:'/waitinfo'
        })
    }

    verfiy(){
        history.push({
            pathname:'/verify'
        })
    }


}
