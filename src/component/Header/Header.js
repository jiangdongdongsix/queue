import React,{Component} from 'react';
import { Row,Col,Icon } from 'antd';
import Time from '../Time/Time';
import history from './../../history';
export default class MyHeader extends Component{
    render(){
        return(
        <div style={{backgroundColor:'white'}}>
            <Row>
                <Col span={20}></Col>
                <Col span={1}><Time/></Col>
                <Col span={3}></Col>
            </Row>
            <Row>
                <Col span={8}>
                    <Icon type="left"  style={{color:'orangered',fontSize: 20}} onClick = {this.cancel}/>
                </Col>
                <Col span={8} offset={3}>
                    <h2>{this.props.name}</h2>
                </Col>
                <Col span={8}></Col>
            </Row>
        </div>
        );
    }


    cancel(){
        fetch()
    }
}