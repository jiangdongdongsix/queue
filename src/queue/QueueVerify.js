import React,{ Component } from 'react';
import { Row,Col,Icon,Input,Button } from 'antd';
import GridHeader from '../component/Header/GridHeader';
import verify from '../img/verify_pic.png';
import '../style/verify.css';

export default class QueueVerify extends Component{

    handleNumber(events){
        console.log('333');
        
    }
    
    addNumber(event){
        console.log(this.value);
    }
    render(){
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
                            <Input placeholder='请输入排号' style={{border:0}} onFocus={this.handleNumber.bind(this)}/>
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
                                <div className="keyborardLeft clearFloat" id="keyborardNumber" style={{width:'75%'}}>
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
                                <div className="keyborardRight"style={{width:'15%'}} >
                                    <div>
                                        <input type="button" value="验证"/>
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