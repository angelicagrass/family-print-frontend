import React from 'react'
// import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer.js'
import Navigation from './components/Navbar.js'

import HomeScreen from './screens/HomeScreen.js'
import ProductScreen from './screens/ProductScreen.js'
import TermsScreen from './screens/TermsScreen.js'
import CategoryScreen from './screens/CategoryScreen.js'
import MyParallax from './components/Parallax.js'



const App = () => {
  return (
    
    <Router>
      <MyParallax></MyParallax>
      {/* <Header /> */}
        <Navigation />
        <Switch>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id/' component={ProductScreen} exact />
          <Route path='/kopvillkor' component={TermsScreen} />
          <Route path='/:category/:subcategory/' component={CategoryScreen} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
