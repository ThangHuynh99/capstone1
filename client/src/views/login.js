import React, { Component } from 'react';
import '../scss/bootstrap/css/bootstrap.css';
import '../scss/login.css';
import '../scss/fa/css/all.css';
import { NavLink } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      user: []
    }
  }
  Login1 = (e) => {
    e.preventDefault();
    var message = document.getElementById('error');
    const users = {
      user_email: this.state.email,
      user_password: this.state.password
    };
    fetch('http://localhost:3001/checklogin', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(users)
    })
      .then(response => response.text())
      .then(result => {
        // chua on sai pass
        if (result === null) {
          alert("Account don't exist")
          message.innerHTML = "Account don't exist!!!";
        }
        else {
          console.log(result);
          var user = JSON.parse(result);
          console.log(user.users_id)
          console.log(user.users_email)
          // this.setState({user:result})
          // console.log(this.state.user);
          // console.log(this.state.user[0].users_id);
          sessionStorage.setItem("users_id", user.users_id);
          sessionStorage.setItem("users_email", user.users_email);
          //console.log(sessionStorage["users_email"],sessionStorage["users_id"])

          setTimeout(() => {
            window.location = "/";
          }, 1500);
        }

      })
      .catch(error => {
        console.log(error)
      })
  }
  handleEmail = (e) => {
    this.setState({ email: e.target.value })
  }
  handlePassword = (e) => {
    this.setState({ password: e.target.value })
  }
  render() {
    return (
      <div className="bgr">
        <nav className="navbar navbar-expand-lg navbar-light pb-5">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link pr-5" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link pr-5" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link pr-5" href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </nav>
        <div style={{ maxWidth: '890px' }} className="container pt-5">
          <div className="row">
            <div className="col-md-4">
              <img style={{ width: '100%' }} src={require("../images/login21.jpg")} alt="" />
            </div>
            <div className="col-md-4">
              <div className="mt-3">
                <NavLink
                  exact activeStyle={{
                    fontWeight: 600,
                    color: "black"
                  }}
                  activeClassName="pt-5"
                  to='/login'>
                  Login
                </NavLink>

                <NavLink
                  exact activeStyle={{
                    fontWeight: 600,
                    color: "black"
                  }}
                  activeClassName="pt-5"
                  to='/register'>
                  Sign up
                </NavLink>
              </div>
              <div className="pr-3" style={{ borderRight: 'solid  1px silver' }}>
                <input type="email" className="form-control mt-4 mb-5
                        text-center" id="inputEmail4" placeholder="Email" onChange={this.handleEmail} />
                <input type="password" className="form-control text-center" id="inputPassword4" placeholder="Password" onChange={this.handlePassword} />
                <div className="error-group">
                  <span htmlFor="error" id="error" className="error"></span>
                </div>
                <div style={{ border: 'transparent' }} className="text-center">
                  <button className="button mt-4" onClick={this.Login1}>
                    <span className="pt-2 pb-2 pl-4 pr-4">Log in</span>
                  </button>
                </div>
              </div>
              {/* <h6 style={{ color: 'silver' }} className=" Forgot text-center pt-4"></h6> */}
            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default Login;
