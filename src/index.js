import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import * as History from 'history';
import { CacheProvider } from 'rest-hooks';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './App';
import theme from './theme';
import * as serviceWorker from './serviceWorker';

const history = History.createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <CacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </CacheProvider>
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
