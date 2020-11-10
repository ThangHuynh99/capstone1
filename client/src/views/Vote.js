import React from 'react';
import '../scss/vote.css';
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
class Vote extends React.Component {
    render() {
        return (
            <div style={{ padding: 0, boxShadow: '0px 5px 5px 1px silver' }} className="container mt-4 mb-4">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#">
                        <h4 style={{ fontWeight: 700, color: 'lightskyblue' }}>Planing Meeting</h4>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
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
                        <a className="navbar-brand ml-auto" href="#">
                            <img src={require("../images/avt1.JPG")} width={50} height={50} style={{ borderRadius: '50%' }} className="d-inline-block
                      align-top" alt="" loading="lazy" />
                        </a>
                        <li style={{ listStyle: 'none' }} className="nav-item dropdown">
                            <div className="d-flex">
                                <div className="dropdown mr-1">
                                    <button type="button" className="btn
                              dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuOffset">
                                        <a className="dropdown-item" href="#">Dashboard</a>
                                        <a className="dropdown-item" href="#">Acount
                Setting</a>
                                        <a className="dropdown-item" href="#">Contact
                Support</a>
                                        <a className="dropdown-item" href="#">Log out</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* Example single danger button */}
                        <div className="btn-group">
                            <Link to="/create">
                            <button type="button" className="btn btn-danger" style={{ borderRadius: '4px' }}>
                                <h5>+ Create</h5>
                            </button>
                            </Link>
                          

                        </div>
                    </div></nav>
                <nav style={{ backgroundColor: '#45505e' }} className="nav justify-content-center">
                    <a style={{ color: 'white' }} className="nav-link active" href="#">Edit</a>
                    <a style={{ color: 'white' }} className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        More
    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Choose final option</a>
                        <a className="dropdown-item" href="#">Export to PDF</a>
                        <a className="dropdown-item" href="#">Export to Excel</a>
                        <a className="dropdown-item" href="#">Print</a>
                        <a className="dropdown-item" href="#">Duplicate poll</a>
                        <a className="dropdown-item" href="#">Delete all participants</a>
                        <a className="dropdown-item" href="#">Delete poll</a>
                    </div>
                </nav>
                <h3 className="text-center mt-3">Quang</h3>
                <div style={{ border: 'solid 1px', backgroundColor: '#f5fbff' }} className="m-5 p-3">
                    <form className="mb-4 ">
                        <div style={{ margin: '0 auto' }} className="col-md-8 mb-3">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Enter Email</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                            </div>
                        </div>
                        <div style={{ margin: '0 auto' }} className="col-md-8">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Messenger</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                            </div>
                        </div>
                    </form>
                    <div style={{ margin: '0 auto' }} className="col-md-8 mb-4">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </div>
                <table style={{ margin: '0 auto' }} className="i-square i-full i-border mb-5">
                    <tbody>
                        <tr>
                            <td style={{ width: '200px', height: '130px' }} />
                            <td style={{ width: '72px', height: '130px', textAlign: 'center' }} className="date">Nov
                            5
                            THU
                            8:00 AM
                            8:30 AM
        </td>
                        </tr>
                        <tr>
                            <td>0 participants <i style={{ float: 'right' }} className="fas fa-plus pr-2" /></td>
                            <td style={{ textAlign: 'center' }}>
                                <p>0/1</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Thang Huynh<i style={{ float: 'right' }} className="fas fa-pen pr-2" /></td>
                            <td>
                                <p>0/1</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Hoang <i style={{ float: 'right' }} className="fas fa-trash pr-2" /></td>
                            <td>
                                <p>0/1</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="footer pt-3 pb-3">
                    <nav className="nav justify-content-center">
                        <a className="nav-link active" href="#">Team</a>
                        <a className="nav-link" href="#">Jobs</a>
                        <a className="nav-link" href="#">Blog</a>
                        <a className="nav-link" href="#">Media Corner</a>
                        <a className="nav-link" href="#">Doodle Labs</a>
                    </nav>
                    <nav className="nav justify-content-center">
                        <a className="nav-link" href="#">Ads on Doodle</a>
                        <a className="nav-link" href="#">Help</a>
                        <a className="nav-link" href="#">Contact Us</a>
                    </nav>
                    <nav className="nav justify-content-center">
                        <a className="nav-link" href="#">Terms</a>
                        <a className="nav-link" href="#">Imprint</a>
                        <a className="nav-link" href="#">Privacy</a>
                    </nav>
                </div>
            </div>

        );
    }
}

export default Vote;