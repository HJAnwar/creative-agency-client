import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faStreetView, faHome, faShoppingBasket, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';
import logoimg from '../../../images/logos/logo.png';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-3 py-5 px-4" style={{ height: "100vh" }}>
            <ul className=" ml-2 list-unstyled">
                <li>
                    <img src={logoimg} alt="" />
                </li>
                <li>
                    <Link to="/" >
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/order" >
                        <FontAwesomeIcon icon={faShoppingBasket} /> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="dashboard" >
                        <FontAwesomeIcon icon={faCalendar} /> <span>Service list</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" >
                        <FontAwesomeIcon icon={faStreetView} /> <span>Review</span>
                    </Link>
                </li>
                
                    <li>
                        <Link to="/allPatients" >
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Service List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" >
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addAdmin"  >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctor/setting"  >
                            <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                        </Link>
                    </li>
                
            </ul>
            <div>
                <Link to="/" ><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;