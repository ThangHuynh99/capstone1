import React from 'react'
class UserInfo extends React.Component {
        constructor(props) {
                super(props);
                this.state = {

                }
                this.ClickLogOut=this.ClickLogOut.bind(this)
        }
        ClickLogOut() {
                alert("xoa users_id")
                localStorage.removeItem("users_id")
                alert(sessionStorage["users_id"])
                window.location = "/";
        }
        render() {
                return (
                        <nav className="navbar navbar-light float-right">
                                <a className="navbar-brand" href="#">
                                        <img src={require("../images/avt1.JPG")} width={50} height={50} style={{ borderRadius: '50%' }} className="d-inline-block align-top" alt="" loading="lazy" />
                                </a>
                                {/* <li style={{ listStyle: 'none' }} className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                {sessionStorage["users_name"]}
                            </a>
                                          
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown" >
                                                <li><a className="dropdown-item" href='/dashboard'>Dashboard</a></li>
                                                <li><a className="dropdown-item" href='/profile'>Account settings</a></li>

                                                <li><a className="dropdown-item" href="#">Help</a></li>

                                                <li><a className="dropdown-item" href="#">Logout</a></li>


                                        </div>
                                </li> */}
                                <li style={{ listStyle: 'none' }} className="nav-item dropdown">
                                        <div className="d-flex">
                                                <div className="dropdown mr-1">
                                                        <button type="button" className="btn dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                                                                <i className="fas fa-sort-down"></i></button>
                                                        <div className="dropdown-menu  mt-3" aria-labelledby="dropdownMenuOffset">

                                                                <li><a className="dropdown-item" href='/dashboard'>Dashboard</a></li>
                                                                <li><a className="dropdown-item" href='/profile'>Account settings</a></li>
                                                                <li><a className="dropdown-item" href="#">Help</a></li>
                                                                <li><a className="dropdown-item" onClick={this.ClickLogOut}>Logout</a></li>

                                                        </div>
                                                </div>
                                        </div>
                                </li>

                        </nav >
                )
        }
}
export default UserInfo;