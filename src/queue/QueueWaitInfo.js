import React,{ Component } from 'react';
import GridHeader from '../component/Header/GridHeader';
import '../style/verify.css';
import { Row,Col,Button } from 'antd';

export default class QueueWaitInfo extends Component{
    static defaultProps = {
        smallNumber:'',
        smallTime:'',
        smallWait:'',
        middleNumber:'',
        middleTime:'',
        middleWait:'',
        bigNumber:'',
        bigTime:'',
        bigWait:''
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
                            <Col span='6'>{this.props.smallNumber}</Col>
                            <Col span='6'>{this.props.smallWait}桌</Col>
                            <Col span='6'>>{this.props.smallTime}分钟</Col>
                        </Row>
                        <Row className='Wait-type'>
                            <Col span='6'>中桌(5-6人)</Col>
                            <Col span='6'>{this.props.middleNumber}</Col>
                            <Col span='6'>{this.props.middleWait}桌</Col>
                            <Col span='6'>>{this.props.middleTime}分钟</Col>
                        </Row>
                        <Row className='Wait-type'>
                            <Col span='6'>大桌(6人以上)</Col>
                            <Col span='6'>{this.props.bigTime}</Col>
                            <Col span='6'>{this.props.bigTime}桌</Col>
                            <Col span='6'>>{this.props.bigTime}分钟</Col>
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