import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css';


const InfoCard = ({ info }) => {
    return (
        <div className="col-md-2.5  info-card">
                <div className="mr-3 mt-10">
                    <img className="images" src={info.icons} alt=""/>
                    {/* <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon> */}
                </div>
        </div>
    );
};

export default InfoCard;