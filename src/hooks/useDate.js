import { useState, useEffect } from 'react';
import moment from 'moment';

function useDate(){
    const [currentMonth, setCurrentMonth] = useState([]);
    const [currentDay, setCurrentDay] = useState("");
    useEffect(() => {
        const fetchDate = () => {
            const daysInMonth = moment().daysInMonth();
            const days = Array.from({length: daysInMonth}, (_, i) => moment().startOf('month').add(i, 'days').format('MMMM Do'));
            setCurrentMonth(days);
            const today = moment().format('MMMM Do');
            setCurrentDay(today);
        };
        fetchDate();
    }, []);
    return [currentMonth, currentDay];



};

export default useDate;