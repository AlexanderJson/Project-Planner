import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from '../assets/firebaseConfig';
import useAuth from './useAuth';


const useBookingData = () => {
    const user = useAuth();
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookingData = async () => {
           
            try{
                const bookingRef = collection(db, 'bookings');
                const q = query(bookingRef, where("bookedByEmail", "==", user.email));
                const bookingSnapshot = await getDocs(q)
                const bookingData = bookingSnapshot.docs.map(doc => doc.data());
                setBookings(bookingData);
            }catch(e){
                console.log(e);
            }
      
        };
        fetchBookingData();
    }, [db, user]);

    return bookings;
};

export default useBookingData;






