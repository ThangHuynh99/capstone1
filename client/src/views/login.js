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
    // if(this.myFunction()==true){
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
    // }
  }
  handleEmail = (e) => {
    this.setState({ email: e.target.value })
  }
  handlePassword = (e) => {
    this.setState({ password: e.target.value })
  }
  // Function (Login1) {
  //   var username = document.getElementById("inputEmail4").value;
  //   var password = document.getElementById("inputPassword4").value;
  //   var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   // Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt
  //   var pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  //   var thongbao = document.getElementById("thongbao");
  //   var saimatkhau = document.getElementById("saimatkhau");
  //   var saimk = document.getElementById("saimk");
  //   if (username == null || username == "") {
  //     thongbao.style.display = "block";
  //     return false;
  //   }
  //   if (!filter.test(username)) {
  //     thongbao.style.display = "block";
  //     return false;
  //   }
  //   if (password == null || password == "") {
  //     saimatkhau.style.display = "block";
  //     return false;
  //   }
  //   if (!pass.test(password)) {
  //     saimk.style.display = "block";
  //     return false;
  //   }
  //   return true;
  // }
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
                <input type="email" className="form-control mt-4 mb-5
                        text-center" id="inputEmail4" placeholder="Email" onChange={this.handleEmail} />
                <small id="thongbao" class="pb-3" style="display: none; color: #db3329d1;">
                  Email trống hoặc không hợp lệ vui lòng nhập lại Email </small>
                <input type="password" className="form-control text-center" id="inputPassword4" placeholder="Password" onChange={this.handlePassword} />
                <small id="saimatkhau" class="pb-3"
                  style="display: none; color: #db3329d1;"> mật khẩu trống vui lòng nhập lại mật ghats </small>
                <small id="saimk" class="pb-3" style="display: none; color: #db3329d1;"> mật
                khẩu không hợp lệ vui lòng nhập lại mật khẩu (Mật khẩu bao gồm 8 kí tự có chữ in hoa số và kí tự đặt biệt) </small>
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
