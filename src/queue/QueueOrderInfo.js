import React,{ Component } from 'react';
import { Row,Col } from 'antd';
import GridHeader from '../component/Header/GridHeader';
import '../style/verify.css';
import Ordersucceed from '../img/order_succeed.png'
import QRcode from '../img/QRcode.png'
import { Button } from 'antd';
import history from './../history';

export default class QueueCode extends Component{

    constructor(props) {
        super();
        let data = JSON.parse(props.match.params.queueinfo);
        console.log(data);
        this.state = {
            waitTime :data.waitTime,
            waitPeople:data.waitPopulation,
            queueId: data.queueId,
            decription:data.tableType.describe,
            tableTypeName:data.tableType.tableTypeName

        };
    }

    gohome(){
        history.push({
            pathname: '/'
        })
    }

    render(){
        return (
            <div className='OrderInfo'>
                <GridHeader name='单号详情'/>
                <Row>
                    <Col span={8}> </Col>
                    <Col span={8}>
                        <div className='Code-panel'>
                            <div className='Code-bg'>
                                <ul className='Code-content Code-waitpic'>
                                    <li>
                                        <img src={Ordersucceed} alt='wait' style={{width:'40%',height:'40%'}}/>
                                    </li>
                                    <li><h3>您已取号成功</h3></li>
                                    <li><span>请留意出票口，小票已打印</span></li>
                                </ul>
                                <div className='Code-waitinfo'>
                                    <Row>
                                        <Col span={1}></Col>
                                        <Col span={6}>取号时间:</Col>
                                        <Col span={8}>2017/9/26 10:00</Col>
                                    </Row>
                                    <Row>
                                        <Col span={8}>需等待桌数</Col>
                                        <Col span={8}>预估时间</Col>
                                        <Col span={8}>{this.state.decription+this.state.queueId}</Col>
                                    </Row>
                                    <Row>
                                        <Col span={8}>{this.state.waitPeople}</Col>
                                        <Col span={8}>{this.state.waitTime}分钟</Col>
                                        <Col span={8}>{this.state.tableTypeName}</Col>
                                    </Row>
                                    <Row>
                                        <Col span={8}></Col>
                                        <Col span={8}><img src={QRcode} alt='QRcode' style={{width:'60%',heigth:'60%'}}/></Col>
                                        <Col span={8}></Col>
                                    </Row>
                                    <Row>
                                        <Col span={8}></Col>
                                        <Col span={8}><Button type="danger" onClick={this.gohome}>返回首页</Button></Col>
                                        <Col span={8}></Col>
                                    </Row>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={8}></Col>
                </Row>
                <div>

                </div>
            </div>
        );
    }
}