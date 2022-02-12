import './App.css'
import React from 'react'
import { Container, Divider, Grid } from '@mui/material'
import { SimInputForm } from './Components/SimInputForm'
import { Footer } from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <SimInputForm />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default App
