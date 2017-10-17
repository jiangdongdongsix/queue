import React,{Component} from 'react';
import { Row,Col,Icon } from 'antd';
import Time from '../Time/Time';
import history from './../../history';
import './GridHeader.css'

export default class GridHeader extends Component{

    cancel(){
        history.push({
            pathname: '/'
        })
    }
    render(){
        return(
        <div>
            <Row>
                <Col span={12}></Col>
                <Col span={3} className='gridHeader'><Time/></Col>
                <Col span={9}></Col>
            </Row>
            <Row>
                <Col span={8}></Col>
                <Col span={8} className='gridHeader'>
                    <Col span={11}>
                        <Icon type="left"  style={{color:'orangered',fontSize: 20}} onClick = {this.cancel.bind(this)} />
                    </Col>
                    <Col span={13} style={{textAlign:'left'}}>
                        <h2>{this.props.name}</h2>
                    </Col>
                </Col>
                <Col span={8}></Col>
            </Row>
        </div>
        );
    }
}