import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import configureStore from './redux/store'
import { Provider } from 'react-redux'
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={configureStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
