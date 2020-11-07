import React from 'react';
import '../scss/bootstrap/css/bootstrap.css';
import '../scss/fa/css/all.css';
import '../scss/join1.css';
import Popup from 'reactjs-popup';
import axios from 'axios';
import { Link, NavLink, Route, Router } from 'react-router-dom';
import Schedule from './Schedule'
class Occasion extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            location: '',
            note: '',
            disabled: "false"
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    // submitHandler = (e) => {
    //     e.preventDefault();
    //     console.log(this.state);


    //     axios.post('http://localhost:3001/create',  this.state )
    //     .then(response => {
    //         console.log(response.data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })       
    // }
    submitHandler = (e) => {
        e.preventDefault();
        const poll = {
            title: this.state.title,
            location: this.state.location,
            note: this.state.note
        };
        console.log(poll);
        fetch('http://localhost:3001/create', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(poll)
        })
            .then(res => { res.json()})
            .then(result => {
                if(result){
                console.log(result)
                alert(result)
                }
            })
    }



    render() {
        const { title, location, note } = this.state;
        return (
            <div class="bgr">
                {/* <Router>
                    <div>
                        <Route  path="/schedule" exact component={Schedule}/>
                    </div>
                </Router> */}
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
                                    <NavLink
                                        exact activeStyle={{

                                        }}
                                        activeClassName='button mt-4'
                                        to='/schedule'>
                                        Continue
                                         </NavLink>
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
                            <form onSubmit={this.submitHandler}>
                                <div>
                                    <input type="text" className="form-control mt-4 mb-5" id="addtitle" name="title" value={title} placeholder="Enter title" onChange={this.changeHandler} />
                                    <div className="form-group">
                                        <select className="form-control" id="addlocation" name="location" value={location} onChange={this.changeHandler} >
                                            <option value="Add location">Add location</option>
                                            <option value="To be defined">To be defined</option>
                                            <option value="Phone">Phone</option>
                                            <option value="Conference call">Conference call</option>
                                            <option value="Skype">Skype</option>
                                            <option value="Google Hangouts">Google Hangouts</option>
                                            <option value="Zoom">Zoom</option>
                                        </select>
                                    </div>
                                    <input type="text" className="form-control mt-5" id="addnote" name="note" value={note} placeholder="Add note" onChange={this.changeHandler} />
                                    <div style={{ border: 'transparent' }} className="text-center">
                                        <input type="submit"
                                            className="button mt-4"
                                            name="change"
                                            value="Continue"
                                        // required = {true}
                                        // disabled= {this.state.note||this.state.title||this.state.location  ? "true":"false"}
                                        >
                                        <Popup ></Popup>
                                        </input>
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