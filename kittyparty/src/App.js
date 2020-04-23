import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Registration from './Frontend/Registration';
import Photo from './Frontend/photo';
import Mobile from './Frontend/mobile';
import Otp from './Frontend/Otp';
import Mishra from './Frontend/mishra';
import Authen from './Authen';
import Profile from './Frontend/Profile';
import Profile1 from './Frontend/profile1';


function App() {
  return (

    <Router>
      <Route path="/sign" exact component={Registration} />
      <Route path="/" exact component={Photo} />
      <Route path="/mobile" exact component={Mobile} />
      <Route path="/otp" exact component={Otp} />
      <Route path="/mani" exact component={Mishra} />
      <Route path="/auth" exact component={Authen} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/profile1" exact component={Profile1} />




    </Router>
  );
}

export default App;
