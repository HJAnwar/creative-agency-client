import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import icon1 from '../../../images/logos/uber.png';
import icon2 from '../../../images/logos/slack.png';
import icon3 from '../../../images/logos/netflix.png';
import icon4 from '../../../images/logos/google.png';
import icon5 from '../../../images/logos/airbnb.png';
const infosData = [
    {
        icons: icon1,
       
    },
    {
        icons: icon2,
      
    },
    {
        icons: icon3,
        
    },
    {
         icons: icon4,
        
    },
    {
        icons: icon5,
        
    }
]
const BusinessInfo = () => {
    return (
       
        <section className="d-flex mt-20px justify-content-center">
            <div className="w-10 row">
                {
                    infosData.map(info =>  <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;