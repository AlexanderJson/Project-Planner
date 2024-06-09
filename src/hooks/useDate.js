import { useState, useEffect } from 'react';

function useDate(){
    const [days, setDays] = useState([]);
    const [dateString, setDateString] = useState('');

    useEffect(() => {
        const date = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDateString = date.toLocaleDateString('en-US', options);

        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const daysArray = [...Array(daysInMonth).keys()].map((day) => day + 1);
    
        setDays(daysArray);
        setDateString(formattedDateString);
    }, []);

    return { days, dateString };

};

export default useDate;