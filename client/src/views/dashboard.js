import React from 'react';
import '../scss/bootstrap/css/bootstrap.css';
// import '../scss/dashboard.css';
import '../scss/fa/css/all.css';
import { NavLink } from 'react-router-dom';
import '../scss/2.css'
import ViewPoll from './ViewPoll'
import UserInfo from './UserInfo'
class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users_id: sessionStorage["users_id"],
            ViewPoll: [],
        }
    }
    componentDidMount() {
        const users_id = this.state.users_id;
        console.log(users_id);
        fetch('http://localhost:3001/dashboard', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ users_id })
        })
            .then(response => response.json())
            .then(result => {
                this.setState({ ViewPoll: result.rows });
                console.log(this.state.ViewPoll)
            })

    }

    render() {
        let ViewPoll1 = this.state.ViewPoll.map(poll => {
            return <ViewPoll key={poll.poll_id} poll={poll} />
        })
        return (
            <div className="bgr">
                <div className="container-xl" style={{ width: '970px' }} >
                    <nav className="navbar navbar-light">
                        <div className="text-right">
                            <h3 style={{ color: 'lightskyblue' }}>Meeting Planner</h3>
                        </div>
                        <>
                        <UserInfo/>
                        </>
                        {/* <a className="navbar-brand ml-auto" href="#">
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
                        </li> */}
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
                <div style={{ backgroundColor: 'white', width: '970px' }} className="container-xl">
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
                                        {ViewPoll1}

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
