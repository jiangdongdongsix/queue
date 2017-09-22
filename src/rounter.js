import React from 'react'
// import {BrowserRouter as Router,Route,IndexRoute } from 'react-router-dom'
import {
    Route,
} from 'react-router'
import QueueHome from './queue/QueueHome'
import QueueUp from './queue/QueueUp'
import App from './App'

const RouterList = (
    <Route>
        <Route path="/" component={App}>
            <Route  path="/QueueHome" component={QueueHome}/>
            <Route path="/QueueUp/:id" component={QueueUp}/>
        </Route>
    </Route>
)
export default RouterList
