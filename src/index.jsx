// React-related modules
import React from 'react';
import ReactDOM from 'react-dom';

// Redux / React-Redux / React Router related modules
import { BrowserRouter } from 'react-router-dom';
// Import the MuiThemeProvider
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './scenes/App';

// Our main app

// Create a MUI theme
const colorTheme = createMuiTheme({
  typography: {
    fontFamily: 'Raleway',
  },
  palette: {
    primary: {
      main: '#0068CE',
    },
    secondary: {
      main: '#00C5CE',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FF9800',
      contrastText: '#FFFFFF',
    },
  },
});

const render = (Component) => {
  ReactDOM.render(
    <MuiThemeProvider theme={colorTheme}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </MuiThemeProvider>,
    document.querySelector('#app'),
  );
};

render(App);
