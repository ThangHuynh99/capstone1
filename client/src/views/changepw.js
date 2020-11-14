import React from 'react';
import '../scss/bootstrap/css/bootstrap.css';
import '../scss/login.css';
import '../scss/fa/css/all.css';
// import axios from 'axios';
import { NavLink } from 'react-router-dom';

class Changepw extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      newPassword: ''
    }
  }
  change = (e) => {
    const data ={
      email : this.state.email,
      password:this.state.password
    }
    var message = document.getElementById('error');
    e.preventDefault();
    fetch('http://localhost:3001/changepw', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res =>{res.JSON(data)})
    .then((result) =>{
      if(result==='Successful'){
        message.innerHTML='Change password complete';
      }
      else if(result==='not exist'){
        message.innerHTML='email is not exist';
      }
      else{
        message.innerHTML= 'Error: '+result;
      }
    })
    
  }
  handleEmail=(e)=>{
    this.setState({email:e.target.value})
  }
  handleNewPassword=(e)=>{
    this.setState({password:e.target.value})
  }
  handleNewPassword1=(e)=>{
    this.setState({newPassword:e.target.value})
  }
  render() {
    return (
      <div class="bgr">
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
    .          </li>
              <li className="nav-item">
                <a className="nav-link pr-5" href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </nav>
        <div style={{ maxWidth: '890px' }} className="container pt-5">
          <div className="row">
            <div className="col-md-4">
              <img style={{ width: '100%' }} src={require("../images/login21.jpg")} alt="" />
            </div>
            <div className="col-md-4">
              <div className="mt-3">
                <NavLink
                  exact activeStyle={{
                   fontWeight: 600,
                    color: "red"
                  }}
                  activeClassName='pt-5'
                  to='/login'>
                  Login
                  </NavLink>

              </div>
              <form method="POST">
                <div className="pr-3" style={{ borderRight: 'solid  1px silver' }}>
                  <input type="email" className="form-control mt-4 mb-3" id="inputEmail4" placeholder="Username" onChange={this.handleEmail} />
                  <input type="password" className="form-control " id="inputPassword4" placeholder="New Password" onChange={this.handleNewPassword} />
                  <input type="password" className="form-control mt-3 " id="inputPassword4" placeholder="New Password" onChange={this.handleNewPassword1} />
                  <div style={{ border: 'transparent' }} className="text-center">
                    <input type="submit" className="button mt-4" name="change" value="Change" />
                    {/* <span><h5 className="pt-1 pb-1 pl-4 pr-4">Change</h5> </span>
                  </input> */}
                  </div>
                  <div className="error-group">
                    <span htmlFor="error" id="error" className="error"></span>
                  </div>
                </div>
              </form>
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
}

export default Changepw;