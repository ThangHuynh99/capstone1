import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import '../scss/fa/css/all.css';
import '../scss/bootstrap/css/bootstrap.css';
import '../scss/1.css';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo'
export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDays: [],
    };
  }

  handleDayClick(day, { selected }) {
    const { selectedDays } = this.state;
    if (selected) {
      const selectedIndex = selectedDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectedDays.splice(selectedIndex, 1);
    } else {
      selectedDays.push(day);
    }
    this.setState({ selectedDays });
  }

  render() {
    console.log(this.state.selectedDays);
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
        <DayPicker
          selectedDays={this.state.selectedDays}
          onDayClick={this.handleDayClick}
        />
        <div>
          <select name="Begin">
            <option value="07:00" selected="">6:00 </option>.
          <option value="07:00">6:30 </option>
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

          <select name="End">
            <option value="07:00" selected="">6:00 </option>.
          <option value="07:00">6:30 </option>
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
        </div>
      </div>

    );
  }
}
