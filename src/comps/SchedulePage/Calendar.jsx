import React, { act, useState } from 'react';
import useCurrentMonthDates  from '../../hooks/useDate';
import { getFirestore, collection, query, where, getDocs,doc, setDoc } from 'firebase/firestore';
import { auth, firestore } from '../../assets/firebaseConfig';
import { GithubAuth } from '../../assets/GithubAuth';
import './SchedulePage.css';
function Calendar() {
    
    const { days, dateString, month } = useCurrentMonthDates();

    const [bookedDates, setBookedDates] = useState([]); 

    const [userInfo, setUserInfo] = useState(null);

    const getBookedDates = async () => {
        const firestore = getFirestore();
        try{
            const bookingsRef = collection(firestore, 'bookings');

            const q = query(bookingsRef, where('booked', '==', userInfo));

            const querySnapshot = await getDocs(q);

            const bookings = querySnapshot.docs.map((doc) => doc.data());
            setBookedDates(bookings);
            alert(bookings)
        } catch (e){
            console.log(e);
        }
    };

    



    
    // för knapp
    const [activeDate, setActiveDate] = useState(null);

    const handleDayClick = (day) => {
        setActiveDate({day, month});
    }

    const bookEvent = async () => {
        if(activeDate === null) {
            return;
        } else {
            
            alert(`Event booked: ${activeDate.day}/${activeDate.month}`);
            const firestore = getFirestore();
            const userInfo = await GithubAuth();
            setUserInfo(userInfo);
            const docRef = doc(firestore, 'bookings', `${activeDate.day}-${activeDate.month}` );
            // fixa permissions så admins kan boka oflk, vanliga kan bar var tillgänliga
            await setDoc(docRef, {
                date: activeDate.day,
                month: activeDate.month,
                booked: true,
                //attendees: [],
                bookedBy: userInfo.name,
                bookedByEmail: userInfo.email,
            })
        }
    }


    return (
    <div>
        <div className="plans-header">
        <h1>{dateString}</h1>
        </div>
        <div className="schedule-div">
        {days.map((day, index) => (
          <div 
          key={index} 
          className={`day-div ${activeDate && activeDate.day === day ? 'active' : ''}`} 
          onClick={() => handleDayClick(day)}
        >{day}</div>
                ))}
                <button className='book-btn' onClick={bookEvent}>Book</button>
                <button className='book-btn' onClick={getBookedDates}>Get booked dates</button>
        </div>
        </div>
    );
}


export default Calendar;