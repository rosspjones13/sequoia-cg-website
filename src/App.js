import React, { Component, Fragment } from 'react';
import ReactGA from 'react-ga';
import './App.css';

import { withRouter, Route, Routes, Redirect, Navigate } from 'react-router-dom'
import WelcomeScreen from './containers/WelcomeScreen/WelcomeScreen'
import ContactScreen from './containers/ContactScreen/ContactScreen'
import Layout from './containers/Layout/Layout'

const trackingId = "UA-158882003-1";
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<WelcomeScreen />}/>
          <Route exact path="/contact" element={<ContactScreen />}/>
          <Route exact path="*" element={<WelcomeScreen />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
