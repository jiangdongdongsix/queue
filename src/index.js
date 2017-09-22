import React from 'react';
import ReactDOM from 'react-dom';
import RouterList from './rounter';
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import history from './history';

history.listen(function (location) { return location })
// history.listen(location => console.log('location:', location))
ReactDOM.render(
    <Router history={history} >
        {RouterList}
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
