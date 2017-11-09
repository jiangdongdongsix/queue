import React,{ Component } from 'react';
import { Row,Col } from 'antd';
import GridHeader from '../component/Header/GridHeader';
import '../style/verify.css';
import Ordersucceed from '../img/order_succeed.png'
import QRcode from '../img/QRcode.png'
import { Button } from 'antd';
import history from './../history';

export default class QueueCode extends Component{

    constructor(props) {
        super();
        let data = JSON.parse(props.match.params.queueinfo);
        console.log(data);
        this.state = {
            date:new Date(),
            waitTime :data.waitTime,
            waitPeople:data.waitPopulation,
            queueId: data.queueId,
            description:data.tableType.describe,
            tableTypeName:data.tableType.tableTypeName
        };
    }

    gohome(){
        history.push({
            pathname: '/'
        })
    }

    render(){
        return (
            <div className='OrderInfo'>
                <GridHeader name='单号详情'/>
                <Row style={{height:'89%'}}>
                    <Col span={8}> </Col>
                    <Col span={8} className='Media-width' style={{height:'100%'}}>
                        <div className='Code-panel'>
                            <div className='Code-bg'>
                                <ul className='Code-content Code-waitpic'>
                                    <li>
                                        <img src={Ordersucceed} alt='wait' style={{width:'30%',height:'30%'}}/>
                                    </li>
                                    <li><h3>您已取号成功</h3></li>
                                    <li><span>请留意出票口，小票已打印</span></li>
                                </ul>
                                <div className='Code-waitinfo'>
                                    <Row>
                                        <Col span={6}>取号时间:</Col>
                                        <Col span={10}>{this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString().substring(2)}</Col>
                                    </Row>
                                    <Row>
                                        <Col span={8}>需等待桌数</Col>
                                        <Col span={8}>预估时间</Col>
                                        <Col span={8}><h2 style={{color:'#F27242',fontFamily:'weight',fontSize:'27px',lineHeight:'27px'}}>{this.state.tableTypeName+this.state.queueId}</h2></Col>
                                    </Row>
                                    <Row>
                                        <Col span={8} style={{color:'#F27242'}}>{this.state.waitPeople}桌</Col>
                                        <Col span={8} style={{color:'#F27242'}}>{this.state.waitTime}分钟</Col>
                                        <Col span={8}>{this.state.description}</Col>
                                    </Row>
                                    <Row>
                                        <Col span={8}></Col>
                                        <Col span={8}><img src={QRcode} alt='QRcode' className="Order-QRCode"/></Col>
                                        <Col span={8}></Col>
                                    </Row>
                                    <Row>
                                        <Col span={8}></Col>
                                        <Col span={8}></Col>
                                        <Col span={8}></Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={8}></Col>
                </Row>
                <div>

                </div>
            </div>
        );
    }
}