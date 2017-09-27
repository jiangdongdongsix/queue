import React,{ Component } from 'react';
import { Row,Col } from 'antd';
import GridHeader from '../component/Header/GridHeader';
import '../style/verify.css';
import codes from '../img/error_pic.png'

export default class QueueCode extends Component{
    render(){
        return (
            <div>
                <GridHeader name='扫码入场'/>
                <Row>
                    <Col span={8}> </Col>
                    <Col span={8}>
                        <div className='Code-panel'>
                            <div className='Code-bg'>
                                <ul className='Code-content'>
                                    <li>
                                        <img src={codes} alt='验证失败' style={{width:'40%',height:'40%'}}/>
                                    </li>
                                    <li><h3>验证失效，二维码无效</h3></li>
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