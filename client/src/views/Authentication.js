import React from 'react';
import { Link } from 'react-router-dom';
class Authentication extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        email: '',
                        password: '',
                        user: [],
                        emailError: '',
                        passwordError: ''
                }
        }
        //validation login
        // validate() {
        //         let passwordError = "";
        //         let emailError = "";
        //         if (!this.state.email.includes("@")) {
        //           emailError="Invalid email "
        //         }
        //         if (this.state.password.length > 8 && this.state.password.length < 16) {
        //           passwordError= "Password length should be more than 8 and less than 16" 
        //         }
        //         if (emailError || passwordError) {
        //           this.setState({ emailError, passwordError });
        //           return false;
        //         }
        //         return true;
        //       }
        Login1 = (e) => {
                e.preventDefault();
                var message = document.getElementById('error');
                const users = {
                        user_email: this.state.email,
                        user_password: this.state.password
                };
                // const isValid=this.validate()
                // if(isValid){
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
                                        var user = JSON.parse(result);
                                        console.log(user.users_id)
                                        console.log(user.users_email)
                                        sessionStorage.setItem("users_id", user.users_id);
                                        sessionStorage.setItem("users_email", user.users_email);
                                        sessionStorage.setItem("users_name", user.users_name);

                                        setTimeout(() => {
                                                window.location = "/dashboard";
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
        render() {
                return (
                        <div className="item-auth">
                                <Link to="/register">
                                        <span className="navbar-text pr-3">
                                                <button className="register nav-link" style={{ color: 'black' }}>Register</button>
                                        </span>
                                </Link>

                                <span className="navbar-text pr-3">
                                        <button className="login p-2" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Sign in</button>
                                        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                        <div style={{ backgroundColor: ' #fefefe', margin: 'auto', maxWidth: '498px', right: '0' }} className="modal-content">
                                                                <div className="modal-header">
                                                                        <h5 className="modal-title" id="exampleModalLabel">Sign in</h5>
                                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                                <span aria-hidden="true">×</span>
                                                                        </button>
                                                                </div>
                                                                <div className="container">
                                                                        <div className="row">
                                                                                <div className="col-md-5">
                                                                                        <img style={{ width: '100%' }} src={require("../images/login21.jpg")} alt="" />
                                                                                </div>
                                                                                <div className="col-md-7">
                                                                                        <div className="mt-3 text-center">

                                                                                        </div>
                                                                                        <div className="pr-3" >
                                                                                                <input type="email" className="form-control mt-4 mb-5 text-center" id="inputEmail4" placeholder="Email" onChange={this.handleEmail} />
                                                                                                <div style={{ fontSize: 12, color: "red" }}>{this.state.passwordError}</div>
                                                                                                <input type="password" className="form-control text-center" id="inputPassword4" placeholder="Password" onChange={this.handlePassword} />
                                                                                                <div style={{ fontSize: 12, color: "red" }}>{this.state.passwordError}</div>
                                                                                                <div className=" text-center pt-4">
                                                                                                        <a href='/forgot' style={{ color: 'silver' }} className=" Forgot text-center pt-4">Forgot password</a>
                                                                                                </div>
                                                                                                <div style={{ border: 'transparent' }} className="text-center">
                                                                                                        <button className="button mt-4 mb-4 " onClick={this.Login1}>
                                                                                                                <span className="pt-2 pb-2 pl-4 pr-4">Log in</span>
                                                                                                        </button>
                                                                                                </div>

                                                                                        </div>
                                                                                </div>

                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </span>
                        </div>
                )
        }
}
export default Authentication;










