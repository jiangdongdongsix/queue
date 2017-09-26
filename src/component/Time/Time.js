import React,{ Component } from 'react'
import { Row,Col } from 'antd';
import './time.css'

export default class Time extends Component{
    constructor(){
        var date = new Date();
        super();
        this.state = {
            year:date.getFullYear(),
            month:date.getMonth()+1,
            day:date.getDate(),
            hour:date.getHours(),
            minute:date.getMinutes()
        }
    }
    componentWillMount(){
        this.timer = setInterval(()=>{
            var date = new Date();
            this.setState({
                year:date.getFullYear(),
                month:date.getMonth()+1,
                day:date.getDate(),
                hour:date.getHours(),
                minute:date.getMinutes()})
        })
    }

    render(){
        return(
            <Row>
                <Col span={22}></Col>
                <Col span={2}>
                    <h2>{this.state.hour}:{this.state.minute}</h2>
                    <p>{this.state.year}/{this.state.month}/{this.state.day}</p>
                </Col>
            </Row>
        );
    }
}