import React, { useState } from "react";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
class Schedule extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      schedule: props.schedule
    }
    console.log(this.state.schedule)
  }
  render() {
    // console.log(date);
    console.log(this.state.time);
    // const[date, setDate] = useState(new Date());
    return (
      <td style={{ width: '72px', height: '130px', textAlign: 'center' }} className="date">
        {this.state.schedule.schedule_date.substring(0, 10)}
      </td>
    );
  }
}
export default Schedule;