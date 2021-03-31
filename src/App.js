import React from 'react'
// import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer.js'
import Navigation from './components/Navbar.js'
import Categories from './components/Categories.js'
import HomeScreen from './screens/HomeScreen.js'

const App = () => {
  return (
    
    <Router>
    <Navigation />
      {/* <HeaderImage /> */}
      <Categories />
        <Route path='/' component={HomeScreen} exact />
      <Footer />
    </Router>
  );
}

export default App;
