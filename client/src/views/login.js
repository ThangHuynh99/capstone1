import React, { Component } from 'react';
import '../scss/bootstrap/css/bootstrap.css';
import '../scss/login.css';
import '../scss/fa/css/all.css';
import { NavLink } from 'react-router-dom';

class Login extends Component {

  Login1 = (e) => {
    e.preventDefault();
    const users = {
      id: 'toan',
      password: '123'
    };
    fetch('http://localhost:3001/checklogin', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(users)
    })
      .then(result => {
        if (result === null)
          alert("Account don't exist")
        else
          alert("Account exist")
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    return (
      <div class="bgr">
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
                        text-center" id="inputEmail4" placeholder="Email" />
                <input type="password" className="form-control text-center" id="inputPassword4" placeholder="Password" />
                <div style={{ border: 'transparent' }} className="text-center">
                  <button className="button mt-4">
                    <button type="button" onClick={this.Login1}>
                      <span className="pt-2 pb-2 pl-4 pr-4">Log in</span>
                    </button>
                  </button>
                </div>
              </div>
              <h6 style={{ color: 'silver' }} className=" Forgot text-center pt-4">Forgot your password</h6>
            </div>
            {/* <h6 style={{ color: 'silver' }} className=" Forgot text-center pt-4"></h6> */}

              <NavLink
              exact activeStyle={{
                 fontWeight: 600,
                 color: "sliver"
               }}
               activeClassName= 'Forgot text-center pt-4'
               to = '/change'>
              Forgot your password
              </NavLink>
          </div>
          <div className="col-md-4 ">
            <div className="text-center loginwith">
              <button className="fb p-2"> login on facebook <i className="fab fa-facebook" aria-hidden="true" /></button> <br />
              <button className="gm mt-2 pt-2 pb-2 pl-4 pr-4"> login on Gmail <i className="far fa-envelope" /></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
