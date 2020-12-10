import React from 'react';
import Footer from './footer';
import Nav from './nav';
import './otp.css';
import {NavLink} from 'react-router-dom';
class Otp extends React.Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <div className="container mb-5 pt-5">
                    <div className="row m-2">
                        <div className="mb-5 col-md-6 text-center">
                            <div className="mt-3 ml-4 mr-4">
                            <img src={require('./khoa.JPG')} />
                                <p style={{ fontWeight: 600, fontSize: '1rem', lineHeight: '1.5' }}>Trouble Logging In?</p>
                                <small style={{ color: 'rgba(var(--f52,142,142,142),1)', fontSize: '14px' }}>
                                    Please enter the OTP sent to your Email.</small>
                            </div>
                            <div className="ml-4 mr-4 mb-3">
                                <input type="number" className="form-control mt-4 mb-3" id="username" placeholder="OTP" />
                                <small id="thongbao" className="pb-3" style={{ display: 'none', color: '#db3329d1' }}>
                                    Mã otp không hợp lệ </small>
                                <div style={{ border: 'transparent' }} className="text-center">
                                    <button onclick={this.myFunction} className="button mt-4 mb-4 w-100">
                                        <span>
                                            <h6 className="pt-1 pb-1 pl-4 pr-4">Sent otp</h6>
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
        </div>
        )
    }
}

export default Otp;