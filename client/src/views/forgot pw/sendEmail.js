import React from 'react';
import './sent_email.css';
import Nav from './nav';
import Footer from './footer';
import { NavLink } from 'react-router-dom';
class SendEmail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sendEmail: ''
        }
        this.sendOTP = this.sendOTP.bind(this)
    }
    validate() {
        let emailError = "";
        if (!this.state.sendEmail.includes("@")) {
            document.getElementById("thongbao").style.display = "block"
            document.getElementById("thongbao").innerHTML = "Email don't exist!!!";
            return false;
        }
        return true;
    }
    sendOTP() {
        const sendEmail = this.state.sendEmail
        console.log("hello send OTP")
        console.log(sendEmail)
        const isValid = this.validate()
        if (isValid) {
            fetch('http://localhost:3001/sendemail', {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ sendEmail })
            })
                .then(response => response.text())
                .then(result => {
                    if (result == "not exist") {
                        document.getElementById("thongbao").style.display = "block"
                        document.getElementById("thongbao").innerHTML = "Email don't exist!!!";
                    }
                    else {
                        sessionStorage.setItem("code", result);
                        sessionStorage.setItem("email", sendEmail);
                        window.location = '/forgot/auth'
                    }
                })
        }
    }
    handleEmail = (e) => {
        this.setState({ sendEmail: e.target.value })
    }
    render() {
        return (
            <div>
                <Nav></Nav>
                <div style={{ boxShadow: 'none' }} className="container mb-5 pt-5">
                    <div className="row m-2">
                        <div className="mb-5 col-md-6 text-center">
                            <div className="mt-3 ml-4 mr-4">
                                <img src={require('./khoa.JPG')} />
                                <p style={{ fontWeight: 600, fontSize: '1rem', lineHeight: '1.5' }}>Trouble Logging In?</p>
                                <small style={{ color: 'rgba(var(--f52,142,142,142),1)', fontSize: '14px' }}>Enter your email you have registed
                                 and we'll send you a code to get back into your account.</small>
                            </div>
                            <div className="ml-4 mr-4 mb-3">
                                <input type="email" className="form-control mt-4 mb-3" id="username" placeholder="Email" onChange={this.handleEmail} />
                                <span htmlFor="thongbao" id="thongbao" className="pb-3" style={{ display: 'none', color: '#db3329d1' }}> </span>
                                <div style={{ border: 'transparent' }} className="text-center">
                                    <button onClick={this.sendOTP} className="button mt-4 mb-4 w-100">
                                        <span>
                                            <h6 className="pt-1 pb-1 pl-4 pr-4">Send OTP</h6>
                                        </span>
                                    </button>
                                </div>
                                <div className="text-center mb-4">
                                    <div style={{ borderBottom: '1px solid #dbdbdb', width: '45%' }} className="or" />
                                    <div className="or"> OR </div>
                                    <div style={{ borderBottom: '1px solid #dbdbdb', width: '45%' }} className="or" />
                                </div>
                                <NavLink
                                    exact activeStyle={{
                                        fontWeight: 600,
                                        fontSize: '16px',
                                        lineHeight: '24px'
                                    }}
                                    activeClassName="mb-5 mb-3"
                                    to='/register'>
                                    Create New Account
                                 </NavLink>
                            </div>
                            <div className="pt-3 pb-3" style={{ backgroundColor: '#f6f6f6', fontWeight: 600, fontSize: '14px', lineHeight: '24px' }}>
                                <NavLink
                                    activeClassName="text-dark"
                                    to='/login'>
                                    Back To Login
                                 </NavLink>
                            </div>
                        </div>

                        <Footer></Footer>
                    </div>
                </div>
            </div >
        )
    }
}

export default SendEmail;