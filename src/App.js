import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './pages/Create';
import Notes from './pages/Notes';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from './components/Layout';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f9f9f9',
    },
    secondary: {
      main: '#14048c'
    }
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
});

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
              <Notes />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
