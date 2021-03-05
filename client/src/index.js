import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './ComponenteMain/App';
import "./ComponenteMain/EstiloMain/App.css";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
