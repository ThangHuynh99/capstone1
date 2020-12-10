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
      user: [],
      emailError:'',
      passwordError:''
    }
  }
  validate() {
    let passwordError = "";
    let emailError = "";
    if (!this.state.email.includes("@")) {
      emailError="Invalid email "
    }
    if (this.state.password.length > 8 && this.state.password.length < 16) {
      passwordError= "Password length should be more than 8 and less than 16" 
    }
    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }
    return true;
  }
  Login1 = (e) => {
    e.preventDefault();
    // if(this.myFunction()==true){
    var message = document.getElementById('error');
    const users = {
      user_email: this.state.email,
      user_password: this.state.password
    };
    const isValid = this.validate()
    if (isValid) {
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
        if (result === "null") {
          alert("Account don't exist")
          message.innerHTML = "Account don't exist!!!";
        }
        else {
          console.log(result);
          var user = JSON.parse(result);
          sessionStorage.setItem("users_id", user.users_id);
          sessionStorage.setItem("users_email", user.users_email);
          sessionStorage.setItem("users_name", user.users_name);
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
        <div style={{ maxWidth: '890px' }} className="container ">
          <div className="row">
            <div className="col-md-5">
              <img style={{ width: '100%' }} src={require("../images/login21.jpg")} alt="" />
            </div>
            <div className="col-md-7">
              <div className="mt-3">
                <NavLink
                  exact activeStyle={{
                    fontWeight: 600,
                    color: "black"
                  }}
                  activeClassName="pr-1 pt-5"
                  to='/login'>
                  Login
                </NavLink>
                <i className="pr-1">/</i>
                <NavLink
                  exact activeStyle={{
                    fontWeight: 600,
                    color: "black"
                  }}
                  activeClassName=" pt-5"
                  to='/register'>
                  Sign up
                </NavLink>
              </div>
              <div className="pr-3" >
                <input type="email"
                  className="form-control mt-4 mb-5 text-center"
                  id="inputEmail4"
                  placeholder="Email"
                  onChange={this.handleEmail} />
                <div style={{ fontSize: 12, color: "red" }}>{this.state.emailError}</div>
                <input type="password"
                  className="form-control text-center"
                  id="inputPassword4"
                  placeholder="Password"
                  onChange={this.handlePassword} />
                <div style={{ fontSize: 12, color: "red" }}>{this.state.passwordError}</div>
                <div className="error-group">
                  <span htmlFor="error" id="error" className="error"></span>
                </div>
                <div style={{ border: 'transparent' }} className="text-center">
                  <button className="button mt-4 mb-4" onClick={this.Login1}>
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
