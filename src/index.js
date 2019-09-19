import React from "react";
import 'es6-shim';
import 'es5-shim';
import 'react-app-polyfill/ie11'
import 'core-js/features/array/find';
import 'core-js/features/array/includes';
import 'core-js/features/number/is-nan';
import ReactDOM from "react-dom";
//import './index.css';
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {RoomProvider} from "./context"
ReactDOM.render(
  <RoomProvider>
    <Router>
    <App />
  </Router>

  </RoomProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
