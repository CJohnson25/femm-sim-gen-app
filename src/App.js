import './App.css';
import 'fontsource-roboto';
import { Grid, FormControlLabel, Switch } from '@material-ui/core';

function App() {
  return (
    <div className="App">
    <Grid container>
      <Grid item xs={6}>
        <h1>FEMM Simulation Generator</h1>
      </Grid>
      
      <Grid item xs={6}>
        <FormControlLabel
          control={<Switch name="units" />}
          label="Units"
        />
      </Grid>

      <Grid item xs={6}>
        <FormControlLabel
          control={<Switch  name="halbach" />}
          label="Halbach?"
        />
      </Grid>

      <Grid item xs={6}>
        <FormControlLabel
          control={<Switch  name="backIron" />}
          label="Back Iron?"
        />
      </Grid>
    </Grid>

        # Units - Toggle
        # Magnet Width - text
        # Magnet height - text
        # Grade - dropdown
        # halbach? - toggle
      
        # halbach Width - text
        # halbach height - text 
        # halbach Grade - dropdown
        # back iron - toggle
      
        # back iron height - text
        # air gap - text

    </div>
  );
}

export default App;
