import React,{ Component } from 'react'
import { Row,Col } from 'antd';
import './time.css'

export default class Time extends Component{
    constructor(){
        super();
        var date = new Date();
        this.state = {
            date:new Date()
        }
    }
    componentWillMount(){
        this.timer = setInterval(()=>{
            this.setState({ date:new Date() })
        },1000)
    }

        componentWillUnMount(){
            clearInterval(this.timer);
        }
    render(){
        return(
            <Row>
                <Col span={22}></Col>
                <Col span={2}>
                    {/*<h2>{this.state.hour}:{this.state.minute}</h2>*/}
                    {/*<p>{this.state.year}/{this.state.month}/{this.state.day}</p>*/}
                    <h2>{this.state.date.toLocaleTimeString().substring(2)}</h2>
                    <p>{this.state.date.toLocaleDateString()}</p>
                </Col>
            </Row>
        );
    }
}