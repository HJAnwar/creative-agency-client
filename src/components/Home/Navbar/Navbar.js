// import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { UserContext } from '../../../App';
// import logoimg from '../../../images/logos/logo.png';

// const Navbar = () => {
//     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
//     const [isDoctor, setIsDoctor] = useState(false);

//     useEffect(() => {
//         fetch('http://localhost:5000/isDoctor', {
//             method: 'POST',
//             headers: { 'content-type': 'application/json' },
//             body: JSON.stringify({ email: loggedInUser.email })
//         })
//             .then(res => res.json())
//             .then(data => setIsDoctor(data));
//     }, [])
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light">

//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                     <li className="nav-item active">
//                         <img src={logoimg} alt=""/>
//                     </li>
//                 </ul>
//                 <ul className="navbar-nav ml-auto">
//                     <li className="nav-item active">
//                         <Link className="nav-link mr-5" to="/">Home</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link mr-5 " to="/dashboard">Our Portfolio</Link>
//                     </li>
                    
//                     <li className="nav-item">
//                         <Link className="nav-link mr-5 " to="#">Our Team</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link mr-5 " to="#">Contact Us</Link>
//                     </li>
//                     {isDoctor && <div>
//                     <li className="nav-item">
//                         <Link className="nav-link mr-5 " to="/dashboard">Admin</Link>
//                     </li>
//                     </div>}
//                     <li className="nav-item">
//                         <Link className="nav-link mr-5" to="/login">Login</Link>
//                     </li>
                    
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;