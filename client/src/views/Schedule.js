import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class Schedule extends React.Component {

constructor(props){
  super(props)
  this.state={
    time:''
  }
}
handleTime = (e) => {
  this.setState({ time: e.target.value })
}
render(){
  // console.log(date);
  console.log(this.state.time);
  // const[date, setDate] = useState(new Date());
  return (
    <div>
      {/* <DatePicker
        closeOnScroll={e => e.target.value === document}
        selected={date}
        onChange={date => setDate(date)} />
      <div class="md-form md-outline">
        <input type="time" id="default-picker" class="form-control" placeholder="Select time" onChange={this.handleTime} />
        <label for="default-picker">Default Time Picker</label>
      </div> */}
        Toan
    </div>
  );
}
}
export default Schedule;