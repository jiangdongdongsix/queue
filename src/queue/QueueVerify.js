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
        console.log(this.value);
    }

    onChangeUserName=(e) => {
        this.setState({ queueNumber: e.target.value });
    }

    verify(){
        fetch("/queue/personalqueueinfo?queueNumber=" + this.state.queueNumber)
            .then(function(response) {
                return response.json();
            }).then(function (jsonData) {
            console.log(jsonData);
            if(jsonData.queueInfo.waitTime >0){
                history.push({
                    pathname: '/codewait/'+ JSON.stringify(jsonData.queueInfo)
                })
            }else{

                history.push({
                    pathname: '/code'
                })
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
                <div>
                    <Row>
                        <Col span={8}></Col>
                        <Col span={8} className='Verify-method'>
                            <h3>方式一</h3>
                        </Col>
                    </Row>
                    <Row className='Verify-method1'>
                        <Col span={8}></Col>
                        <Col span={1}>
                            <Icon type="mobile" style={{fontSize:18,paddingTop:3}}/>
                        </Col>
                        <Col span={2}>
                            <h3>排号:</h3>
                        </Col>
                        <Col span={5}>
                            <Input placeholder='请输入排号'
                                   style={{border:0}} onFocus={this.handleNumber.bind(this)}
                                   value={queueNumber}
                                   onChange={this.onChangeUserName.bind(this)}/>
                        </Col>
                        <Col span={8}></Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col span={8}></Col>
                        <Col span={8} className='Verify-method'>
                            <h3>方式二</h3>
                        </Col>
                    </Row>
                    <Row className='Verify-method2'>
                        <Col span={8}></Col>
                        <Col span={8}><p>请将您收到的二维码，放置感应区进行扫描</p></Col>
                        <Col span={8}></Col>
                    </Row>
                    <Row>
                        <Col span={8}></Col>
                        <Col span={8} style={{textAlign:'center'}}>
                            <img src={verify} alt='' style={{width:'30%',height:'30%'}}/>
                        </Col>
                        <Col span={8}></Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col span={8}></Col>
                        <Col span={8} className='Button-panel'>
                        <div className="clearFloat" style={{marginTop:'10px'}}>
                        <div className="marginSet">
                            <div className="keyborardContent clearFloat">
                                <div className="keyborardLeft clearFloat" id="keyborardNumber" style={{width:'70%',marginLeft:'50px'}}>
                                    <div><input onClick={this.addNumber.bind(this)} type="button" value="1"/></div>
                                    <div><input type="button" value="2"/></div>
                                    <div><input type="button" value="3"/></div>
                                    <div><input type="button" value="4"/></div>
                                    <div><input type="button" value="5"/></div>
                                    <div><input type="button" value="6"/></div>
                                    <div><input type="button" value="7"/></div>
                                    <div><input type="button" value="8"/></div>
                                    <div><input type="button" value="9"/></div>
                                    <div><input type="button" value="清空"/></div>
                                    <div><input type="button" value="0"/></div>
                                    <div><input type="button" value="X"/></div>
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
                        <Col span={8}></Col>
                    </Row>

                </div>
            </div>
        );
    }
}