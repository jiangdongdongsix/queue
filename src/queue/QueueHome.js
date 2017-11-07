import React, { Component } from 'react';
import './../style/queue.css';
import { Icon,Modal  } from 'antd';
import history from './../history';
import 'whatwg-fetch';
export default class QueueHome extends Component {
    state = {
        visible: false,
        trip:"对不起，暂时暂停营业"
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


    render() {
        return (
            <div className="App">
                <div className="App-header">
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
                    title="Basic Modal"
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
    }

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
