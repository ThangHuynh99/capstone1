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
      title: "",
      location: "",
      note: "",
      endTime: '',
      beginTime: ''
    };
    this.handleDayClick = this.handleDayClick.bind(this);
    this.ChangeTimeBegin = this.ChangeTimeBegin.bind(this)
    this.ChangeTimeEnd = this.ChangeTimeEnd.bind(this)
  }

  // componentDidMount() {
  //   const { title, location, note } = this.props.location.state
  //   this.setState({
  //     title: title,
  //     location: location,
  //     note: note
  //   })
  // }

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
        // <li key={i}>
        //   <div className="col-md-7">
        //     <select className="col-sm-2 mt-4"
        //       id="exampleFormControlSelect1"
        //       name="Begin"
        //       style={{ width: "100px" }}
        //       onChange={(event) => this.ChangeTimeBegin(event.target.value, i)}>
        //       <option value="07:00">7:00 </option>
        //       <option value="07:30">7:30 </option>
        //       <option value="08:00">8:00 </option>
        //       <option value="08:30">8:30 </option>
        //       <option value="09:00">9:00 </option>
        //       <option value="09:30">9:30 </option>
        //       <option value="10:00">10:00 </option>
        //       <option value="10:30">10:30 </option>
        //       <option value="11:00">11:00 </option>
        //       <option value="11:30">11:30 </option>
        //       <option value="12:00">12:00 </option>
        //       <option value="12:30">12:30 </option>
        //       <option value="13:00">13:00 </option>
        //       <option value="13:30">13:30 </option>
        //       <option value="14:00">14:00 </option>
        //       <option value="14:30">14:30 </option>
        //       <option value="15:00">15:00 </option>
        //       <option value="15:30">15:30 </option>
        //       <option value="16:00">16:00 </option>
        //       <option value="16:30">16:30 </option>
        //       <option value="17:00">17:00 </option>
        //     </select>
        //     <select className="col-sm-2"
        //       id="exampleFormControlSelect1"
        //       name="End"
        //       style={{ width: "100px" }}
        //       onChange={(event) => { this.ChangeTimeEnd(event.target.value, i) }}>
        //       <option value="07:00">7:00 </option>
        //       <option value="07:30">7:30 </option>
        //       <option value="08:00">8:00 </option>
        //       <option value="08:30">8:30 </option>
        //       <option value="09:00">9:00 </option>
        //       <option value="09:30">9:30 </option>
        //       <option value="10:00">10:00 </option>
        //       <option value="10:30">10:30 </option>
        //       <option value="11:00">11:00 </option>
        //       <option value="11:30">11:30 </option>
        //       <option value="12:00">12:00 </option>
        //       <option value="12:30">12:30 </option>
        //       <option value="13:00">13:00 </option>
        //       <option value="13:30">13:30 </option>
        //       <option value="14:00">14:00 </option>
        //       <option value="14:30">14:30 </option>
        //       <option value="15:00">15:00 </option>
        //       <option value="15:30">15:30 </option>
        //       <option value="16:00">16:00 </option>
        //       <option value="16:30">16:30 </option>
        //       <option value="17:00">17:00 </option>
        //     </select>
        //   </div>
        // </li>
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
          <div className="row">
            <div className="col-md-5">
              <DayPicker
                selectedDays={this.state.selectedDays}
                onDayClick={this.handleDayClick}
              />
              <div >
                {/* {viewSchedule} */}
              </div>
            </div>

            <div style={{height: '300px',  overflow: 'auto'}} className="col-md-7 mt-4">
              {/* <span className="ml-4"> Begin </span> */}
              {/* <select className="col-sm-2 mt-4" id="exampleFormControlSelect1" name="Begin" onChange={this.handleBegin}>
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
            </select> */}
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
                  {/*<tr>
                    <th scope="row">1</th>
                    <td>13/11/2020</td>
                    <td>7:00</td>
                    <td>9:00</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>14/11/2020</td>
                    <td>13:00</td>
                    <td>15:00</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>15/11/2020</td>
                    <td>15:00</td>
                    <td>17:00</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ margin: '0 auto' }} className="row text-right">        
          <div className="col-sm-12 button1">
            <a style={{ float: 'right ', fontSize:'23px' }} name="" id="" className="btn btn-primary" href="#" role="button" onClick={this.ClickContinue}>Continue</a>
          </div>
        </div>
        </div>

        
      </div>
    );
  }
}
