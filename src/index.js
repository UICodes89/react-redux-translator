import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
);
