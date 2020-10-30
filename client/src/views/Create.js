import React, { Component } from 'react';
import Datepicker from 'react-datepicker'
class Create extends Component{
        render(){
                const [selectedDate,selectDate]=userState(null);
                return(
                        <Datepicker selected = {selectDate}
                        onChange= {date => setSelectedDate(date)}
                        dateFormat='dd/mm/yyyy'
                        />
                )
        }
}
export default Create;