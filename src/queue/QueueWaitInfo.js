import React,{ Component } from 'react';
import GridHeader from '../component/Header/GridHeader';
import '../style/verify.css';
import { Row,Col,Button } from 'antd';
import history from './../history';

export default class QueueWaitInfo extends Component{
    constructor() {
        super();
            this.state = {
                Info:[
                        {tableType:{
                            description:'',
                            eatMax: '',
                            eatMin: '',
                            tableNumber: '',
                            table:'',
                            id:''
                        },
                        waitPopulation:'',
                        waitTime:''
                    }
                ]
            };
    }
    handleWaitInfo(){
        let that = this;
        fetch('/queue/allqueueinfo').then(function(response) {
            return response.json();
        }).then(function (jsonData) {
            console.log(jsonData);
            let len = jsonData.queueInfo.length;
            console.log(len);
            let queueInfo = []
            for(var i=0;i<len;i++){
                queueInfo.push({
                        tableType:{
                            description:jsonData.queueInfo[i].tableType.describe,
                            eatMax: jsonData.queueInfo[i].tableType.eatMaxNumber,
                            eatMin: jsonData.queueInfo[i].tableType.eatMinNumber,
                            tableNumber: 101,
                            tableName:jsonData.queueInfo[i].tableType.tableTypeName,
                            id:jsonData.queueInfo[i].tableType.id
                        },
                        waitPopulation:jsonData.queueInfo[i].waitPopulation,
                        waitTime:jsonData.queueInfo[i].waitTime
                });

            }
            that.setState({Info:queueInfo});
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
        const tableElements=[];      //保存渲染以后 JSX的数组
        for(let table of this.state.Info){
            console.log(table);
            tableElements.push(
            <Row className='Wait-type' key={table.tableType.id}>
                <Col span='6'>{table.tableType.description}({table.tableType.eatMin}-{table.tableType.eatMax}人)</Col>
                <Col span='6'>{table.tableType.tableName+table.tableType.tableNumber}</Col>
                <Col span='6'>{table.waitPopulation}桌</Col>
                <Col span='6'>{table.waitTime>0 ? '>'+table.waitTime+'分钟' : '无需等待'}</Col>
            </Row>)
        }
        return(
            <div className='Code'>
                <GridHeader name='等位信息'/>
                <Row style={{height:'89%'}}>
                    <Col span='8'></Col>
                    <Col span='8' className='Media-width Wait-bg' style={{height:'100%'}}>
                        <Row className='Wait-title'>
                            <Col span='6'>队列类型</Col>
                            <Col span='6'>当前叫号</Col>
                            <Col span='6'>等待桌数</Col>
                            <Col span='6'>预估时间</Col>
                        </Row>
                        {tableElements}
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