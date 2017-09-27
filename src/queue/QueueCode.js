import React,{ Component } from 'react';
import { Row,Col } from 'antd';
import GridHeader from '../component/Header/GridHeader';
import '../style/verify.css';
import codes from '../img/succeed_pic.png'

export default class QueueCode extends Component{
    render(){
        return (
            <div className='Code'>
                <GridHeader name='扫码入场'/>
                <Row>
                    <Col span={8}> </Col>
                    <Col span={8}>
                        <div className='Code-panel'>
                            <div className='Code-bg'>
                                <ul className='Code-content'>
                                    <li>
                                        <img src={codes} alt='succeed' style={{width:'40%',height:'40%'}}/>
                                    </li>
                                    <li><h3>验证成功，入场就餐愉快</h3></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </div>
        );
    }
}