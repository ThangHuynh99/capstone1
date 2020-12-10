import React, { useState } from "react";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
class Schedule extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      schedule: props.schedule,
      date: props.date
    }
  }
  render() {
    console.log(this.state.date.date)
    return (
      <td style={{ width: '110px', height: '130px', textAlign: 'center' }} className="date">
        {this.state.date.date}<br></br>{this.state.schedule.schedule_starttime.substring(0,5)}-{this.state.schedule.schedule_endtime.substring(0,5)}
      </td>
    );
  }
}
export default Schedule;