import React from 'react';
import '../scss/bootstrap/css/bootstrap.css';
import '../scss/fa/css/all.css';
import '../scss/join1.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class Occasion extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            location: '',
            note: ''
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
        axios.post('localhost:3001/create', this.state)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const { title, location, note } = this.state;
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