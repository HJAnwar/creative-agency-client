import { faVestPatches } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Service from '../Service/Service';
const Services = () => {
    const [doctors, setDoctors] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])

    return (
        <section className="doctors mt-5 pt-5">
            <BusinessInfo></BusinessInfo>
            <div className="container pt-5 mt=5">
                <h1 className="text-center    mb-5"> Provide awesome services</h1>
                <div className="row w-70 mt-5">
                    {
                     doctors.map(doctor =><Service key={doctor._id} doctor={doctor} />)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Services;