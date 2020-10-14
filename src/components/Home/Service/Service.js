import React from 'react';
import img from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = ({doctor}) => {
    return (
        <div className="col-md-4 mb-5">
            <div className=" card p-3">
                <Link to='/dashboard'>
                    <div className="card-body w-70 text-center">
                                    
                        {
                            doctor.image ? <img className=" mx-3" style={{height: '80px'}} src={`data:image/png;base64,${doctor.image.img}`}/>
                            :
                            <img style={{height: '50px'}} className="img-fluid mb-3 "  src={`http://localhost:5000/${doctor.img}`} alt=""/>
                        }
                            <h5 className="textColor">{doctor.name}</h5>
                            <p className='text-red textColor'>{doctor.description} </p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Service;