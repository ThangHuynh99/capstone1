import React from 'react';
import '../scss/bootstrap/css/bootstrap.css';
import '../scss/fa/css/all.css';
import '../scss/join1.css';
// import Popup from 'reactjs-popup';
// import axios from 'axios';
import { Link, NavLink, Route, Router } from 'react-router-dom';
import Schedule from './Schedule'
import UserInfo from './UserInfo'
import Option from './Option'


class Occasion extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            location: '',
            note: '',
            disabled: "false"
        };

        // this.changeHandler = this.changeHandler.bind(this);
        // this.submitHandler = this.submitHandler.bind(this);

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
    // submitHandler = (e) => {
    //     e.preventDefault();
    //     const poll = {
    //         users_id: sessionStorage["users_id"],
    //         title: this.state.title,
    //         location: this.state.location,
    //         note: this.state.note
    //     };
    //     // console.log(poll);
    //     fetch('http://localhost:3001/create', {
    //         method: "POST",
    //         headers: {
    //             "Accept": "application/json",
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(poll)
    //     })
    //         .then(response => response.text())
    //         .then(result => {
    //             if (result === 'Successful') {
    //                 console.log(result)
    //                 // alert(result)
    //                 window.location = "/option";
    //             }
    //         })
    // }



    render() {
        const { title, location, note } = this.state;
        console.log(sessionStorage["poll_id"])
        // let data={
        //     return( <Option   />)
        // }
        const data = {
            title: this.state.title,
            location: this.state.location,
            note: this.state.note
        }
        console.log(data)
        const submitHandler = () => {

        }
        return (
            <div className="bgr" >
                <div className="container mt-5 p-5">
                    <div className="account mb-5">
                        {/* Image and text */}
                        <UserInfo />
                    </div>
                    <br />
                    <br />
                    <div className="text-center">
                        <span className="text-center">Step 1 of 3</span>
                        <h2 className="text-center">What's the Occasion?</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <form onSubmit={submitHandler}>
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
                                        <Link
                                            to={{
                                                pathname: '/option',
                                                state: {
                                                    title: this.state.title,
                                                    location: this.state.location,
                                                    note: this.state.note
                                                }
                                            }}>
                                            <input type="submit"
                                                className="button mt-button pt-2 pb-2 pl-3 pr-3 mt-4"
                                                name="change"
                                                value="Continue"
                                            // required = {true}
                                            // disabled= {this.state.note||this.state.title||this.state.location  ? "true":"false"}
                                            >
                                            </input>
                                        </Link>
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