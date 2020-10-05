import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext } from 'react';
import { useState } from 'react';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Registration from './Components/RegistrationForm/Registration';
import AdminUpdateVolunteers from './Components/Admin/AdminUpdateVolunteers';
import PrivateRouter from './Components/PrivateRoute/PrivateRoute';
import InvolvedVolunteering from './Components/InvolvedVolunteering/InvolvedVolunteering';
import StoreDataFromAdmin from './Components/Admin/StoreDataFromAdmin';
import NoMatch from './Components/NoMatch/NoMatch';

export const UserContext = createContext()
export const UserVolunteerContext = createContext()

function App() {
  const [taskItems, setTaskItems] = useState([])
  const [loggedInUser, setLoggedInUser] = useState({})
  return (

    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]} className="App">
      <UserVolunteerContext.Provider value = {[taskItems, setTaskItems]}>
      
      <Router>
      <Header></Header>
        <Switch>
          <Route path = '/home'>
            <Home></Home>
          </Route>
          <PrivateRouter path = '/registration/:id'>
            <Registration></Registration>
          </PrivateRouter>
          <Route path = '/admin'>
            <AdminUpdateVolunteers/>
          </Route>
          <Route path = '/allvolunteerinfo'>
          <AdminUpdateVolunteers/>
          </Route>
          <Route path = '/login'>
          <Login/>
          </Route>
          <Route path = '/storeatafromadmin'>
            <StoreDataFromAdmin></StoreDataFromAdmin>
          </Route>
          <Route path = '/home'>
            <Home></Home>
          </Route>
          <Route path = '/involvedvolunteer'>
          <InvolvedVolunteering></InvolvedVolunteering>
          </Route>
          <Route exact path = '/'>
            <Home></Home>
          </Route>
          <Route exact path = '/*'>
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
      
      </UserVolunteerContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
