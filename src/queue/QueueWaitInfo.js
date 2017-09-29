import React,{ Component } from 'react';
import GridHeader from '../component/Header/GridHeader';
import '../style/verify.css';
import { Row,Col,Button } from 'antd';
import history from './../history';

export default class QueueWaitInfo extends Component{
    constructor() {
        super();
        this.state = {
            stableType:"",
            smallNumber:"",
            smallWait:"",
            smallTime:"",
            smallMin:"",
            smallMax:"",
            mtableType:"",
            middleNumber:"",
            middleWait:"",
            middleTime:"",
            middleMin:"",
            middleMax:"",
            btableType:"",
            bigNumber:"",
            bigWait:"",
            bigTime:"",
            bigMin:"",
            bigMax:""
        };
    }
    handleWaitInfo(){
        let that = this;
        fetch('/queue/allqueueinfo').then(function(response) {
            return response.json();
        }).then(function (jsonData) {
            console.log(jsonData);
            that.setState({
                stableType:jsonData.queueInfo[0].tableType.tableTypeName,
                smallNumber:'A101',
                smallWait:jsonData.queueInfo[0].waitPopulation,
                smallTime:jsonData.queueInfo[0].waitTime,
                smallMin:jsonData.queueInfo[0].tableType.eatMinNumber,
                smallMax:jsonData.queueInfo[0].tableType.eatMaxNumber,
                mtableType:jsonData.queueInfo[1].tableType.tableTypeName,
                middleNumber:'B210',
                middleWait:jsonData.queueInfo[1].waitPopulation,
                middleTime:jsonData.queueInfo[1].waitTime,
                middleMin:jsonData.queueInfo[1].tableType.eatMinNumber,
                middleMax:jsonData.queueInfo[1].tableType.eatMaxNumber,
                btableType:jsonData.queueInfo[2].tableType.tableTypeName,
                bigNumber:'C100',
                bigWait:jsonData.queueInfo[2].waitPopulation,
                bigTime:jsonData.queueInfo[2].waitTime,
                bigMin:jsonData.queueInfo[2].tableType.eatMinNumber,
                bigMax:jsonData.queueInfo[2].tableType.eatMaxNumber
            })
        }).catch(function () {
            console.log('查看排队失败');
        });
    }
    componentDidMount(){
        this.handleWaitInfo();
    }

    handleQueueCall(){
        history.push({
            pathname:'/'
        })
    }
    
    render(){
        return(
            <div className='Code'>
                <GridHeader name='等位信息'/>
                <Row style={{height:'90%'}}>
                    <Col span='8'></Col>
                    <Col span='8' className='Wait-bg' style={{height:'100%'}}>
                        <Row className='Wait-title'>
                            <Col span='6'>队列类型</Col>
                            <Col span='6'>当前叫号</Col>
                            <Col span='6'>等待桌数</Col>
                            <Col span='6'>预估时间</Col>
                        </Row>
                        <Row className='Wait-type'>
                            <Col span='6'>{this.state.stableType}({this.state.smallMin}-{this.state.smallMax}人)</Col>
                            <Col span='6'>{this.state.smallNumber}</Col>
                            <Col span='6'>{this.state.smallWait}桌</Col>
                            <Col span='6'>>{this.state.smallTime}分钟</Col>
                        </Row>
                        <Row className='Wait-type'>
                            <Col span='6'>{this.state.mtableType}({this.state.middleMin}-{this.state.middleMax}人)</Col>
                            <Col span='6'>{this.state.middleNumber}</Col>
                            <Col span='6'>{this.state.middleWait}桌</Col>
                            <Col span='6'>>{this.state.middleTime}分钟</Col>
                        </Row>
                        <Row className='Wait-type'>
                            <Col span='7'>{this.state.btableType}({this.state.bigMin}-{this.state.bigMax}人)</Col>
                            <Col span='5'>{this.state.bigNumber}</Col>
                            <Col span='6'>{this.state.bigTime}桌</Col>
                            <Col span='6'>>{this.state.bigTime}分钟</Col>
                        </Row>
                        <Row>
                            <Col span='4'></Col>
                            <Col span='16'>
                                <Button type='primary' className='Wait-button' size='large' onClick={this.handleQueueCall.bind(this)}>返回首页</Button>
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