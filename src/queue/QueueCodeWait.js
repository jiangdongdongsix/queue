import React,{ Component } from 'react';
import { Row,Col } from 'antd';
import Header from '../component/Header/Header';
import '../style/verify.css';
import codes from '../img/wait_pic.png'
import QRcode from '../img/QRcode.png'
export default class QueueCode extends Component{
    render(){
        return (
            <div>
                <Header />
                <Row>
                    <Col span={6}> </Col>
                    <Col span={12}>
                        <div className='Code-panel'>
                            <div className='Code-bg'>
                                <ul className='Code-content Code-waitpic'>
                                    <li>
                                        <img src={codes} width='150' height='150'/>
                                    </li>
                                    <li><h3>排号未到，请您再等一会</h3></li>
                                </ul>
                                <div className='Code-waitinfo'>
                                    <Row>
                                        <Col span={1}></Col>
                                        <Col span={4}>取号时间:</Col>
                                        <Col span={8}>2017/9/26 10:00</Col>
                                    </Row>
                                    <Row>
                                        <Col span={1}></Col>
                                        <Col span={4}>当前叫号:</Col>
                                        <Col span={4}>A12</Col>
                                    </Row>
                                    <Row>
                                        <Col span={1}></Col>
                                        <Col span={6}>等待桌数</Col>
                                        <Col span={6}>预估时间</Col>
                                    </Row>
                                    <Row>
                                        <Col span={1}></Col>
                                        <Col span={6}>30</Col>
                                        <Col span={6}>30分钟</Col>
                                    </Row>
                                    <Row>
                                        <Col span={8}></Col>
                                        <Col span={8}><img src={QRcode} width='100' heigth='100'/></Col>
                                        <Col span={8}></Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}></Col>
                </Row>
            </div>
        );
    }
}