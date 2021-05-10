import React from 'react'
import GlobalState from './globalstate/GlobalState.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer/Footer.js'
import Navigation from './components/Navbar/Navbar.js'
import HomeScreen from './screens/HomeScreen.js'
import ProductScreen from './screens/ProductScreen.js'
import TermsScreen from './screens/TermsScreen.js'
import CategoryScreen from './screens/CategoryScreen.js'
import MyParallax from './components/Parallax/Parallax.js'
import CartScreen from './screens/CartScreen.js'



const App = () => {

  return (
    <GlobalState>
      <Router>
        <MyParallax></MyParallax>
          <Navigation />
          <Switch>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/kassa' component={CartScreen} />
            <Route path='/product/:id/' component={ProductScreen} exact />
            <Route path='/kopvillkor' component={TermsScreen} />
            <Route path='/:category/:id/' component={CategoryScreen} />
          </Switch>
        <Footer />
      </Router>
    </GlobalState>
  )
}

export default App;
