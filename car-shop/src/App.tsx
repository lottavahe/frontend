
import { Container, Typography } from '@mui/material';
import './App.css'
import CssBaseline from '@mui/material/CssBaseline';
import {AppBar}  from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

import CarList from './components/CarList';

function App() {

  return (
    
    <Container maxWidth="lg">
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>
            Car Shop
          </Typography>
        </Toolbar>
      </AppBar>
      <CarList/>
      <CssBaseline />
    </Container>
    
  )
}

export default App
