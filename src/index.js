// React
import React from 'react';
import ReactDOM from 'react-dom';
import './style/css/style.css';
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';

// Libs
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// Initial
ReactDOM.render(
  <App/>
  ,document.getElementById('root')
);
registerServiceWorker();
