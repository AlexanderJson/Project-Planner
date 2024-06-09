import React from 'react';
import useCurrentMonthDates  from '../../hooks/useDate';
import './SchedulePage.css';
function Calendar() {
    
    const { days, dateString } = useCurrentMonthDates();



    return (
    <div>
        <div className="plans-header">
        <h1>{dateString}</h1>
        </div>
        <div className="schedule-div">
        {days.map((day, index) => (
                    <div key={index} className="day-div">{day}</div>
                ))}
        </div>
        </div>
    );
}


export default Calendar;
