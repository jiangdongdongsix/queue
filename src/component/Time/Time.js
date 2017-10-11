import React,{ Component } from 'react';
import { Row,Col } from 'antd';

export default class Clock extends Component{
    constructor(){
        super();
        this.state = {
            date:new Date()
        }
    }

    componentWillmount(){
        this.timer = setInterval(()=>{
            this.setState({ date:new Date })
        },1000)
    }

    componentWillUnmount () {
        clearInterval(this.timer)
    }
    render(){
        return (
            <Row>
                <Col span={22}></Col>
                <Col span={2}>
                    <h2>{this.state.date.toLocaleTimeString().substring(2)}</h2>
                    <p>{this.state.date.toLocaleDateString()}</p>
                </Col>
            </Row>
        )
    }
}