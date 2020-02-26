import React, { Component } from 'react';
import Calendar from 'react-calendar';
 
class MyApp extends Component {
  state = {
    date: new Date(),
  };
  tileContent =({ date, view }) => view === 'month' && date.getDay() === 0 ? <p>It's Sunday!</p> : null
 
  onChange = date => this.setState({ date })
  render() {
    return (
      <div>
        <Calendar
          tileContent={this.state.date}
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
  
}
export default Calendar;