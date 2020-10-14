import React from 'react';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Contact from '../Contact/Contact';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Feedback></Feedback>
            <Contact></Contact>
           
        </div>
    );
};

export default Home;