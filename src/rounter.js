import React from 'react'
import {BrowserRouter as Router,Route } from 'react-router-dom'
// import {
//     Route,
//     Switch
// } from 'react-router-dom';

import QueueUp from './queue/QueueUp'
import App from './App'
import QueueVerify from './queue/QueueVerify'
import QueueCode from './queue/QueueCode'
import QueueCodeError from './queue/QueueCodeError'
import QueueCodeWait from './queue/QueueCodeWait'
import QueueWaitInfo from './queue/QueueWaitInfo'
import QueueOrderInfo from './queue/QueueOrderInfo'
import Manage from './queue/Manage'


const RouterList = (
            <div style={{height:'100%'}}>
                <Route exact path='/' component={App} />
                <Route path='/queueup/:id' component={QueueUp} />
                <Route path ='/verify' component={QueueVerify}/>
                <Route path='/code' component={QueueCode}/>
                <Route path='/codeerror' component={QueueCodeError}/>
                <Route path='/codewait/:queue' component={QueueCodeWait}/>
                <Route path='/waitinfo' component={QueueWaitInfo}/>
                <Route path='/manage' component={Manage}/>
                <Route path='/orderinfo/:queueinfo' component={QueueOrderInfo}/>
            </div>
)
export default RouterList
