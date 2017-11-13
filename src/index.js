import React from 'react';
import ReactDOM from 'react-dom';
import RouterList from './rounter';
import { Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import history from './history';
import './index.css'


const unlisten = history.listen(location => {
    console.log(location.pathname)
})

unlisten();

// history.listen(location => console.log('location:', location))
ReactDOM.render(
    <Router history={history} >
        {RouterList}
    </Router>,




document.getElementById('root'));
registerServiceWorker();
