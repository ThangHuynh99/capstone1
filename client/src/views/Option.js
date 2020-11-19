import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import '../scss/bootstrap/css/bootstrap.css';
import '../scss/option.css';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo'
export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDays: [],
      schedule: [],
      data: props.data,
      title: "Cuộc họp điểm danh",
      location: "Zoom",
      note: "chỉ 15 phút",
      endTime: '',
      beginTime: ''
    };
    this.handleDayClick = this.handleDayClick.bind(this);
    this.ChangeTimeBegin = this.ChangeTimeBegin.bind(this)
    this.ChangeTimeEnd = this.ChangeTimeEnd.bind(this)
  }
  componentDidMount() {
    // const { title, location, note } = this.props.location.state
    // this.setState({
    //   title: title,
    //   location: location,
    //   note: note
    // })
  }

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
  ClickContinue=(e)=> {
    e.preventDefault();
    const  addSchedule = {
      users_id:sessionStorage["users_id"],
      title: this.state.title,
      location:this.state.location,
      note:this.state.note,
      schedule:this.state.schedule
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
        // console.log(result)
        // var  poll_id=JSON.parse(result)
        // console.log(result)
            window.location = "/schedule/vote";
            sessionStorage.setItem("poll_id", result);
      })
  }
  render() {
    // console.log(this.state.selectedDays)
    console.log(this.state.schedule)
    // // console.log(this.state.selectedDays);
    // // // console.log(this.state.title)
    // // // console.log(this.state.location)
    // // // console.log(this.state.note)
    // console.log(this.state.beginTime)
    // console.log(this.state.endTime)
    const { selectedDay } = this.state;
    // console.log(selectedDay.toLocaleDateString())
    console.log(sessionStorage["users_id"])
    let viewSchedule = this.state.schedule.map((schedule, i) => {
      return (
        <li key={i}>
          <label>Day:{schedule.date}</label>
          <span className="ml-4"> Begin </span>
          <select className="col-sm-2" id="exampleFormControlSelect1" name="Begin" style={{ width: "100px" }} onChange={(event) => this.ChangeTimeBegin(event.target.value, i)}>
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
          <span className="ml-4"> End </span>
          <select className="col-sm-2" id="exampleFormControlSelect1" name="End" style={{ width: "100px" }} onChange={(event) => { this.ChangeTimeEnd(event.target.value, i) }}>
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
        </li>
      )
    })
    return (

      <div className="justify-center">
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <h3 className="navbar-brand" href="#" style={{ color: '#98cdfb' }}>Meeting planner</h3>
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
          <div className="text-center">

            <DayPicker
              selectedDays={this.state.selectedDays}
              onDayClick={this.handleDayClick}
            />
            <div style={{ width: "663px", float: "right", marginTop: "80px" }}>
              {viewSchedule}
            </div>
            {/* <span className="ml-4"> Begin </span>
            <select className="col-sm-2" id="exampleFormControlSelect1" name="Begin" onChange={this.handleBegin}>
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
              <option value="17:30">17:30 </option>
              <option value="18:00">18:00 </option>
              <option value="18:30">18:30 </option>
              <option value="19:00">19:00 </option>
              <option value="19:30">19:30 </option>
              <option value="20:00">20:00 </option>
              <option value="20:30">20:30 </option>
              <option value="21:00">21:00 </option>
              <option value="21:30">21:30 </option>
              <option value="22:00">22:00 </option>
              <option value="22:30">22:30 </option>
              <option value="23:00">23:00 </option>
              <option value="23:30">23:30 </option>
            </select>
            <span className="ml-4"> End </span>
            <select className="col-sm-2" id="exampleFormControlSelect1" name="End" onChange={this.handleEnd}>
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
               <option value="17:30">17:30 </option>
              <option value="18:00">18:00 </option>
              <option value="18:30">18:30 </option>
              <option value="19:00">19:00 </option>
              <option value="19:30">19:30 </option>
              <option value="20:00">20:00 </option>
              <option value="20:30">20:30 </option>
              <option value="21:00">21:00 </option>
              <option value="21:30">21:30 </option>
              <option value="22:00">22:00 </option>
              <option value="22:30">22:30 </option>
              <option value="23:00">23:00 </option>
              <option value="23:30">23:30 </option> 
            </select> */}

          </div>
          <div style={{ margin: '0 auto' }} className="row">
            <div className="col-sm-2 text-center button1">
              <a style={{ margin: '0 auto' }} className="btn btn-primary" href="#" role="button">More option</a>
            </div>
            <div className="col-sm-2 button1">
              <a style={{ float: 'right' }} name="" id="" className="btn btn-primary" href="#" role="button" onClick={this.ClickContinue}>Continue</a>

            </div></div>
        </div>
      </div>
    );
  }
}
