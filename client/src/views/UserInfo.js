import React from 'react'
class UserInfo extends React.Component {
        render() {
                return (
                        <nav className="navbar navbar-light float-right">
                                <a className="navbar-brand" href="#">
                                        <img src={require("../images/avt1.JPG")} width={50} height={50} style={{ borderRadius: '50%' }} className="d-inline-block align-top" alt="" loading="lazy" />
                                </a>
                                <li style={{ listStyle: 'none' }} className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                {sessionStorage["users_name"]}
                            </a>
                                          
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown" >
                                                <li><a className="dropdown-item" href='/dashboard'>Dashboard</a></li>
                                                <li><a className="dropdown-item" href='/profile'>Account settings</a></li>

                                                <li><a className="dropdown-item" href="#">Help</a></li>

                                                <li><a className="dropdown-item" href="#">Logout</a></li>


                                        </div>
                                </li>
                        </nav>
                )
        }
}
export default UserInfo;