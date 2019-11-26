/* eslint-disable max-len */
import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  header: {
    height: 74,
    marginBottom: theme.spacing(0.5),
    padding: theme.spacing(0, 3.75),
    backgroundColor: theme.palette.background.default,
    border: '1px solid #EAEDF3',
    borderRadius: theme.spacing(0.5),
    boxShadow: '0 1px 3px #0000000A',
  },
  title: {
    fontSize: 26,
    lineHeight: '36px',
    color: '#414142',
  },
  sub: {
    margin: theme.spacing(0, 0, 0.5, 1),
    color: '#9EA0A5',
  },
  button: {
    height: 38,
    marginLeft: theme.spacing(3),
    padding: theme.spacing(0, 2, 0, 1.5),
    backgroundColor: 'transparent',
    border: '1px solid #D8DCE6',
    borderRadius: theme.spacing(0.5),
    boxShadow: '0 1px 2px #00000014',
  },
  icon: {
    width: 20,
    height: 20,
    fill: '#cecfd2',
  },
  label: {
    marginLeft: theme.spacing(1.5),
    color: '#3E3F42',
    textTransform: 'none',
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.header} display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="flex-end">
        <Typography variant="h5" className={classes.title}>Distributors</Typography>
        <Typography variant="body2" className={classes.sub}>(788)</Typography>
      </Box>

      <Box display="flex" alignItems="center">
        <Button variant="outlined" className={classes.button}>
          <SvgIcon className={classes.icon} width="20" height="20" viewBox="0 0 20 20">
            <path
              d="M1212,109h-2v14h-2v2h2v4h2v-4h2v-2h-2V109m7,0h-2v9h-2v2h2v9h2v-9h2v-2h-2v-9m7,0h-2v4h-2v2h2v14h2V115h2v-2h-2v-4"
              transform="translate(-1208 -109)"
            />
          </SvgIcon>
          <Typography variant="body2" className={classes.label}>Filter</Typography>
        </Button>

        <Button variant="outlined" className={classes.button}>
          <SvgIcon className={classes.icon} width="20" height="20" viewBox="0 0 20 20">
            <path
              d="M-1000,758.222c0,.978-.68,1.778-2.111,1.778h-16.111a1.778,1.778,0,0,1-1.778-1.778v-6.444a1.782,1.782,0,0,1,1.889-1.778h1.118a.994.994,0,0,1,.993.993v.014a.994.994,0,0,1-.993.993h-.014a.994.994,0,0,0-.993.993v4.014a.994.994,0,0,0,.993.993h14.014a.994.994,0,0,0,.993-.993v-4.014a.994.994,0,0,0-.993-.993h-.014a.994.994,0,0,1-.993-.993v-.014a.994.994,0,0,1,.993-.993h1.229a1.778,1.778,0,0,1,1.778,1.778v6.444Zm-5.726-11.549,0,0a.994.994,0,0,0-1.408-.05l-1.021.957a.5.5,0,0,1-.842-.365V741a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1v6.2a.5.5,0,0,1-.845.362l-.974-.929a.993.993,0,0,0-1.41.04h0a.993.993,0,0,0,.043,1.4l2.848,2.689a2,2,0,0,0,2.753-.007l2.816-2.685A1,1,0,0,0-1005.726,746.673Z"
              transform="translate(1020 -740)"
            />
          </SvgIcon>
          <Typography variant="body2" className={classes.label}>Export</Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default Header;
