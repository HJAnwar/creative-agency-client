import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Order = () => {

    const handleSubmit = () => {

        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const Project = document.getElementById('Project').value;
        const detail = document.getElementById('detail').value;
        const price = document.getElementById('price').value;

        const newEvent = { email, name, price, detail, Project}
        console.log(newEvent);
            
        fetch('http://localhost:5000/addOrder', {
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
                <h2 className="text-brand">Order</h2>
                <div className="col-md-8">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input  type="text" className="form-control" id='name' name="name" placeholder="Your Name/ Company Name" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="Project" name="Project" placeholder="Project-Name" />
                    </div>
                    <div className="form-group">
                        <textarea  type="text" cols="30" rows="4" id='detail' className="form-control" name="Project-Detail" placeholder="Project-Detail" />
                    </div>
                    <div className="form-group">
                        <input type="price" className="form-control" id="price" name="price" placeholder="price" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
               </div>
            </div>
        </section>
    );
};

export default Order;