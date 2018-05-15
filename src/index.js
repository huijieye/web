import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './_commun/src/stores/Store';
import {Provider} from 'react-redux'

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
