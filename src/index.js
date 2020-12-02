import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./styles/index.css";

const root = (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

ReactDOM.render(root, document.getElementById("root"));
