import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
// import * as ReactDOM from 'react-dom/client';
import App from './App';

// const root = ReactDOM.createRoot('<div></div>');

 axios.defaults.baseURL ='https://kenjose.herokuapp.com/'
//axios.defaults.baseURL ='http://localhost:5000/'


ReactDOM.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


