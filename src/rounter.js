import React from 'react'
import {BrowserRouter as Router,Route } from 'react-router-dom'
// import {
//     Route,
//     Switch
// } from 'react-router-dom';

import QueueUp from './queue/QueueUp'
import App from './App'


const RouterList = (
            <div>
                <Route exact path='/' component={App} />
                <Route path='/queueup/:id' component={QueueUp} />
            </div>
)
export default RouterList
