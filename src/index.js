import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,browserHistory } from 'react-router-dom'
import myhistory from './history';
import RouterList from './rounter';
import registerServiceWorker from './registerServiceWorker';
// history.listen(location => console.log('location:', location))
ReactDOM.render(
        <Router history={myhistory}>
            { RouterList }
        </Router>,
    document.getElementById('root'));
registerServiceWorker();
