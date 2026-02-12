import TodoList from './components/TodoList'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
 return (
  <Container maxWidth="lg">
    <AppBar position='static' color='secondary'>
        <Toolbar>
            <Typography variant="h6"> My Todos </Typography>
        </Toolbar>
    </AppBar>
  <TodoList/>
  <CssBaseline/>
  </Container>
 )
}

export default App
