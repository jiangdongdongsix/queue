import React,{Component} from 'react';
import { Row,Col,Icon } from 'antd';
import Time from '../Time/Time';
import history from './../../history';
export default class GridHeader extends Component{
    render(){
        return(
        <div>
            <Row>
                <Col span={14}></Col>
                <Col span={2}><Time/></Col>
                <Col span={8}></Col>
            </Row>
            <Row>
                <Col span={6}></Col>
                <Col span={2}>
                    <Icon type="left"  style={{color:'orangered',fontSize: 20}} onClick={this.goback()}/>
                </Col>
                <Col span={8} offset={3}>
                    <h2>{this.props.name}</h2>
                </Col>
                <Col span={8}></Col>
            </Row>
        </div>
        );
    }

    goback(){
        // history.goBack();
        console.log("返回");
    }
}