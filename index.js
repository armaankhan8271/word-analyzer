import  ReactDOM  from "react-dom";
import React from 'react';
import "./index.css";
import App from './App.js';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(<App/>,document.getElementById("root"))
ReactDOM.render(
    <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);