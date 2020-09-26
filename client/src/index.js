import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import UIweb from './views/UIweb';
import Login from './views/login';
import Register from './views/register';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import NotFound from './views/notFound';

// ReactDOM.render(
//   <React.StrictMode>
//     <UIweb/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const routing = (
  <Router>
    <div>
      <Route path="/" exact component={UIweb} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route component={NotFound} />
    </div>
  </Router>
);

ReactDOM.render(
  routing, document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
