import React from 'react';
import useAuth from '../../hooks/useAuth';
import bookingData from '../../hooks/useBookingData';
function UserPage() {
    //{bookedBy, booked, month, date, bookedByEmail}
    const user = useAuth();
    const bookings = bookingData();
    return (
        <div>
            {bookings.map((booking, index) =>(
                <div key={index}>
                    <h3>Booked by</h3>
                    <p>{booking.bookedByEmail}</p>
                    <h3>Date</h3>
                    <p>{booking.month} / {booking.date}</p>
                </div>
            ))}
        </div>
    );
}

export default UserPage;