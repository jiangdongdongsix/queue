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


const RouterList = (
            <div>
                <Route exact path='/' component={App} />
                <Route path='/queueup/:id' component={QueueUp} />
                <Route path ='/verify' component={QueueVerify}/>
                <Route path='/code' component={QueueCode}/>
                <Route path='/codeerror' component={QueueCodeError}/>
                <Route path='/codewait' component={QueueCodeWait}/>
                <Route path='/waitinfo' component={QueueWaitInfo}/>
            </div>
)
export default RouterList