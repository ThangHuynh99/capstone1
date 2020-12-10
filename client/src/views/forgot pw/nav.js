import React, { Component } from 'react'

class Nav extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light pb-5">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
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
        )
    }
}

export default Nav;