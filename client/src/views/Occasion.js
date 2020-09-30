import React from 'react';
import '../scss/bootstrap/css/bootstrap.css';
import '../scss/login.css';
import '../scss/fa/css/all.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


class Occasion extends React.Component{

    render(){
        return(
        <div class="bgr">    
            <div style={{ maxWidth: '890px' }} className="container pt-5">
                <div class="text-center">
                    <span>Step 1 of 3</span>
                    <h2>What's the Occasion?</h2>
                </div>
              <div className="row">
                <div div className="col-md-4">
                  <form method="POST">
                  <div  style={{width: '800px'}}>
                    <input type="text" className="form-control mt-4 mb-3" id="inputEmail4" placeholder="Enter title" />
                    <input className="form-control " id="inputPassword4" placeholder="Location" />   
                    <input type="text" className="form-control mt-3 " id="inputPassword4" placeholder="Add note" />
                    <div style={{ border: 'transparent' }} className="text-center">
                    <input type="submit" className="button mt-4" name = "change" value="Continue" />
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