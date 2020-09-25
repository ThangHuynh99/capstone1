import React from 'react';
import '../scss/bootstrap/css/bootstrap.css';
import '../scss/login.css';
import '../scss/fa/css/all.css';

function login() {
  return (
    <div class="bgr">
       <div className="container p-5 mt-5 mb-5">
        <nav className="navbar navbar-expand-lg navbar-light 
                sticky-top">
          <a className="navbar-brand" href="#" style={{fontWeight: 700}}><h4>Plan
              Meeting</h4></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle
                    navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <div className="btn-group">
                  <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Action
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>
              </li>
            </ul>
            <span className="navbar-text pr-3">
              <button className="register"><a className="nav-link" href="#">Đăng
                  Ký</a></button>
            </span>
            <span className="navbar-text pr-3">
              <button className="login"><a className="nav-link" href="#">Đăng
                  Nhập</a></button>
            </span>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-12">
            <form>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Example select</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
  );
}

export default login;
