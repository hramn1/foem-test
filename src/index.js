import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {default as DevScript} from "./script.js"


ReactDOM.render(
    <App
    />,
    document.querySelector(`#root`)
);
const devScript = new DevScript();
