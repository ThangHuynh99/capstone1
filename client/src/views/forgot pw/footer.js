import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div style={{ margin: '0 auto' }} className="footer pt-3 pb-3">
                <nav className="nav justify-content-center">
                    <a className="nav-link active" href="#">Team</a>
                    <a className="nav-link" href="#">Jobs</a>
                    <a className="nav-link" href="#">Blog</a>
                    <a className="nav-link" href="#">Media Corner</a>
                    <a className="nav-link" href="#">Meeting Planner Labs</a>
                </nav>
                <nav className="nav justify-content-center">
                    <a className="nav-link" href="#">Ads on Meeting Planner</a>
                    <a className="nav-link" href="#">Help</a>
                    <a className="nav-link" href="#">Contact Us</a>
                </nav>
                <nav className="nav justify-content-center">
                    <a className="nav-link" href="#">Terms</a>
                    <a className="nav-link" href="#">Imprint</a>
                    <a className="nav-link" href="#">Privacy</a>
                </nav>
            </div>
        )
    }
}

export default Footer;