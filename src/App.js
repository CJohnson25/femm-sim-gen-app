import './App.css'
import React from 'react'
import ReactGA from 'react-ga';
import { Container, Grid } from '@mui/material'

import { SimInputForm } from './Components/SimInputForm'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import CookieConsentProvider from './Components/CookieConsent'
import { useConsentCookie } from './hooks'

function App() {
  const cookie = useConsentCookie()
  if (cookie) {
    ReactGA.initialize('G-N2DSLKYL0D');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  return (
    <div className="App">
      <Container >
        <Grid container spacing={5} direction="column" alignItems="center">
          <Header />
          <SimInputForm />
          <Footer />
          <CookieConsentProvider/>
        </Grid>
      </Container>
    </div>
  )
}

export default App
