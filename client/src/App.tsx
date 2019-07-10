import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Scraping from './components/Scraping';
import Container from '@material-ui/core/Container';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';

/**
 * Few styles
 */
const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    padding: 12,
    color: 'white',
    fontWeight: 900
  }
}));

/**
 * Theming
 */
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#52b744'
    },
    text: {
      primary: '#000000',
    }
  },
});


const App: React.FC = () => {
  const classes = styles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Typography variant="h5" className={classes.title}>
            Emcode Scraper
          </Typography>
        </AppBar>
        <Container>
          <Scraping/>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
