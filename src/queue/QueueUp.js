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
            userName: '',
            tel:'',
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
        this.userNameInput.focus();
        this.setState({ userName: '' });
    }



    onChangeUserName = (e) => {
        this.setState({ userName: e.target.value });
        let that = this;
        if(e.target.value > 0 && e.target.value != null){
            fetch('/queue/update', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: this.state.id,
                    eatNumber:e.target.value,
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

    render(){
        const { userName } = this.state;
        const { tel } = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
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
                    suffix={<Icon type="right" />}
                    size="large"
                    value={userName}
                    onChange={this.onChangeUserName.bind(this)}
                    ref={node => this.userNameInput = node}
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
                            suffix={<Icon type="right" />}
                            size="large"
                            value={tel}
                            onChange={this.onChangetel.bind(this)}
                            ref={node => this.userNameInput = node}
                        />
                    </div>
                </Content>
                    <div className="footer">
                        <div className="keyborard clearFloat">
                            <div className="marginSet">
                                <div className="keyborardContent clearFloat">
                                    <div className="keyborardLeft clearFloat" id="keyborardNumber">
                                        <div><input type="button" value="1"/></div>
                                        <div><input type="button" value="2"/></div>
                                        <div><input type="button" value="3"/></div>
                                        <div><input type="button" value="4"/></div>
                                        <div><input type="button" value="5"/></div>
                                        <div><input type="button" value="6"/></div>
                                        <div><input type="button" value="7"/></div>
                                        <div><input type="button" value="8"/></div>
                                        <div><input type="button" value="9"/></div>
                                        <div><input type="button" value="清空"/></div>
                                        <div><input type="button" value="0"/></div>
                                        <div><input type="button" value="X"/></div>
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
