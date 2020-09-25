import React from 'react';
import '../scss/cssUIweb/register.css';
import '../scss/cssUIweb/all.css';
import '../scss/cssUIweb/bootstrap.css';

function register() {
    return (
        <div>
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
        <div style={{maxWidth: '890px'}} className="container pt-5">
          <div className="row">
            <div className="col-md-4">
              <img style={{width: '100%'}} src="images/login21.jpg" alt="" />
            </div>
            <div className="col-md-4">
              <div className="mt-3">
                <a style={{color: 'silver', fontWeight: 600}} className="pt-5" href="login.html">Sign in/ </a>
                <a style={{color: 'black', fontWeight: 600}} className="pt-5" href="register.html">Sign up</a>
              </div>
              <div className="pr-3" style={{borderRight: 'solid  1px silver'}}>
                <input type="email" className="form-control mt-4 mb-3" id="inputEmail4" placeholder="Username" />
                <input type="password" className="form-control " id="inputPassword4" placeholder="Password" />
                <input type="password" className="form-control mt-3 " id="inputPassword4" placeholder="Password" />
                <div style={{border: 'transparent'}} className="text-center">
                  <button className="button mt-4">
                    <span><h5 className="pt-1 pb-1 pl-4 pr-4">sign up</h5></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-5 pb-5">
              <div className="text-center mt-5 pt-5">
                <button className="fb p-2"> login on facebook <i className="fab fa-facebook" aria-hidden="true" /></button> <br />
                <button className="gm mt-2 pt-2 pb-2 pl-4 pr-4"> login on Gmail <i className="far fa-envelope" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default register;