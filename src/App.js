import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Här är mitt projekt</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
