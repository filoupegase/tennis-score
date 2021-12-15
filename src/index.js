import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Provider from './store-redux/store';
import './index.css';


const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider>
      <App />
    </Provider>,
    rootElement);

reportWebVitals();
