import React from 'react';
import '../scss/fa/css/all.css';
import '../scss/bootstrap/css/bootstrap.css';
import '../scss/1.css';
import TableDataPoll from './tableDataPoll'
import TableDataUser from './tableDataUser'
class MenuAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowUser: true,
            isShowPoll: false
        }
        this.showPoll=this.showPoll.bind(this)
        this.showUser=this.showUser.bind(this)
    }
    showUser() {
        this.setState ({
            isShowUser: true, isShowPoll: false
        })
        console.log(this.state)
    }
    showPoll() {
        this.setState ({
            isShowUser: false, isShowPoll: true
        })
        console.log(this.state)
    }
    render() {
        // console.log(this.state)
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                    <h3 className="navbar-brand" href="#" style={{ color: '#98cdfb' }}>Meeting planner</h3>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle
      navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                        <form className="form-inline pr-2 my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        <span className="navbar-text pr-3">
                            <button className="register"><a className="nav-link" href="#">Log out </a></button>
                        </span>
                    </div>
                </nav>
                <div className="container-xl mt-5 ">
                    <div className="row">
                        <div className="col-md-4 ">
                            <span className="d-block p-3" style={{ backgroundColor: 'white', width: '380px' }}><img src="anh.jpg" alt="" /> Admin</span>
                            <button className="d-block p-3  " style={{ border: 'none ', width: '380px' }} onClick={ this.showUser}> User</button>
                            <button className="d-block p-3 text-decoration-none" style={{ border: 'none ', width: '380px' }} onClick={ this.showPoll}>Poll</button>
                        </div>
                        <>
                            {/* {this.state.isShowUser? <TableDataPoll/> : <TableDataUser/>} */}
                            {this.state.isShowPoll && <TableDataPoll />}
                            {this.state.isShowUser && <TableDataUser />}
                        </>
                    </div>

                </div>
            </div>

        );
    }
}

export default MenuAdmin;