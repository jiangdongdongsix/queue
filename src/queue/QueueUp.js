import React from 'react'
import { Layout,Input, Icon, Row, Col } from 'antd';

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
                <Layout style={{backgroundColor: 'lightgrey'}}>
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
                    <Input
                        placeholder="请输入手机号"
                        prefix={<Icon type="mobile" />}
                        suffix={<Icon type="right" />}
                        size="large"
                        value={userName}
                        onChange={this.onChangeUserName}
                        ref={node => this.userNameInput = node}
                    />
                </Content>
                </Layout>
            </div>

        );
    }
}

export default QueueUp;
