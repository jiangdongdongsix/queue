import React,{ Component } from 'react';
import { Row,Col,Icon,Input,Button } from 'antd';
import GridHeader from '../component/Header/GridHeader';
import verify from '../img/verify_pic.png';
import '../style/verify.css';
import history from './../history';

export default class QueueVerify extends Component{

    constructor(){
        super();
        this.state = {
            queueNumber:""
        }
    }


    handleNumber(events){
        console.log('333');
    }
    
    addNumber(event){
        if(typeof event.target.value == 'string' && event.target.value !== "清空" && event.target.value !== "X"){
            this.setState({queueNumber:this.state.queueNumber + event.target.value});
        }
        console.log(event.target.value);
    }

    handleClear(){
        this.setState({queueNumber:''});
    }
    handleDelete(){
        let len = this.state.queueNumber.length;
        if(len > 0) {
            this.setState({queueNumber: this.state.queueNumber.slice(0, -1)});
        }
    }
    onChangeUserName=(e) => {
        this.setState({ queueNumber: e.target.value });
    }

    verify(){
        console.log("101010010101001010000");
        fetch("/queue/personalqueueinfo?queueNumber=" + this.state.queueNumber)
            .then(function(response) {
                return response.json();
            }).then(function (jsonData) {
            console.log(jsonData);
            if(jsonData.ErrorCode==='1'){
                console.log("排号无效")
            }else{
                if(typeof jsonData.extractFlag !== undefined &&jsonData.extractFlag == '1'){
                    fetch('/queue?qid='+ jsonData.queueInfo.queueId, {
                        method: 'DELETE',}).then(function(response) {
                        return response.json();
                    }).then(function (jsonData) {
                        console.log(jsonData);
                        history.push({
                            pathname: '/code'
                        })
                    }).catch(function () {
                        console.log('取消出错');
                    });

                }else{
                    history.push({
                        pathname: '/codewait/'+ JSON.stringify(jsonData.queueInfo)
                    })
                }
            }


        }).catch(function () {
            console.log('获取时间出错');
        });

    }

    render(){

        const { queueNumber}= this.state;
        return (
                <div className='Verify'>
                <GridHeader name='入场验证'/>
                    <Row style={{height:'89%'}}>
                        <Col span={8}></Col>
                        <Col span={8} className='Media-width' style={{height:'100%'}}>
                            <Row>
                                <Col span={24} className='Verify-method'>
                                    <h3>方式一</h3>
                                </Col>
                            </Row>
                            <Row className='Verify-method1'>
                                <Col span={1}>
                                    <Icon type="mobile" style={{fontSize:18,paddingTop:3}}/>
                                </Col>
                                <Col span={5}>
                                    <h3>排号:</h3>
                                </Col>
                                <Col span={18}>
                                    <Input placeholder='请输入排号'
                                           style={{border:0}} onFocus={this.handleNumber.bind(this)}
                                           value={queueNumber}
                                           onChange={this.onChangeUserName.bind(this)}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24} className='Verify-method'>
                                    <h3>方式二</h3>
                                </Col>
                            </Row>
                            <Row className='Verify-method2'>
                                <Col span={24}><p>请将您收到的二维码，放置感应区进行扫描</p></Col>
                            </Row>
                            <Row>
                                <Col span={24} style={{textAlign:'center'}}>
                                    <img src={verify} alt='' className="Verify-img"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24} className='Button-panel'>
                                    <div className="clearFloat" style={{marginTop:'10px'}}>
                                        <div className="marginSet">
                                            <div className="keyborardContent clearFloat">
                                                <div className="keyborardLeft clearFloat" id="keyborardNumber" style={{width:'70%',marginLeft:'50px'}} onClick={this.addNumber.bind(this)}>
                                                    <div><input type="button" value="1"/></div>
                                                    <div><input type="button" value="2"/></div>
                                                    <div><input type="button" value="3"/></div>
                                                    <div><input type="button" value="4"/></div>
                                                    <div><input type="button" value="5"/></div>
                                                    <div><input type="button" value="6"/></div>
                                                    <div><input type="button" value="7"/></div>
                                                    <div><input type="button" value="8"/></div>
                                                    <div><input type="button" value="9"/></div>
                                                    <div><input type="button" value="清空" onClick={this.handleClear.bind(this)}/></div>
                                                    <div><input type="button" value="0"/></div>
                                                    <div><input type="button" value="X" onClick={this.handleDelete.bind(this)}/></div>
                                                </div>
                                                <div className="keyborardRight" style={{width:'10%'}} >
                                                    <div>
                                                        <input type="button" value="验证" onClick={this.verify.bind(this)}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
        );
    }
}