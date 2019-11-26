import React, { Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/styles/makeStyles';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { NetworkErrorBoundary } from 'rest-hooks';

import LeftDrawer from 'components/layout/LeftDrawer';
import Distributors from 'containers/Distributors';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
  },
  content: {
    height: '100%',
    flexGrow: 1,
    overflow: 'auto',
  },
  appContent: {
    height: '100%',
    padding: theme.spacing(1.875),
    backgroundColor: '#FBFBFD',

    '& > .scrollbar-container': {
      padding: theme.spacing(1.875),
    },
  },
}));

const App = (props) => {
  const classes = useStyles();

  return (
    <SnackbarProvider maxSnack={3}>
      <div className={classes.root}>
        <CssBaseline />

        <LeftDrawer {...props} />

        <main className={classes.content}>
          <div className={classes.appContent}>
            <PerfectScrollbar
              options={{
                suppressScrollX: true,
                minScrollbarLength: 50,
              }}
            >
              <Suspense fallback={<CircularProgress />}>
                <NetworkErrorBoundary>
                  <Switch>
                    <Route exact path="/distributors" component={Distributors} props={props} />
                  </Switch>
                </NetworkErrorBoundary>
              </Suspense>
            </PerfectScrollbar>
          </div>
        </main>
      </div>
    </SnackbarProvider>
  );
};

export default withRouter(App);
