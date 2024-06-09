import React, { act, useState } from 'react';
import useCurrentMonthDates  from '../../hooks/useDate';
import './SchedulePage.css';
function Calendar() {
    
    const { days, dateString } = useCurrentMonthDates();
    
    // för knapp
    const [activeDate, setActiveDate] = useState(null);

    const handleDayClick = (day) => {
        setActiveDate(day);
    }

    const bookEvent = () => {
        alert('Event booked:  ' + (activeDate))
    }


    return (
    <div>
        <div className="plans-header">
        <h1>{dateString}</h1>
        </div>
        <div className="schedule-div">
        {days.map((day, index) => (
        <div key={index} 
        className={`day-div ${activeDate === index ? 'active' : ''}`}onClick={() => handleDayClick(day)}
        >{day}</div>
                ))}
                <button className='book-btn' onClick={bookEvent}>Book</button>
        </div>
        </div>
    );
}


export default Calendar;
