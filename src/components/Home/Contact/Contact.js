import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
       <section className="contact my-5 py-5">
           <div className="container ">
               
               <div className='row'>
               <div className="col-md-6">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    
                    <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est accusantium quae debitis tenetur laboriosam totam.</h3>
               </div>
               <div className="col-md-6">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-brand"> Submit </button>
                       </div>
                   </form>
               </div>

               </div>
           </div>
       </section>
    );
};

export default Contact;