import React,{ Component } from 'react';
import { Menu,Layout,Icon,Button,Row,Col,Input } from 'antd';
import '../style/manage.css'

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
export default class Manage extends Component{
    constructor(props){
        super();
        this.state = {
            tableID: '',
            orderNumber: '--',
            tableNumber: '--'
        }
    }
    handleCall(event){
            let that = this;
            fetch('/queue/arrivingCustomer?tableName='+ this.state.tableID).then(function(response) {
                return response.json();
            }).then(function (jsonData) {
                console.log(jsonData);
                that.setState({
                    orderNumber:jsonData.extractNumber.tableNumber.tableType.describe +jsonData.extractNumber.id ,
                        tableNumber: jsonData.extractNumber.tableNumber.name
                    
                }
                );
            }).catch(function () {
                console.log('叫号失败');
            });
        }

    handleInput (event) {
        this.setState({
          tableID: event.target.value
        })
      }

    render(){
        return (
            <div style={{height:'100%'}}>
                <Layout style={{height:'100%'}}>
                    <Sider className='Manage-sider'>
                        <h3>排队管理客户端</h3>
                        <ul>
                            <li>叫号清桌</li>
                            <li>入场验证</li>
                            <li>基本信息设置</li>
                            <li>排队规则设置</li>
                        </ul>
                    </Sider>
                    <Layout style={{backgroundColor:'white'}}>
                    <Header  style={{backgroundColor:'white',textAlign:'right',verticalAlign:'bottom'}}>
                        <span>您好，欢迎登录</span>   
                    </Header>
                    <Content>
                        <Row>
                            <Col span={1}></Col>
                            <Col span={2}>输入桌ID号:</Col>
                            <Col span={3}><Input type='input' ref='tableID' placeholder='001' value={this.state.tableID} onChange={this.handleInput.bind(this)}/></Col>
                            <Col span={1}></Col>
                            <Col span={3}><Button type='primary' onClick={this.handleCall.bind(this)}>呼叫排号</Button></Col>
                            <Col span={1}></Col>
                            <Col span={10} style={{color:'orange',fontSize:'14px'}}><Icon type="notification"/>当前叫号: {this.state.orderNumber}顾客,请到{this.state.tableNumner}桌就餐</Col>
                            <Col span={3}><Button type='primary'>暂停叫号</Button></Col>
                        </Row>
                    </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

