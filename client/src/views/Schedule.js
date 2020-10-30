import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Schedule() {
  const [date, setDate] = useState(new Date());
  console.log(date)
  return (
    <DatePicker 
    closeOnScroll={e => e.target.value === document}
    selected={date} 
    onChange={date => setDate(date)} />
  );
}