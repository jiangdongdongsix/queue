import React from 'react'
import { Layout,Input, Icon, Row, Col } from 'antd';
import MyHeader from './../component/Header/Header';

const { Header, Footer, Sider, Content } = Layout;
class QueueUp extends React.Component{
    constructor() {
        super();
        this.state = {
            userName: '',
        };
    }
    emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({ userName: '' });
    }
    onChangeUserName = (e) => {
        this.setState({ userName: e.target.value });
    }

    render(){
        const { userName } = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        return (

            <div className="my-app">
                <Layout>
                <MyHeader name="排队取号"/>
                <Content>
                <Input
                    placeholder="请输入用餐人数"
                    prefix={<Icon type="user" />}
                    suffix={<Icon type="right" />}
                    size="large"
                    value={userName}
                    onChange={this.onChangeUserName}
                    ref={node => this.userNameInput = node}
                />
                <div className="queueInfo">
                    <Row>
                        <Col span={8}>
                            <div>餐桌类型</div>
                            <div className="table">小桌（1-4人）</div>
                        </Col>
                        <Col span={8}>
                            <div>
                                等待桌数
                            </div>
                            <span className="waitCount">3</span>
                               桌
                        </Col>
                        <Col span={8}>
                            <div>
                                预估等待时间
                            </div>
                            <span className="waitCount">20</span>
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
                            value={userName}
                            onChange={this.onChangeUserName}
                            ref={node => this.userNameInput = node}
                        />
                    </div>

                </Content>
                    <Footer>
                        <div className="keyborard clearFloat" style={{backgroundColor:'white'}}>
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
                                            <input type="button" value="立即取号"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Footer>
                </Layout>
            </div>

        );
    }
}

export default QueueUp;
