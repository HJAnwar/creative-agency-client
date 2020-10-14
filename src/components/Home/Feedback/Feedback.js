import React, { useEffect, useState } from 'react';


import Feedbacks from '../Feedbacks/Feedbacks';
const Feedback = () => {
    const [doctors, setDoctors] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/feedbackArea')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])

    return (
        <section className='mt-5 pt-5'>
           
            <div className="text-center mt-10">
                    <h2>Clients Feedback</h2>
            </div>
            <div className="row mt-5">
                    {
                        doctors.map(doctor =><Feedbacks  doctor={doctor} />)
                    }
            </div>
        </section>
    );
};

export default Feedback;