import './App.css'
import React from 'react'
import { Container, Grid } from '@mui/material'

import { SimInputForm } from './Components/SimInputForm'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'

function App() {
  return (
    <div className="App">
      <Container >
        <Grid container spacing={5} direction="column" alignItems="center">
          <Header />
          <SimInputForm />
          <Footer />
        </Grid>
      </Container>
    </div>
  )
}

export default App
