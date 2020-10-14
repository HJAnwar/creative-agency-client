import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import Review from '../Review/Review';
import OrderByDate from '../OrderByDate/OrderByDate';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('http://localhost:5000//appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [selectedDate])

    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-3 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                
                <div className="col-md-9 col-sm-12 col-12">
                    <OrderByDate appointments={appointments}></OrderByDate>
                    
                </div>
            </div>
        </section>
    );
};

export default Dashboard;