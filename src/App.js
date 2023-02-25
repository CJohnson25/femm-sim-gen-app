import './App.css'
import React from 'react'
import ReactGA from 'react-ga'
import { Container, Grid } from '@mui/material'

import { SimInputForm } from './Components/SimInputForm'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import CookieConsentProvider from './Components/CookieConsent'
import { useConsentCookie } from './hooks'
import { GridCol } from './Containers/GridCol'

function App() {
  const cookie = useConsentCookie()
  if (cookie) {
    ReactGA.initialize('G-N2DSLKYL0D')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  return (
    <div className="App">
      <Container maxWidth="lg">
        <GridCol>
          <Header />
          <Grid item>
            <SimInputForm />
          </Grid>
          <Footer />
          <CookieConsentProvider/>
        </GridCol>
      </Container>
    </div>
  )
}

export default App
