import React, { useEffect, useState } from 'react';
import OrderDataTable from '../../Dashboard/OrderDataTable/OrderDataTable';
import AppointmentDataTable from '../../Dashboard/OrderDataTable/OrderDataTable';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    return (
        <div className="container-fluid row" >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Orders</h5>
                <OrderDataTable appointments={appointments} />
            </div>
        </div>
    );
};

export default AllPatients;