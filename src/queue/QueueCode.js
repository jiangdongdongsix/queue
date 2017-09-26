import React,{ Component } from 'react';
import { Row,Col } from 'antd';
import Header from '../component/Header/Header';
import '../style/verify.css';
import codes from '../img/succeed_pic.png'

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
                                <ul className='Code-content'>
                                    <li>
                                        <img src={codes} width='180' height='180'/>
                                    </li>
                                    <li><h3>验证成功，入场就餐愉快</h3></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}></Col>
                </Row>
            </div>
        );
    }
}