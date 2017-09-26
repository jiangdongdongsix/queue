import React,{Component} from 'react';
import { Row,Col,Icon } from 'antd';
import Time from '../Time/Time';

export default class Header extends Component{
    render(){
        return(
        <div>
            <Row>
                <Col span={15}></Col>
                <Col span={1}><Time/></Col> 
                <Col span={8}></Col>
            </Row>
            <Row>
                <Col span={6}></Col>
                <Col span={2}>
                    <Icon type="left" style={{fontSize:16,color:'red'}}/>
                </Col>
                <Col span={6} offset={3}>
                    <h2>入场验证</h2>
                </Col>
                <Col span={10}></Col>
            </Row>
        </div>
        );
    }
}