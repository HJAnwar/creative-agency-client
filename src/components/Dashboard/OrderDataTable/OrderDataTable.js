import React from 'react';

const OrderDataTable = ({appointments}) => {
    return (
        <table className="table table-borderless">
            <thead className='col-10'>
                <tr>
                   
                    <th className="text-secondary " scope="col">Name</th>
                    <th className="text-secondary " scope="col">Email ID</th>
                    <th className="text-secondary " scope="col">Service</th>
                    <th className="text-secondary " scope="col">project detail</th>
                    <th className="text-secondary " scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                  appointments.map((appointment, index) => 
                        
                    <tr>
                        
                        <td>{appointment.name}</td>
                        <td>{appointment.email}</td>
                        <td>{appointment.Project}</td>
                        <td>{appointment.detail}</td>
                        <select className="form-control">
                                <option value="Male">On going</option>
                                <option value="Female">Done</option>
                                <option value="Not set">Pending</option>
                        </select>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default OrderDataTable;