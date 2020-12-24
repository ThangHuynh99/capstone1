import React from 'react';
import '../scss/register.css'
import '../scss/fa/css/all.css';
import '../scss/bootstrap/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      repass: '',
      emailError: '',
      passwordError: ''
    }
  }
  validate() {
    let passwordError = "";
    let emailError = "";
    if (!this.state.email.includes("@")) {
      emailError = "Invalid email "
    }
    if (this.state.password.length < 8 || this.state.password.length > 16) {
      passwordError = "Password length should be more than 8 and less than 16"
    }
    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }
    return true;
  }
  register = (e) => {
    e.preventDefault();
    var message = document.getElementById('error')
    const isValid = this.validate()
    if (isValid) {
      if (this.state.password === this.state.repass) {
        const user = ({
          users_email: this.state.email,
          users_password: this.state.password
        });
        fetch('http://localhost:3001/registers', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
          .then(response => response.text())
          .then(result => {
            console.log(result)
            if (result === 'Complete') {
              // message.innerHTML = "Complete"
              alert("Register complete")
              window.location = "/login"
            }
            else if (result === 'Exist') {
              message.innerHTML = "Email invalid"
            }
            else
              message.innerHTML = result
          })
      }
      else {
        message.innerHTML = "Password and repassword incorrect"
      }
    }
  }
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
    console.log(this.state.password)
  }
  handleUsernameChange = (e) => {
    this.setState({ email: e.target.value })
    console.log(this.state.email)
  }
  handleRePasswordChange = (e) => {
    this.setState({ repass: e.target.value })
  }
  render() {
    return (
      <div class="bgr" >
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
        <div className="container ">
          <div className="row">
            <div className="col-md-5">
              <img style={{ width: '100%' }} src={require("../images/login21.jpg")} alt="" />
            </div>
            <div className="col-md-7">
              <div className="mt-3">
                <NavLink
                  exact activeStyle={{
                    fontWeight: 600,
                    color: "red"
                  }}
                  activeClassName='pr-1 pt-5'
                  to='/login'>
                  Log in
                </NavLink>
                <i>/</i>
                <NavLink
                  exact activeStyle={{
                    fontWeight: 600,
                    color: "black"
                  }}
                  activeClassName='pl-1 pt-5'
                  to='/register'>
                  Sign up
                </NavLink>
              </div>
              <div className="pr-3 mt-5" >
                <input type="email" className="form-control mt-4 mb-3" id="inputEmail4" placeholder="Email" onChange={this.handleUsernameChange} />
                <input type="password" className="form-control " id="inputPassword4" placeholder="Password" onChange={this.handlePasswordChange} />
                <input type="password" className="form-control mt-3 " id="inputPassword4" placeholder="Repassword" onChange={this.handleRePasswordChange} />
                <div style={{ border: 'transparent' }} className="text-center">
                  <button className="button mt-4 mb-5" title="register" onClick={this.register}>
                    <span><h5 className="pt-1 pb-1 pl-4 pr-4">Sign up</h5></span>
                  </button>
                  <div className="error-group">
                    <span htmlFor="error" id="error" className="error"></span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default Register;