import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import AddDoctor from './components/AddDoctor/AddDoctor';
import Review from './components/Dashboard/Review/Review';
import Admin from './components/Admin/Admin';
import AddService from './components/AddService/AddService';
import Order from './components/Dashboard/Order/Order';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <PrivateRoute path="/allPatients">
            <AllPatients></AllPatients>
          </PrivateRoute>
          <Route path="/addService">
            <AddDoctor></AddDoctor>
          </Route>
          <Route path="/order">
            <Order></Order>
          </Route>
          <Route path="/addAdmin">
            <Admin></Admin>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
