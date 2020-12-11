import React from 'react';
import './sent_email.css';
import Nav from './nav';
import Footer from './footer';
import { NavLink } from 'react-router-dom';
class NewPass extends React.Component {
    myFunction() {
        var username = document.getElementById("username").value;
        var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var thongbao = document.getElementById("thongbao");
        if (username == null || username == "") {
            thongbao.style.display = "block";
            return false;
        }
        if (!filter.test(username)) {
            thongbao.style.display = "block";
            return false;
        }
    }
    render() {
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
                                <input type="password" className="form-control mt-4 mb-3" id="username" placeholder="New Password" />
                                <input type="password" className="form-control mt-4 mb-3" id="username1" placeholder="Renew Password" />
                                <small id="thongbao" className="pb-3" style={{ display: 'none', color: '#db3329d1' }}>
                                    Mật khẩu không đúng</small>
                                <div style={{ border: 'transparent' }} className="text-center">
                                    <button onclick={this.myFunction} className="button mt-4 mb-4 w-100">
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