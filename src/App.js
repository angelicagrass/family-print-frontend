import React, { Component } from 'react'
// import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer.js'
import Navigation from './components/Navbar.js'
import Categories from './components/Categories.js'
import HomeScreen from './screens/HomeScreen.js'
import ProductScreen from './screens/ProductScreen.js'


const App = () => {
  return (
    <Router>
       <Categories />
        <Navigation />
      {/* <HeaderImage /> */}
        <Route path='/' component={HomeScreen} exact />
        <Route path='/product/:id/' component={ProductScreen} exact />
      <Footer />
    </Router>
  );
}

export default App;
