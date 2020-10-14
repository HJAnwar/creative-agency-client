import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import logoimg from '../../images/logos/logo.png';

const Navbar = () => {
    const history = useHistory();

    function handleClick() {
        history.push('/dashboard');
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <nav className="navbar navbar-expand-lg navbar-light">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <img src={logoimg} alt=""/>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 " to="/dashboard">Our Portfolio</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link mr-5 " to="#">Our Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 " to="#">Contact Us</Link>
                    </li>
                    {isAdmin && <div>
                    <li className="nav-item">
                        <Link  className="nav-link mr-5 " to="/dashboard">Admin</Link>
                    </li>
                    </div>}
                    <li className="nav-item">
                            <button onClick={handleClick} className="btn btn-dark">Login</button>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;