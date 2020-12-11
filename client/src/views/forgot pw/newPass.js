import React from 'react';
import './sent_email.css';
import Nav from './nav';
import Footer from './footer';
import { NavLink } from 'react-router-dom';
class NewPass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codeID: '',
            password: '',
            rePassword: ''
        }
        this.ClickSave = this.ClickSave.bind(this)

    }
    validate() {
        document.getElementById("tbPassword").style.display = "none"
        document.getElementById("tbRePassword").style.display = "none"
        document.getElementById("error").style.display = "none"
        if (this.state.password.length < 8 || this.state.password.length > 16) {
            document.getElementById("tbPassword").style.display = "block"
            document.getElementById("tbPassword").innerHTML = "New password length should be more than 8 and less than 16!!!";
            return false;
        }
        if (this.state.rePassword.length < 8 || this.state.rePassword.length > 16) {
            document.getElementById("tbRePassword").style.display = "block"
            document.getElementById("tbRePassword").innerHTML = "ReNew password length should be more than 8 and less than 16!!!";
            return false;
        }
        if (this.state.password != this.state.rePassword) {
            document.getElementById("error").style.display = "block"
            document.getElementById("error").innerHTML = "ReNew password is incorrect ";
            return false;
        }
        return true;
    }
    ClickSave() {
        const isValid = this.validate()
        if (isValid) {
            const updateOTP = {
                users_email: sessionStorage["email"],
                users_password: this.state.password
            }
            fetch('http://localhost:3001/resetpassword', {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify( updateOTP )
            })
                .then(response => response.text())
                .then(result => {
                    if(result==="Complete!!!")
                    {
                        window.location='/login'
                    }
                })
        }
    }
    handlePassword = (e) => {
        this.setState({ password: e.target.value })
    }
    handleRePassword = (e) => {
        this.setState({ rePassword: e.target.value })
    }
    render() {
        console.log(this.state.password)
        console.log(this.state.rePassword)
        console.log(sessionStorage["email"])
        return (
            <div>
                <Nav></Nav>
                <div className="container mb-5 pt-5">
                    <div className="row m-2">
                        <div className="mb-5 col-md-6 text-center">
                            <div className="mt-3 ml-4 mr-4">
                                <img src={require('./khoa.JPG')} />
                                <p style={{ fontWeight: 600, fontSize: '1rem', lineHeight: '1.5' }}>Get your password</p>
                            </div>
                            <div className="ml-4 mr-4 mb-3">
                                <input type="password" className="form-control mt-4 mb-3" id="password" placeholder="New Password" onChange={this.handlePassword} />
                                <small id="tbPassword" className="pb-3" style={{ display: 'none', color: '#db3329d1' }}></small>
                                <input type="password" className="form-control mt-4 mb-3" id="rePassword" placeholder="Renew Password" onChange={this.handleRePassword} />
                                <small id="tbRePassword" className="pb-3" style={{ display: 'none', color: '#db3329d1' }}></small>
                                <small id="error" className="pb-3" style={{ display: 'none', color: '#db3329d1' }}></small>
                                <div style={{ border: 'transparent' }} className="text-center">
                                    <button onClick={this.ClickSave} className="button mt-4 mb-4 w-100">
                                        <span>
                                            <h6 className="pt-1 pb-1 pl-4 pr-4">Save</h6>
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

export default NewPass;