import React from 'react'
import { Layout,Input, Icon, Row, Col } from 'antd';
import MyHeader from './../component/Header/Header';
import history from './../history';
import Time from '../component/Time/Time';
const { Header, Footer, Sider, Content } = Layout;
class QueueUp extends React.Component{
    constructor(props) {
        super();
        this.state = {
            eatNumber: '',
            tel:'',
            eatNumberFocus:false,
            telFocus:false,
            id : props.match.params.id,
            queue:{
                tableTypeName:"--",
                eatMaxNumber:"",
                eatMinNumBer:"",
                waitPeople:"--",
                waitTime:"--"
            }
        };
    }
    emitEmpty = () => {
       this.eatNumberInput.focus();
       this.setState({ eatNumber: '' });
    }
    emitTelEmpty= () =>{
        this.telInput.focus();
        this.setState({ tel: '' });
    }





    onChangeUserName = (e) => {
        this.setState({ eatNumber: e.target.value });
        if(e.target.value > 0 && e.target.value != null){
          this.updataQueueData(e.target.value);
        }
    }


    updataQueueData(eatNumber){
        const that = this;
        fetch('/queue/update', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
                eatNumber:eatNumber,
                seatFlag: false
            })
        }).then(function(response) {
            return response.json();
        }).then(function (jsonData) {
            console.log(jsonData);
            that.setState({ queue: {
                tableTypeName:jsonData.queueInfo.tableType.describe,
                eatMaxNumber:jsonData.queueInfo.tableType.eatMaxNumber,
                eatMinNumBer:jsonData.queueInfo.tableType.eatMinNumber,
                waitPeople:jsonData.queueInfo.waitPopulation,
                waitTime:jsonData.queueInfo.waitTime
            } });
        }).catch(function () {
            console.log('获取时间出错');
        });
    }


    addNumber(event){
        if(typeof event.target.value == 'string' && event.target.value !== "清空" && event.target.value !== "X"){
            if(this.state.eatNumberFocus){
                this.eatNumberInput.focus();
                this.setState({eatNumber:this.state.eatNumber + event.target.value});
                this.updataQueueData(this.state.eatNumber + event.target.value);
            }else if(this.state.telFocus){
                this.telInput.focus();
                this.setState({tel:this.state.tel + event.target.value});
            }
        }

    }



    handleClear(){
        if(this.state.eatNumberFocus){
            this.setState({eatNumber:''});
        }else if(this.state.telFocus){
            this.setState({tel:''});
        }

    }
    handleDelete(){
        if(this.state.eatNumberFocus){
            let len = this.state.eatNumberFocus.length;
            if(len > 0) {
                this.setState({eatNumberFocus: this.state.eatNumberFocus.slice(0, -1)});
            }
        }else if(this.state.telFocus){
            let len = this.state.tel.length;
            if(len > 0) {
                this.setState({tel: this.state.tel.slice(0, -1)});
            }
        }
    }
    onChangetel = (e) => {
        this.setState({ tel: e.target.value });
    }

    confirm(){
        console.log(this.state.id);
        console.log(this.state.tel);
        fetch('/queue/confirmqueue?queueId='+ this.state.id +'&tel='+ this.state.tel, {
        }).then(function(response) {
            return response.json();
        }).then(function (jsonData) {
            console.log(jsonData);

            history.push({
                pathname: '/orderinfo/'+ JSON.stringify(jsonData.queueInfo)
            })
        }).catch(function () {
            console.log('获取时间出错');
        });
    }

    cancel(){
        console.log(this.state.id);
        fetch('/queue/cancel?queueId='+ this.state.id).then(function(response) {
            return response.json();
        }).then(function (jsonData) {
            console.log(jsonData);
            history.push({
                pathname: '/'
            })
        }).catch(function () {
            console.log('取消出错');
        });
    }


    //input 获取焦点 width: 100%
    inputOnFocus(){
        console.log("获得焦点")
        this.setState({ eatNumberFocus: true,telFocus:false });
    }

    //input 失去焦点
    inputOnBlur(){
        console.log("失去")
        this.setState({eatNumberFocus: true,telFocus:false  });
    }
    //input 获取焦点 width: 100%
    telInputOnFocus(){
        console.log("获得焦点")
        this.setState({ telFocus: true,eatNumberFocus:false });
    }
    //input 失去焦点
    telInputOnBlur(){
        console.log("失去")
        this.setState({ telFocus: true,eatNumberFocus:false });
    }

    render(){
        const { eatNumber } = this.state;
        const { tel } = this.state;
        const suffix = eatNumber ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        const suffixTel = tel ? <Icon type="close-circle" onClick={this.emitTelEmpty} /> : null;
        return (

            <div className="my-app">
                <Layout>
                    <div style={{backgroundColor:'white'}}>
                        <Row>
                            <Col span={20}></Col>
                            <Col span={1}><Time/></Col>
                            <Col span={3}></Col>
                        </Row>
                        <Row>
                            <Col span={8}>
                                <Icon type="left"  style={{color:'orangered',fontSize: 20}} onClick = {this.cancel.bind(this)}/>
                            </Col>
                            <Col span={8} offset={3}>
                                <h2>排队取号</h2>
                            </Col>
                            <Col span={8}></Col>
                        </Row>
                    </div>
                <Content>
                <Input
                    placeholder="请输入用餐人数"
                    prefix={<Icon type="user" />}
                    suffix={suffix}
                    size="large"
                    value={this.state.eatNumber}
                    onChange={this.onChangeUserName.bind(this)}
                    ref={node => this.eatNumberInput = node}
                    onBlur={this.inputOnBlur.bind(this) }
                    onFocus={ this.inputOnFocus.bind(this) }
                />

                <div className="queueInfo">
                    <Row>
                        <Col span={8}>
                            <div>餐桌类型</div>
                            <div className="table">{this.state.queue.tableTypeName}（{this.state.queue.eatMinNumBer}-{this.state.queue.eatMaxNumber}人）</div>
                        </Col>
                        <Col span={8}>
                            <div>
                                等待桌数
                            </div>
                            <span className="waitCount">{this.state.queue.waitPeople}</span>
                               桌
                        </Col>
                        <Col span={8}>
                            <div>
                                预估等待时间
                            </div>
                            <span className="waitCount">{this.state.queue.waitTime}</span>
                            分钟
                        </Col>
                    </Row>
                </div>
                    <div>
                        <Input
                            placeholder="请输入手机号"
                            prefix={<Icon type="mobile" />}
                            suffix={suffixTel}
                            size="large"
                            value={tel}
                            onChange={this.onChangetel.bind(this)}
                            ref={node => this.telInput = node}
                            onBlur={this.telInputOnBlur.bind(this) }
                            onFocus={ this.telInputOnFocus.bind(this) }
                        />
                    </div>
                </Content>
                    <div className="footer">
                        <div className="keyborard clearFloat">
                            <div className="marginSet">
                                <div className="keyborardContent clearFloat">
                                    <div className="keyborardLeft clearFloat" id="keyborardNumber" onClick={this.addNumber.bind(this)}>
                                        <div><input type="button" value="1"/></div>
                                        <div><input type="button" value="2"/></div>
                                        <div><input type="button" value="3"/></div>
                                        <div><input type="button" value="4"/></div>
                                        <div><input type="button" value="5"/></div>
                                        <div><input type="button" value="6"/></div>
                                        <div><input type="button" value="7"/></div>
                                        <div><input type="button" value="8"/></div>
                                        <div><input type="button" value="9"/></div>
                                        <div><input type="button" value="清空" onClick={this.handleClear.bind(this)} /></div>
                                        <div><input type="button" value="0"/></div>
                                        <div><input type="button" value="X"  onClick={this.handleDelete.bind(this)} /></div>
                                    </div>
                                    <div className="keyborardRight" >
                                        <div>
                                            <input type="button" value="立即取号" onClick={this.confirm.bind(this)}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div style={{height:'60px'}}>

                    </div>
                </Layout>
            </div>

        );
    }
}

export default QueueUp;
