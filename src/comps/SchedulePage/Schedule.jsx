import React, { Suspense, lazy, useState } from 'react';
import './SchedulePage.css';
const LazyCalendar = lazy(() => import('./Calendar'));
const LazyEventDetails = lazy(() => import('./EventDetails'));

function Schedule() {
  
    return (

        <div className="bookings-div">
             <br>
             </br>
             <Suspense fallback={<div>Loading...</div>}>
            <LazyCalendar/>
            <div className="vertical-line"></div>
            <LazyEventDetails/>
            </Suspense>
            <br>
            </br>
        </div>

)};


export default Schedule;



