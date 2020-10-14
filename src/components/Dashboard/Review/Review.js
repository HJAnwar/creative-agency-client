import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {

    // const [info, setInfo] = useState({});
    
    // const handleBlur = e => {
    //     const newInfo = { ...info };
    //     newInfo[e.target.name] = e.target.value;
    //     setInfo(newInfo);
    // }

    
    

    const handleSubmit = () => {

        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        // const formData = new FormData()
        // console.log(info);
        // formData.append('message', info.message);
        // formData.append('name', info.name);
        // formData.append('email', info.email);

        const newEvent = { email,name,message}
        console.log(newEvent);
            
        fetch('http://localhost:5000/AddFeedback', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newEvent)
        })
        .then(res => res.json())
        .then(success => {
            console.log(success);
        })
    }    
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-9 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Feedback</h5>
                <div className="col-md-8">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input  type="text" className="form-control" id='name' name="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Message</label>
                        <textarea  type="text" cols="30" rows="10" id='message' className="form-control" name="message" placeholder="Message" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
               </div>
            </div>
        </section>
    );
};

export default Review;