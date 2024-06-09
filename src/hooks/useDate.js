import { useState, useEffect } from 'react';

function useDate(){
    const [days, setDays] = useState([]);
    const [dateString, setDateString] = useState('');
    const [month, setMonth] = useState(0);

    useEffect(() => {
        const date = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDateString = date.toLocaleDateString('en-US', options);

        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const daysArray = [...Array(daysInMonth).keys()].map((day) => day + 1);
    
        setDays(daysArray);
        setDateString(formattedDateString);
        setMonth(date.getMonth() + 1);
    }, []);

    return { days, dateString, month };

};

export default useDate;