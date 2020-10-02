import React from 'react';
import '../scss/bootstrap/css/bootstrap.css';
import '../scss/fa/css/all.css';
import '../scss/join1.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class Occasion extends React.Component {

    render() {
        return (
            <div class="bgr">
                <div className="container mt-5 p-5">
                    <div className="account mb-5">
                        {/* Image and text */}
                        <nav className="navbar navbar-light float-right">
                            <a className="navbar-brand" href="#">
                                <img src={require("../images/avt1.JPG")} width={50} height={50} style={{ borderRadius: '50%' }} className="d-inline-block align-top" alt="" loading="lazy" />
                            </a>
                            <li style={{ listStyle: 'none' }} className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Thang
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Dashboard</a>
                                    <a className="dropdown-item" href="#">Account settings</a>
                                    <a className="dropdown-item" href="#">Help</a>
                                    <a className="dropdown-item" href="#">Logout</a>
                                </div>
                            </li>
                        </nav>
                    </div>
                    <br />
                    <br />
                    <div className="text-center">
                        <span className="text-center">Step 1 of 3</span>
                        <h2 className="text-center">What's the Occasion?</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <form method="POST">
                                <div>
                                    <input type="text" className="form-control mt-4 mb-5" id="inputEmail4" placeholder="Enter title" />
                                    <div className="form-group">
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>Add location</option>
                                            <option>To be defined</option>
                                            <option>Phone</option>
                                            <option>Conference call</option>
                                            <option>Skype</option>
                                            <option>Google Hangouts</option>
                                            <option>Zoom</option>
                                        </select>
                                    </div>
                                    <input type="text" className="form-control mt-5" id="inputPassword4" placeholder="Add note" />
                                    <div style={{ border: 'transparent' }} className="text-center">
                                        <input type="submit" className="button mt-4" name="change" value="Continue" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Occasion;