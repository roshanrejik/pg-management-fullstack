import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import {Provider} from 'react-redux'
import configureStore from './store/ConfigureStore';
const root= ReactDOM.createRoot(document.getElementById('root')) 
const store=configureStore()
store.subscribe(()=>console.log(store.getState()))
root.render(
   <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>
);
