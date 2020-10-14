import React from 'react';
import img from '../../../images/doctor-sm.png'
import { Link } from 'react-router-dom';
const Feedbacks = ({doctor}) => {
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5>{doctor.name}</h5>
                    <p> {doctor.message} </p>
                </div>
            </div>
        </div>
    );
};

export default Feedbacks;