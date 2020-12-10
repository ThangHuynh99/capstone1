import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import UIweb from './views/UIweb';
import Login from './views/login';
import Register from './views/register';

import Changepw from './views/changepw';
import { BrowserRouter as Router, Route} from "react-router-dom";
// import NotFound from './views/notFound';
import Occasion from './views/Occasion';
import Profile from './views/profile';
import Schedule from './views/Schedule';
import Dashboard from './views/dashboard';
import Example from './views/Option';
import Vote from './views/Vote';
import MenuAdmin from './views/menuAdmin';
import TablePoll from './views/tableDataUser';
import SendEmail from './views/forgot pw/sendEmail';
import Otp from './views/forgot pw/otp';
import NewPass from './views/forgot pw/newPass';

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
      <Route path="/change" exact component={Changepw} />
      <Route path="/create" exact component={Occasion} />
      <Route path="/schedule" exact component={Schedule} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/dashboard" exact component={Dashboard}/>
      <Route path="/option" exact component={Example}/>
      <Route path="/schedule/vote" exact component={Vote}/>
      <Route path="/admin" exact component={MenuAdmin}/>
      <Route path="/forgot" exact component={SendEmail}/>
      <Route path="/forgot/auth" exact component={Otp}/>
      <Route path="/forgot/auth/reset" exact component={NewPass}/>
      {/* <Route  exact={true} component={NotFound} /> */}
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
