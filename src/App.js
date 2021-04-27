import './App.css';
import 'fontsource-roboto';
import { FormControlLabel, Switch } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FEMM Simulation Generator</h1>
      </header>

        # Units - Toggle
      <FormControlLabel
        control={<Switch name="units" />}
        label="Units"
      />
        # Magnet Width - text
        # Magnet height - text
        # Grade - dropdown
        # halbach? - toggle
      <FormControlLabel
        control={<Switch  name="halbach" />}
        label="Halbach?"
      />
        # halbach Width - text
        # halbach height - text 
        # halbach Grade - dropdown
        # back iron - toggle
      <FormControlLabel
        control={<Switch  name="backIron" />}
        label="Back Iron?"
      />
        # back iron height - text
        # air gap - text

    </div>
  );
}

export default App;
