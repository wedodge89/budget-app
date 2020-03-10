import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import '../../main.scss'

const Calendar = (props) => {
  return (
    <div id="calendar">
    <FullCalendar 
    dateClick={props.dateClick} 
    defaultView="dayGridMonth"
    events={props.events} 
    plugins={[ dayGridPlugin ]} />
    </div>
  )
}
export default Calendar;