import React,{ Component } from 'react';
import { Row,Col,Icon,Input,Button } from 'antd';
import Header from '../component/Header/Header';
import verify from '../img/verify_pic.png';
import '../style/verify.css';

export default class QueueVerify extends Component{
    render(){
        return (
            <div classaName='Verify'>
                <Header/>
                <div>
                    <Row>
                        <Col span={6}></Col>
                        <Col span={12} className='Verify-method'>
                            <h3>方式一</h3>
                        </Col>
                    </Row>
                    <Row className='Verify-method1'>
                        <Col span={7}></Col>
                        <Col span={1}>
                            <Icon type="mobile" style={{fontSize:18,paddingTop:3}}/>
                        </Col>
                        <Col span={2}>
                            <h3>排号:</h3>
                        </Col>
                        <Col span={6}>
                            <Input placeholder='请输入排号' style={{border:0}}/>
                        </Col>
                        <Col span={8}></Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col span={6}></Col>
                        <Col span={12} className='Verify-method'>
                            <h3>方式二</h3>
                        </Col>
                    </Row>
                    <Row className='Verify-method2'>
                        <Col span={6}></Col>
                        <Col span={10}><p>请将您收到的二维码，放置感应区进行扫描</p></Col>
                        <Col span={8}></Col>
                    </Row>
                    <Row>
                        <Col span={6}></Col>
                        <Col span={10} offset={2}>
                            <img src={verify} width='200' height='200'/>
                        </Col>
                        <Col span={8}></Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col span={6}></Col>
                        <Col span={12} className='Button-panel'>
                            <Button type='Default'>1</Button>
                            <Button type='Default'>1</Button>
                            <Button type='Default'>1</Button>
                            <Button type='Default'>1</Button>
                        </Col>
                        <Col span={6}></Col>
                    </Row>
                    <Row>
                        <Col span={6}></Col>
                        <Col span={12} className='Button-panel'>
                            <Button type='Default'>1</Button>
                            <Button type='Default'>1</Button>
                            <Button type='Default'>1</Button>
                            <Button type='Default'>1</Button>
                        </Col>
                        <Col span={6}></Col>
                    </Row>
                    <Row>
                        <Col span={6}></Col>
                        <Col span={12} className='Button-panel'>
                            <Button type='Default'>1</Button>
                            <Button type='Default'>1</Button>
                            <Button type='Default'>1</Button>
                            <Button type='Default'>1</Button>
                        </Col>
                        <Col span={6}></Col>
                    </Row>
                    <Row>
                        <Col span={6}></Col>
                        <Col span={12} className='Button-panel'>
                            <Button type='Default'>1</Button>
                            <Button type='Default'>1</Button>
                            <Button type='Default'>1</Button>
                            <Button type='Default'>1</Button>
                        </Col>
                        <Col span={6}></Col>
                    </Row>
                </div>
            </div>
        );
    }
}