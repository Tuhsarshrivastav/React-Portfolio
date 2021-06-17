import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  body{
    font-family: 'Poppins', sans-serif;
    background: #242424;
    line-height: 15px;
  }
}
`;

ReactDOM.render(
  <>
    <Styles />
    <App />
  </>,
  document.getElementById("root")
);
