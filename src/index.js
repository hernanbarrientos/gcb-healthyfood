import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import Reset from "./styles/generic/Reset";
import Base from "./styles/elements/Base";
import {BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    
        <Reset />
        <Base />
        <App/>
     
  </React.StrictMode>,
  document.getElementById("root")
);
