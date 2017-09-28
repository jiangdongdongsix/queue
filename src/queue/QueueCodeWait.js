import React,{ Component } from 'react';
import { Row,Col } from 'antd';
import GridHeader from '../component/Header/GridHeader';
import '../style/verify.css';
import codes from '../img/wait_pic.png'
import QRcode from '../img/QRcode.png'
export default class QueueCode extends Component{

    constructor(props) {
        super();
        let data = JSON.parse(props.match.params.queue);
        console.log(data);
        this.state = {
            waitTime :data.waitTime,
            waitPeople:data.waitPopulation,
            queueId: data.queueId,
            decription:data.tableType.describe,
            tableTypeName:data.tableType.tableTypeName
        };
    }

    render(){
        return (
            <div>

                <GridHeader name='扫码入场'/>
                <Row>
                    <Col span={8}> </Col>
                    <Col span={8}>
                        <div className='Code-panel'>
                            <div className='Code-bg'>
                                <ul className='Code-content Code-waitpic'>
                                    <li>
                                        <img src={codes} alt='wait' style={{width:'40%',height:'40%'}}/>
                                    </li>
                                    <li><h3>排号未到，请您再等一会</h3></li>
                                </ul>
                                <div className='Code-waitinfo'>
                                    <Row>
                                        <Col span={1}></Col>
                                        <Col span={6}>取号时间:</Col>
                                        <Col span={8}>2017/9/26 10:00</Col>
                                    </Row>
                                    <Row>
                                        <Col span={1}></Col>
                                        <Col span={6}>当前叫号:</Col>
                                        <Col span={4}>A12</Col>
                                    </Row>
                                    <Row>
                                        <Col span={8}>等待桌数</Col>
                                        <Col span={8}>预估时间</Col>
                                        <Col span={8}>{this.state.decription+this.state.queueId}</Col>
                                    </Row>
                                    <Row>
                                        <Col span={8}>{this.state.waitPeople}</Col>
                                        <Col span={8}>{this.state.waitTime}分钟</Col>
                                        <Col span={8}>{this.state.tableTypeName}</Col>
                                    </Row>
                                    <Row>
                                        <Col span={8}></Col>
                                        <Col span={8}><img src={QRcode} alt='QRcode' style={{width:'60%',height:'60%'}}/></Col>
                                        <Col span={8}></Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </div>
        );
    }
}