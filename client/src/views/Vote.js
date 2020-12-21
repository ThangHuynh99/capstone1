import React from 'react';
import '../scss/vote.css';
import Schedule from './Schedule'
// import { Button } from 'semantic-ui-react';
// import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ChatRoom from './ChatRoom';
import UserInfo from './UserInfo'
class Vote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            poll_id: sessionStorage["poll_id"],
            pu_role: sessionStorage["pu_role"],
            schedule: [],
            data: [],
            poll: [],
            vote: [],
            date: [],
            email: "",
            poll_status: "",
            schedule_finish: ""
        }
        this.submitVote = this.submitVote.bind(this)
        this.invite = this.invite.bind(this)
        this.deletePoll=this.deletePoll.bind(this)
        // this.componentDidMount = this.componentDidMount(this)
        // this.deleteUser=this.deleteUser.bind(this)
        this.finalOption = this.finalOption.bind(this)
    }
    componentDidMount() {
        const poll_id = this.state.poll_id;
        fetch('http://localhost:3001/vote/user', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ poll_id })
        })
            .then(response => response.json())
            .then(result => {
                const { data, dataSchedule, dataPoll, dataDate } = result
                console.log(dataDate)
                this.setState({
                    data: data,
                    schedule: dataSchedule.rows,
                    poll: dataPoll,
                    date: dataDate
                })
                let max = 0;
                let index = 0;
                const dataVote = new Array()
                for (let i = 0; i < data[0].data1.length; i++) {
                    let count = 0
                    for (let j = 0; j < data.length; j++) {
                        // console.log("------------------" + i + "------------------" + j + "---------")
                        // console.log(data[j].data1[i])
                        if (data[j].data1[i].vote_status === 1)
                            count++;
                    }
                    if (max < count) {
                        // console.log("------"+i+"------------")
                        index = i;
                        max = count
                    }
                    // console.log(count)
                    dataVote.push(count)
                }
                this.setState({ vote: dataVote, schedule_finish: index })
                if (this.state.poll.poll_status === 0) {
                    document.getElementById("bntFinal").disabled = 'disabled'
                    document.getElementById("bntSubmit").disabled = 'disabled'
                    if (this.state.pu_role === 'host') {
                        document.getElementById("bntSend").disabled = 'disabled'
                    }
                }
                // console.log(dataVote)
            })
    }
    handleEmail = (e) => {
        this.setState({ email: e.target.value })
    }
    deleteUser(i) {
        const dataUsers = [...this.state.data]
        console.log(dataUsers[i])
        const data = {
            user: dataUsers[i],
            poll_id: this.state.poll_id
        }
        if (window.confirm('Do you want to delete ' + dataUsers[i].user_name + ' ?')) {
            fetch('http://localhost:3001/deleteuser', {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(res => res.text())
                .then(result => {
                    if (result === "complete") {
                        console.log(result)
                        console.log("Xóa thành công")
                        window.location.reload(false);
                    }
                })
        }
    }
    invite() {
        const invite = ({
            user_email: this.state.email,
            poll_id: this.state.poll_id,
            schedule: this.state.schedule
        })
        console.log(invite)
        fetch('http://localhost:3001/invite', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(invite)
        })
            .then(res => res.text())
            .then(result => {
                if (result === "Complete") {
                    // console.log(" Thành công ")
                    window.location.reload(false);
                    // this.componentDidMount();
                }
            })
    }
    vote(i, j) {
        let newData = [...this.state.data];
        if (newData[i].data1[j].vote_status === 1)
            newData[i].data1[j].vote_status = 0
        else
            newData[i].data1[j].vote_status = 1
        this.setState({ data: newData });

    }
    submitVote() {
        var data = [...this.state.data];
        data.forEach(element => {
            if (element.user_id.toString() === sessionStorage["users_id"]) {
                fetch('http://localhost:3001/vote/submit', {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(element.data1)
                })
                    .then(res => res.text())
                    .then(result => {
                        if (result === "complete")
                            console.log("Xong rồi nha")
                        window.location.reload(false);
                    })
            }
        })

    }
    finalOption() {
        const poll_id = this.state.poll_id;
        const schedule_finish=this.state.date[this.state.schedule_finish]
        // console.log(poll_id)
        fetch('http://localhost:3001/vote/finaloption', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ poll_id,schedule_finish })
        })
            .then(res => res.text())
            .then(result => {
                if (result === "Complete") {
                    // console.log("Xong rồi nha")
                    window.location.reload(false);
                }
            })
    }
    deletePoll() {
        var data1 = ({
            data: this.state.data,
            dataSchedule: this.state.schedule,
            dataPoll: this.state.poll,
            dataDate: this.state.date
        })
        fetch('http://localhost:3001/deletepoll', {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify( data1 )
        }).then(res=>res.text())
        .then(result =>{
            if(result==='Complete')
                alert(result)
                window.location='/dashboard'
        })
    }

    render() {
        // console.log(this.state.poll_id)
        // console.log(this.state.data)
        // console.log(this.state.poll)
        console.log(sessionStorage["poll_id"])
        let schedule1 = this.state.schedule.map((schedule, i) => {
            return <Schedule key={i} schedule={schedule} date={this.state.date[i]} />
        })
        let users = this.state.data.map((data, i) => {
            let data1 = data.data1.map((element, j) => {
                return (<td key={j} className="value" width="72px">
                    <input disabled={this.state.poll.poll_status.toString() === '0' ? 'disabled' : data.user_id.toString() === sessionStorage["users_id"] ? null : 'disabled'}
                        onClick={this.vote.bind(this, i, j)}
                        name="chkVote"
                        type="checkbox"
                        checked={element.vote_status === 1 ? true : false} >
                    </input>
                </td>)
            })
            return (
                <tr key={i}>
                    <td>{data.user_name} {this.state.pu_role === 'host' ? <i style={{ float: 'right' }} className="fas fa-trash pr-2" onClick={this.deleteUser.bind(this, i)} /> : null} </td>
                    {data1}
                </tr>
            )
        })
        let users2 = this.state.data.map((data, i) => {
            if (data.user_id.toString() === sessionStorage["users_id"]) {
                let data1 = data.data1.map((element, j) => {
                    return (<td key={j} className="value" width="72px">
                        <input disabled={this.state.poll.poll_status.toString() === '0' ? 'disabled' : data.user_id.toString() === sessionStorage["users_id"] ? null : 'disabled'}
                            onClick={this.vote.bind(this, i, j)}
                            name="chkVote"
                            type="checkbox"
                            checked={element.vote_status === 1 ? true : false} >
                        </input>
                    </td>)
                })
                return (
                    <tr key={i}>
                        <td>{data.user_name} {this.state.pu_role === 'host' ? <i style={{ float: 'right' }} className="fas fa-trash pr-2" onClick={this.deleteUser.bind(this, i)} /> : null} </td>
                        {data1}
                    </tr>
                )
            }
        })
        return (
            <>
                <div style={{ padding: 0, boxShadow: '0px 5px 5px 1px silver' }} className="container mt-4 mb-4">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="#">
                            <Link to='/'>
                                <h4 style={{ fontWeight: 700, color: 'lightskyblue' }}>Planing Meeting</h4>
                            </Link>
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
                            <div>
                                <UserInfo></UserInfo>
                            </div>
                            <div className="btn-group">
                                <Link to="/create">
                                    <button type="button" className="btn btn-danger" style={{ borderRadius: '4px' }}>
                                        <h5>+ Create</h5>
                                    </button>
                                </Link>
                            </div>
                        </div></nav>

                    <nav style={{ backgroundColor: '#45505e' }} className="nav justify-content-center">
                        {this.state.pu_role === 'host' ?
                            <>
                                <button id='bntFinal' type='button' onClick={this.finalOption}> <a style={{ color: 'green' }} className="nav-link active">Choose final option</a></button>
                                <a style={{ color: 'white' }} className="nav-link active" href="/create">Edit</a>
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
                                    <a className="dropdown-item" onClick={this.deletePoll} href="#">Delete poll</a>
                                </div>
                            </>
                            : null}
                    </nav>
                    <div className="text-center">
                        <h3 className=" mt-3 text-center" >TÊN CUỘC HỌP</h3>
                        <h3 className=" mt-3 text-center">
                            {this.state.data.map(element => {
                                if (element.user_id.toString() === sessionStorage["users_id"]) {
                                    return (<small style={{ textAlign: "center" }}>{element.user_name}</small>)
                                }
                            })}
                        </h3>
                    </div>

                    {this.state.pu_role === 'host' ?
                        <div style={{ border: 'solid 1px', backgroundColor: '#f5fbff' }} className="m-5 p-3">
                            <form className="mb-4 ">
                                <div style={{ margin: '0 auto' }} className="col-md-8 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1" onChange={this.handleEmail}>Enter Email</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} onChange={this.handleEmail} />
                                    </div>
                                </div>
                                <div style={{ margin: '0 auto' }} className="col-md-8">
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">Messenger</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1 1" rows={3} defaultValue={""} />
                                    </div>
                                </div>
                            </form>
                            <div style={{ margin: '0 auto' }} className="col-md-8 mb-4">
                                <button id="bntSend" disabled="" type="submit" className="btn btn-primary" onClick={this.invite} >Send</button>
                            </div>
                        </div>
                        : null}
                    <div className="scroll">
                        <table style={{ margin: '0 auto' }} className="i-square i-full i-border mb-5">
                            <tbody>
                                <tr>
                                    <td style={{ width: '200px', height: '130px' }} />
                                    {schedule1}
                                </tr>
                                <tr>
                                    <td>{this.state.data.length} participants <i style={{ float: 'right' }} className="fas fa-plus pr-2" /></td>
                                    {
                                        this.state.vote.map(element => {
                                            return (
                                                <td style={{ textAlign: 'center' }}>
                                                    <p>{element}/{this.state.data.length}</p>
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                {/* {users2} */}
                                {this.state.pu_role === 'host' || this.state.poll.poll_option === 'public' ? users : users2}
                            </tbody>
                        </table>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-right mb-3 mt-3 ">
                                <button className="btn btn-primary  p-2" id="bntSubmit" disabled='' onClick={this.submitVote}>submit</button>

                            </div>
                        </div>
                    </div>
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
                <ChatRoom></ChatRoom>
            </>

        );
    }
}

export default Vote;