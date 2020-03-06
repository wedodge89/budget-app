import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./fonts/Dollar-Bill.ttf"

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
