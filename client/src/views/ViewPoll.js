import React from 'react';

class ViewPoll extends React.Component {
        state = {}
        constructor(props) {
                super(props);
                this.state = {
                        view: props.poll,
                        // key:props.key
                }
        }
        ClickNext(){
                var poll_id= this.state.view.poll_id
                var role=this.state.view.pu_role
                console.log(role)
                console.log(poll_id)
                sessionStorage.setItem("poll_id", poll_id);
                sessionStorage.setItem("pu_role", role);
                window.location = "/schedule/vote";
        }
        render() {
                console.log(this.state.view.poll_id)
                
                return (
                        <div className="border" style={{ height: '120px', width: '500px', marginLeft: '50px',marginBottom:'30px' }} onClick={this.ClickNext.bind(this)}>
                                <div className="Card-content" style={{ "margin": '16px', width: '94%', height: '73%', paddingLeft: '24px' }}>
                                        <div className="userAvatar" style={{ paddingTop: '7px' }}>
                                                <img src={require("../images/avt1.JPG")} width={50} height={50} style={{ borderRadius: '50%', "float": 'left', marginTop: '15px' }} className="d-inline-block
      align-top" alt="" loading="lazy" />
                                        </div>
                                        <div className="info" style={{ paddingLeft: '70px' }}>
                                                <div>
                                                        <h4 style={{ fontSize: "18px", marginBottom: '0px' }}>{this.state.view.poll_title}</h4>
                                                </div>
                                                <div>
                                                        <i className="fa fa-calendar" aria-hidden="true" ></i>
                                                        <span style={{ paddingLeft: '8px' }}>{this.state.view.option} options</span>
                                                </div>
                                                <div>
                                                        <i className="fa fa-user" aria-hidden="true" ></i>
                                                        <span style={{ paddingLeft: '8px' }}>{this.state.view.participants} invitees</span>
                                                </div>
                                        </div>
                                </div>

                        </div>
                )
        }
}
export default ViewPoll;