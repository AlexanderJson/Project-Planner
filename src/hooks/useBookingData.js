import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from '../assets/firebaseConfig';


const useBookingData = () => {

    const [bookings, setBookings] = useState(null);

    useEffect(() => {
        const fetchBookingData = async () => {
            try{
                const bookingRef = collection(db, 'bookings');
                const bookingSnapshot = await getDocs(bookingRef)
                const bookingData = bookingSnapshot.docs.map(doc => doc.data());
                setBookings(bookingData);
            }catch(e){
                console.log(e);
            }
      
        };
        fetchBookingData();
    }, [db]);
    return bookings;
};

export default useBookingData;






