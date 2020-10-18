import React from 'react';
import '../scss/bootstrap/css/bootstrap.css';
import '../scss/fa/css/all.css';
import '../scss/account.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class Profile extends React.Component {
  render() {
    return (
      <div class="bgr" >
        <nav className="navbar navbar-expand-lg navbar-light pb-5">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle
        navigation">
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
        <div style={{ backgroundColor: 'white' }} className="container">
          <div className="row">
            <div className="col-md-3 left">
              <span className="d-block p-4">
                <h3>Setting</h3>
              </span>
              <span className="d-block p-3">Account</span>
              <span className="d-block p-3">Notifications</span>
              <span className="d-block p-3">Slack</span>
              <span className="d-block p-3">Zoom</span>
              <span className="d-block p-3">Contacts</span>
              <span className="d-block p-3 mb-5">Subscription</span>
            </div>
            <div className="col-md-8 right pb-5 mb-5">
              <div className="text-center mt-5 pt-3">
                <img src={require("../images/avt1.JPG")} width={70} height={70} style={{ borderRadius: '50%' }} alt="" /> </div>
              <li style={{ listStyle: 'none' }} className="nav-item dropdown text-center">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Thang
                                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink
                    exact activeStyle={{

                    }}
                    activeClassName='dropdown-item'
                    to='#'>
                    Dashboard
                </NavLink>

                  <NavLink
                    exact activeStyle={{

                    }}
                    activeClassName='dropdown-item'
                    to='/profile'>
                    Account setting
                </NavLink>

                  <NavLink
                    exact activeStyle={{

                    }}
                    activeClassName='dropdown-item'
                    to='#'>
                    Help
                </NavLink>

                  <NavLink
                    exact activeStyle={{

                    }}
                    activeClassName='dropdown-item'
                    to='#'>
                    Logout
                </NavLink>
                  {/* <a className="dropdown-item" href="#">Dashboard</a>
                  <a className="dropdown-item" href="#">Account settings</a>
                  <a className="dropdown-item" href="#">Help</a>
                  <a className="dropdown-item" href="#">Logout</a> */}
                </div>
              </li>
              <div style={{ borderBottom: 'solid 1px silver', width: '100%' }} />
              <form className="mt-5 pt-3">
                <div className="form-row">
                  <div style={{ maxWidth: '360px' }} className="col-md-12 mb-3">
                    <label htmlFor="validationDefault01">First name</label>
                    <input type="text" className="form-control" id="validationDefault01" placeholder="Your name" value="" />
                    <br></br>
                    <label htmlFor="validationDefault01">Birthday</label>
                    <input type="date" className="form-control" id="validationDefault01"  value="" />
                  </div>
                </div>
                <div className="form-row">
                  <div style={{ maxWidth: '360px' }} className="col-md-12 mb-3">
                    <button type="button" className="btn pass">Update Picture
                    </button>
                    <input className="inputfile" type="file" />
                  </div>
                </div>
                <div className="form-row">
                  <div style={{ maxWidth: '360px' }} className="col-md-12 mb-3">
                    <label htmlFor="validationDefault03">Email and password</label>
                    <input type="text" className="form-control" id="validationDefault01" placeholder="Your email" value="" />

                    {/* Modal */}
                  </div>
                </div>

                <div className="form-row">
                  <div style={{ maxWidth: '360px' }} className="col-md-12 mb-3">
                    <button type="button" className="btn pass" data-toggle="modal" data-target="#test1">Change password
                    </button>
        
                    <div id="test1" className="modal fade" role="dialog" style={{ zIndex: 1400 }}>
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Change password</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-12 mb-3">
                                  <form>
                                    <div className="pr-3">
                                      <input type="password" className="form-control mt-4
                                  mb-5
                                  text-center" id="inputEmail4" placeholder="Your current password" required />
                                      <input type="password" className="form-control mt-4
                                  mb-5 text-center" id="inputPassword4" placeholder="New password" required />
                                      <input type="password" className="form-control
                                  text-center" id="inputPassword4" placeholder="Confirm new password" required />
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div style={{ maxWidth: '360px' }} className="col-md-12 mb-3">
                    <label htmlFor="exampleFormControlSelect1">Language</label>
                    <select style={{ boxShadow: 'none' }} className="form-control" id="exampleFormControlSelect1">
                      <option>English</option>
                      <option>VietNam</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div style={{ maxWidth: '360px' }} className="col-md-12 mb-3">
                    <label htmlFor="exampleFormControlSelect1">Country</label>
                    <select style={{ boxShadow: 'none' }} className="form-control" id="exampleFormControlSelect1">
                      <option>English</option>
                      <option>VietNam</option>
                    </select>
                  </div>
                </div>
                <a name id className="btn btn-primary" href="#" role="button">Save</a>
              </form>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Profile;