import React, { Component } from 'react'
// import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer.js'
import Navigation from './components/Navbar.js'
import Header from './components/Header.js'
import HomeScreen from './screens/HomeScreen.js'
import ProductScreen from './screens/ProductScreen.js'
import TermsScreen from './screens/TermsScreen.js'


const App = () => {
  return (
    <Router>
      <Header />
        <Navigation />
        <Route path='/' component={HomeScreen} exact />
        <Route path='/product/:id/' component={ProductScreen} exact />
        <Route path='/kopvillkor' component={TermsScreen} />
      <Footer />
    </Router>
  );
}

export default App;
