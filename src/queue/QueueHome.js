import React, { Component } from 'react';
import './../style/queue.css';
import {Link} from 'react-router-dom'
import { Icon  } from 'antd';
import history from './../history';

export default class QueueHome extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to React</h2>
                </div>
                <div className="centerInfo">
                    <div className="queueInfo">
                        <input  type="button" className="btn btn-success" value="排队抽号" />
                    </div>
                    <div className="checkInfo">
                        <input  type="button" className="entry" value="入场验证" onClick={this.go} />
                        <Link to = "/queueup/5"><input  type="button" className="checkQueue" value="查看排队" /></Link>
                    </div>
                    <div  className="trip">
                        <Icon type="desktop" className = "desIcon"/>
                        <p>查看个人状况及入场验证，请将您收到的二维码，放置感应区进行扫描</p>
                    </div>
                </div>
                <div className="footer">
                    <Icon type="qrcode" style={{fontSize:70 }} />
                </div>
            </div>
        );
    }

    static go(){
        alert("666");
        history.push({
            pathname: '/queueup/5',
        })
    }
}
