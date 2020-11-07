import React from 'react';
import '../scss/bootstrap/css/bootstrap.css';
import '../scss/dashboard.css';
import '../scss/fa/css/all.css';
import { NavLink } from 'react-router-dom';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="bgr">

                <div className="container-xl" >
                    <nav className="navbar navbar-light">
                        <div className="text-right">
                            <h3 style={{ color: 'lightskyblue' }}>Meeting Planner</h3>
                        </div>
                        <a className="navbar-brand ml-auto" href="#">
                            <img src={require("../images/avt1.JPG")} width={50} height={50} style={{ borderRadius: '50%' }} className="d-inline-block
      align-top" alt="" loading="lazy" />
                        </a>
                        <li style={{ listStyle: 'none' }} className="nav-item dropdown">
                            <div className="d-flex">
                                <div className="dropdown mr-1">
                                    <button type="button" className="btn dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuOffset">
                                        <a className="dropdown-item" href="#">Dashboard</a>
                                        <NavLink
                                            exact activeStyle={{
                                               
                                            }}
                                            activeClassName='dropdown-item'
                                            to='/profile'>
                                            Account setting
                                        </NavLink>
                                        <a className="dropdown-item" href="#">Contact Support</a>
                                        <a className="dropdown-item" href="#">Log out</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* Example single danger button */}
                        <div className="btn-group">
                            <button type="button" className="btn btn-danger" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ borderRadius: '4px' }}>
                                <h5>+ Create</h5>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#">Group Meeting
            <br />
                                    <small>Let everyone choose the best time to meet</small>
                                </a>
                                <a className="dropdown-item" href="#">Bookable Calendar
            <br />
                                    <small>The quickest way to share your live calendart</small></a>
                                <a className="dropdown-item" href="#">1:1 Meeting
            <br />
                                    <small>Share specific times that work best for you</small></a>
                                <a className="dropdown-item" href="#">Survey
            <br />
                                    <small>Share specific times that work best for you</small>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
                <div style={{ backgroundColor: 'white' }} className="container-xl">
                    <div style={{ border: 'solid 1px #ced4da' }} className="row">
                        <div className="col-md-3 left">
                            <span className="d-block p-4">
                                <h3>Menu</h3>
                            </span>
                            <span style={{ backgroundColor: '#98cdfb' }} className="d-block p-3">All</span>
                            <span className="d-block p-3">Sent</span>
                            <span className="d-block p-3">Received</span>
                            <span className="d-block p-3">Confirmed</span>
                            <span className="d-block p-3 mb-5">Archived</span>
                        </div>
                        <div className="col-md-9 right mt-3 pb-5 mb-5">
                            <div>
                                <form className="form-inline my-2 my-lg-0 ">
                                    <input className="form-control  ml-auto" type="search " placeholder="Search " aria-label="Search" />
                                    <i className="fas fa-search" />
                                </form>
                                <div className="row mt-5">
                                    <div className="col-md-12">
                                        <div style={{ height: '75px' }} className="border" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="text-center" style={{ color: 'lightsteelblue' }}>
                        <a href>Help •</a>
                        <a href>Privacy •</a>
                        <a href>Terms of Service</a>
                    </div>
                </footer>
            </div>



        );
    }
}

export default Dashboard;