import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const MakeAppointment = () => {
    return (
        
        <section className="carouselArea">
            <h1 className="text-white my-5">Here are some of <span style={{ color: '#7AB259' }}>our works</span></h1>
            <Carousel>

                <div className="carouselSite">
                    <img src={carousel1} />
                    <p className="legend">Mobile App</p>
                </div>
                <div className="carouselSite">
                    <img src={carousel2} />
                    <p className="legend">Web App</p>
                </div>
                <div className="carouselSite">
                    <img src={carousel3} />
                    <p className="legend">Wev Design</p>
                </div>

            </Carousel>
        </section>
    );
};

export default MakeAppointment;