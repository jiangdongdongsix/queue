import React,{ Component } from 'react';
import GridHeader from '../component/Header/GridHeader';
import '../style/verify.css';
import { Row,Col,Button } from 'antd';

export default class QueueWaitInfo extends Component{
    constructor(props) {
        super();
        this.state = {
            smallNumber:"",
            smallWait:"",
            smallTime:"",
            middleNumber:"",
            middleWait:"",
            middleTime:"",
            bigNumber:"",
            bigWait:"",
            bigTime:"",
        };
    }
    render(){
        return(
            <div>
                <GridHeader name='等位信息'/>
                <Row>
                    <Col span='8'></Col>
                    <Col span='8' className='Wait-bg'>
                        <Row className='Wait-title'>
                            <Col span='6'>队列类型</Col>
                            <Col span='6'>当前叫号</Col>
                            <Col span='6'>等待桌数</Col>
                            <Col span='6'>预估时间</Col>
                        </Row>
                        <Row className='Wait-type'>
                            <Col span='6'>小桌(1-4人)</Col>
                            <Col span='6'>{this.state.smallNumber}</Col>
                            <Col span='6'>{this.state.smallWait}桌</Col>
                            <Col span='6'>>{this.state.smallTime}分钟</Col>
                        </Row>
                        <Row className='Wait-type'>
                            <Col span='6'>中桌(5-6人)</Col>
                            <Col span='6'>{this.state.middleNumber}</Col>
                            <Col span='6'>{this.state.middleWait}桌</Col>
                            <Col span='6'>>{this.state.middleTime}分钟</Col>
                        </Row>
                        <Row className='Wait-type'>
                            <Col span='6'>大桌(6人以上)</Col>
                            <Col span='6'>{this.state.bigTime}</Col>
                            <Col span='6'>{this.state.bigTime}桌</Col>
                            <Col span='6'>>{this.state.bigTime}分钟</Col>
                        </Row>
                        <Row>
                            <Col span='4'></Col>
                            <Col span='16'>
                                <Button type='primary' className='Wait-button' size='large' style={{}}>排队取号</Button>
                            </Col>
                            <Col span='4'></Col>
                        </Row>
                    </Col>
                    <Col span='8'></Col>
                </Row>       
            </div>
        );
    }
}