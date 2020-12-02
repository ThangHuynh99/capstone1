import React, { useState } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import '../scss/bootstrap/css/bootstrap.css';
import '../scss/option.css';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo'
import firebase from '../Firebase'
// const history = useHistory();
// const [room, setRoom] = useState({ roomname: '' });

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDays: [],
      schedule: [],
      data: props.data,
      title: "",
      location: "",
      note: "",
      endTime: '',
      beginTime: '',
      room: [{ 'roomname': '' }]

    };
    this.handleDayClick = this.handleDayClick.bind(this);
    this.ChangeTimeBegin = this.ChangeTimeBegin.bind(this)
    this.ChangeTimeEnd = this.ChangeTimeEnd.bind(this)
    // this.save = this.save.bind(this)
  }

  // componentDidMount() {
  //   const { title, location, note } = this.props.location.state
  //   this.setState({
  //     title: title,
  //     location: location,
  //     note: note
  //   })s
  // }
  save = (poll_id) => {
    // e.preventDefault();
    alert(poll_id)
    const user = [...this.state.room]
    user[0].roomname = poll_id
    alert(user[0].roomname)
    alert(user[0])
    // console.log(user[0].roomname)
    this.setState({ room: user })
    const newRoom = firebase.database().ref('rooms/').push();
    newRoom.set(user[0]);
    const newroomuser = { roomname: '', users_id:'', nickname: '', status: '' };
    newroomuser.roomname = user[0].roomname;
    newroomuser.nickname = sessionStorage["users_name"];
    newroomuser.users_id = sessionStorage["users_id"]
    newroomuser.status = 'online';
    const newRoomUser = firebase.database().ref('roomusers/').push();
    newRoomUser.set(newroomuser);
    // alert(this.state.user[0].roomname)
    // const ref = firebase.database().ref('rooms/');
    // ref.orderByChild('roomname').equalTo(user[0].roomname).once('value', snapshot => {
    //   // alert(poll_id)
    //   // if (snapshot.exists()) {
    //   //   return (
    //   //     <div>
    //   //       <td>
    //   //         Room name already exist!
    //   //               </td>
    //   //     </div>
    //   //   );
    //   // } else {
    //     const newRoom = firebase.database().ref('rooms/').push();
    //     newRoom.set(user[0]);
    //     // history.goBack();
    //     // showLoading="false"
    //   // }
    // });
  };
  handleDayClick(day, { selected }) {
    const { selectedDays, schedule } = this.state;
    if (selected) {
      const selectedIndex = selectedDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectedDays.splice(selectedIndex, 1);
    } else {
      // console.log(day.toLocaleDateString())
      selectedDays.push(day.toLocaleDateString());
      var time = ({
        date: day.toLocaleDateString(),
        beginTime: "07:00",
        endTime: "07:00"
      })
      schedule.push(time)
    }
    this.setState({ selectedDays, schedule });
  }
  ChangeTimeBegin(value, i) {
    let newSchedule = [...this.state.schedule]
    newSchedule[i].beginTime = value;
    this.setState({ schedule: newSchedule })
  }
  ChangeTimeEnd(value, i) {
    console.log(value)
    console.log(i)
    let newSchedule = [...this.state.schedule]
    newSchedule[i].endTime = value;
    this.setState({ schedule: newSchedule })
  }
  ClickContinue = (e) => {
    e.preventDefault();
    const addSchedule = {
      users_id: sessionStorage["users_id"],
      title: this.state.title,
      location: this.state.location,
      note: this.state.note,
      schedule: this.state.schedule
    };
    fetch('http://localhost:3001/schedule', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addSchedule)
    })
      .then(res => res.text())
      .then(result => {
        this.save(result)
        // const [showLoading, setShowLoading] = useState(false);
        // const showLoading='true'
        // const ref = firebase.database().ref('rooms/');
        // ref.orderByChild('roomname').equalTo(result.toString()).once('value', snapshot => {
        //   if (snapshot.exists()) {
        //     return (
        //       <div>
        //         <td>
        //           Room name already exist!
        //             </td>
        //       </div>
        //     );
        //   } else {
        //     const newRoom = firebase.database().ref('rooms/').push();
        //     newRoom.set(result.toString());
        //     // history.goBack();
        //     // showLoading='false'
        //   }
        // });
        window.location = "/schedule/vote";
        sessionStorage.setItem("poll_id", result);
      })
  }
  render() {
    console.log(this.state.schedule)

    const { selectedDay } = this.state;
    // console.log(selectedDay.toLocaleDateString())
    console.log(sessionStorage["users_id"])
    let viewSchedule = this.state.schedule.map((schedule, i) => {
      return (
        <tr>
          <th scope="row">{i + 1}</th>
          <td>{schedule.date}</td>
          <td><select className="col-sm-8 "
            // id="exampleFormControlSelect1"
            name="Begin"
            style={{ width: "100px" }}
            onChange={(event) => this.ChangeTimeBegin(event.target.value, i)}>
            <option value="07:00">7:00 </option>
            <option value="07:30">7:30 </option>
            <option value="08:00">8:00 </option>
            <option value="08:30">8:30 </option>
            <option value="09:00">9:00 </option>
            <option value="09:30">9:30 </option>
            <option value="10:00">10:00 </option>
            <option value="10:30">10:30 </option>
            <option value="11:00">11:00 </option>
            <option value="11:30">11:30 </option>
            <option value="12:00">12:00 </option>
            <option value="12:30">12:30 </option>
            <option value="13:00">13:00 </option>
            <option value="13:30">13:30 </option>
            <option value="14:00">14:00 </option>
            <option value="14:30">14:30 </option>
            <option value="15:00">15:00 </option>
            <option value="15:30">15:30 </option>
            <option value="16:00">16:00 </option>
            <option value="16:30">16:30 </option>
            <option value="17:00">17:00 </option>
          </select>
          </td>
          <td>
            <select className="col-sm-8"
              id="exampleFormControlSelect1"
              name="End"
              style={{ width: "100px" }}
              onChange={(event) => { this.ChangeTimeEnd(event.target.value, i) }}>
              <option value="07:00">7:00 </option>
              <option value="07:30">7:30 </option>
              <option value="08:00">8:00 </option>
              <option value="08:30">8:30 </option>
              <option value="09:00">9:00 </option>
              <option value="09:30">9:30 </option>
              <option value="10:00">10:00 </option>
              <option value="10:30">10:30 </option>
              <option value="11:00">11:00 </option>
              <option value="11:30">11:30 </option>
              <option value="12:00">12:00 </option>
              <option value="12:30">12:30 </option>
              <option value="13:00">13:00 </option>
              <option value="13:30">13:30 </option>
              <option value="14:00">14:00 </option>
              <option value="14:30">14:30 </option>
              <option value="15:00">15:00 </option>
              <option value="15:30">15:30 </option>
              <option value="16:00">16:00 </option>
              <option value="16:30">16:30 </option>
              <option value="17:00">17:00 </option>
            </select></td>
        </tr>
      )
    })
    return (
      <div className="justify-center">
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <Link to='/'>
            <h3 className="navbar-brand" href="#" style={{ color: '#98cdfb' }}>Meeting planner</h3>
          </Link>
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
            <>
              <UserInfo />
            </>
            <div className="btn-group">
              <Link to="/create">
                <button type="button" className="btn btn-danger" style={{ borderRadius: '4px' }}>
                  <h5>+ Create</h5>
                </button>
              </Link>
            </div>
          </div>
        </nav>
        <div className="container-xl pt-5 pb-5">
          <div className="row">
            <div className="col-md-5">
              <DayPicker
                selectedDays={this.state.selectedDays}
                onDayClick={this.handleDayClick}
              />
              <div >
              </div>
            </div>
            <div style={{ height: '300px', overflow: 'auto' }} className="col-md-7 mt-4">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Option</th>
                    <th scope="col">Date</th>
                    <th scope="col">Begin</th>
                    <th scope="col">End</th>
                  </tr>
                </thead>
                <tbody>
                  {viewSchedule}
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ margin: '0 auto' }} className="row text-right">
            <div className="col-sm-12 button1">
              <a style={{ float: 'right ', fontSize: '23px' }} name="" id="" className="btn btn-primary" href="#" role="button" onClick={this.ClickContinue}>Continue</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
