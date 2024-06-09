import React from 'react';
import useDate from '../../hooks/useDate';
import './SchedulePage.css';
function Schedule() {
    
    const currentMonth = useDate();
    const {currentDay} = useDate();


    return (
    <div>
        <div className="plans-header">
        <h1>{currentDay}</h1>
        </div>
        <div className="schedule-div">
            {currentMonth.map((date, index) =>(
            <div key={index} className="day-div">{date}</div>
        ))}
        </div>
        </div>
    );
}


export default Schedule;


/** <h1>Schedule</h1>
            <Suspense fallback={<div>Loading...</div>}>
            <LazyDate />
            </Suspense> */