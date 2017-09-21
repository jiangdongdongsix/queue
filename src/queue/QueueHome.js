import React, { Component } from 'react';
import './../App.css';
import {Link} from 'react-router-dom'
export default class QueueHome extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h2>Welcome to React</h2>
                </div>
                <div className="centerInfo">
                    <div className="queueInfo">
                        <input  type="button" className="btn btn-success" value="排队抽号" />
                    </div>
                    <div className="checkInfo">
                        <input  type="button" className="entry" value="入场验证" />
                        <Link to = "/QueueUp"><input  type="button" className="checkQueue" value="查看排队" /></Link>
                    </div>
                </div>

            </div>
        );
    }
}
