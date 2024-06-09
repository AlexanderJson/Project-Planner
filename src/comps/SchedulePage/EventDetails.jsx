import React, { useState } from 'react';
import './SchedulePage.css';

function EventDetails() {

    const [selectedItem, setSelectedItem] = useState(null);


    const timestamps = [
        { time: "9:00am", value: "Eat breakfast", location: "Kitchen", attendees: [] },
        { time: "11:00am", value: "Attend meeting", location: "Meeting Room 1", attendees: ["John", "Jane", "Doe"] },
        { time: "1:00pm", value: "Complete project tasks", location: "Office", attendees: [] },
        { time: "4:00pm", value: "Review code", location: "Office", attendees: ["John", "Jane"] },
        { time: "7:00pm", value: "Exercise", location: "Gym", attendees: [] }
    
    ];

    return(
        <div className="plans-div">
        <div className="plans-header">
                <h2>Plans for the day</h2>
        </div>
        <table>
                <tbody>
                    <tr>
                        <th>Time</th>
                        <th>Activity</th>
                        <th>Details</th>
                    </tr>
                </tbody>
                <tbody>
    {timestamps.map((item, index) => (
        <tr key={index}>
            <td onClick={() => setSelectedItem(item)}>{item.time}</td>
            <td>{item.value}</td>
            <details>
            <summary>Event Details</summary>
                <div className="detail-p">
                <p>Location: {item.location}</p>
                <p>Time: {item.time}</p>
                <p>Attendees: {item.attendees.map(attendee => attendee.name).join(' ')}</p>
                </div>
            </details>
        </tr>
    ))}            
    </tbody>
            </table>
        </div>
    );
}


export default EventDetails;