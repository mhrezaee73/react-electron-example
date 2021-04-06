import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  store, { persistor } from './redux/store';
import './index.css';

ReactDOM.render(<App store={store} persistor={persistor}  />, document.getElementById('root'));