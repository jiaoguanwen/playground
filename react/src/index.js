import React from "react";
import ReactDOM from "react-dom";

const name = "jiaoguanwen";
const src = "https://www.baidu.com/img/bd_logo1.png?where=super";
const element = (
  <div tabIndex="0">
    <input value={name} />
    <h1 tabIndex="4">Hello, world!</h1>
    <div tabIndex="1">Hello, {toUpperCase(name)}!</div>
    <span tabIndex="3">{2 + 2}</span>
    <p tabIndex="2">{Math.random()}</p>
    <img src={src} alt="" />
  </div>
);

function toUpperCase(string) {
  return string.toUpperCase();
}

ReactDOM.render(element, document.getElementById("root"));
