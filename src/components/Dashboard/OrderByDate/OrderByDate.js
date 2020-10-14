import React from 'react';
import AppointmentDataTable from '../OrderDataTable/OrderDataTable';
import OrderShortList from '../OrderShortList/OrderShortList';
import AppointmentShortList from '../OrderShortList/OrderShortList';
import Review from '../Review/Review';

const OrderByDate = ({ appointments }) => {
    console.log(appointments);
    return (
        <div>
            
            {
                appointments.length ?
                 <OrderShortList appointments={appointments} ></OrderShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
                
            }
        </div>
    );
};

export default OrderByDate;