import './App.css';
import 'fontsource-roboto';
import React from 'react';
import { Container, Divider } from '@material-ui/core';
import { SimInputForm } from './Components/SimInputForm'
import { Footer } from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <SimInputForm />
      </Container>
      <Divider style={{ marginTop: 40 }} />
      <Footer />
    </div>
  );
}

export default App;
