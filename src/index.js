import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// css general
import './styled-components/main.css'
// redux
import store from './redux-toolkit/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store} > 
    <App />
  </Provider>,
  document.getElementById('root')
);
