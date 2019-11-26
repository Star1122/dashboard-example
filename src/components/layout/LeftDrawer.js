/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import StarIcon from '@material-ui/icons/Star';

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    padding: theme.spacing(1.75),
    backgroundColor: theme.palette.background.drawer,
    border: 0,
    whiteSpace: 'nowrap',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflow: 'hidden',
  },
  list: {
    marginTop: theme.spacing(1.25),
    padding: 0,
  },
  link: {
    color: theme.palette.common.white,
    textDecoration: 'none',
  },
  listItem: {
    minHeight: 40,
    marginBottom: theme.spacing(1),
    padding: theme.spacing(0, 1.75),

    '&:hover': {
      backgroundColor: '#257A91',
      borderRadius: theme.spacing(0.5),
    },
  },
  listItemActive: {
    backgroundColor: '#257A91',
    borderRadius: theme.spacing(0.5),
  },
  listItemIcon: {
    marginRight: theme.spacing(1.75),
    fontSize: '1rem',
    color: 'inherit',
  },
  listItemText: {
    margin: 0,
    fontSize: 17,
    lineHeight: '23px',
  },
  divider: {
    margin: theme.spacing(5, -1.75),
    backgroundColor: theme.palette.common.white,
    opacity: 0.5,
  },
}));

function LeftDrawer(props) {
  const classes = useStyles();

  const { location: { pathname } } = props;

  const upperMenu = [
    {
      link: '/',
      label: 'Home',
      icon: (
        <SvgIcon className={classes.listItemIcon} width="16" height="16" viewBox="0 0 16 16">
          <path
            d="M15.581,5.186l-7-5a1,1,0,0,0-1.162,0l-7,5A1,1,0,0,0,1.581,6.814L2,6.515V15a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1V6.515A1.7,1.7,0,0,0,15,7a1,1,0,0,0,.582-1.814ZM12,14H10V11a2,2,0,0,0-4,0v3H4V5.086L8,2.229l4,2.857Z"
            transform="translate(0 0)"
          />
        </SvgIcon>
      ),
    },
    {
      link: '/distributors',
      label: 'Distributors',
      icon: (
        <StarIcon className={classes.listItemIcon} />
      ),
    },
    {
      link: '/sales',
      label: 'Sales Pages',
      icon: (
        <SvgIcon className={classes.listItemIcon} width="11.938" height="15.812" viewBox="0 0 11.938 15.812">
          <path
            d="M692.815-240.991a1.445,1.445,0,0,0-.438,1.062,1.447,1.447,0,0,0,.438,1.063l5.375,5.375a2.783,2.783,0,0,1-2.875-.782l-3.531-3.531a2.822,2.822,0,0,1-.907-2.109,2.925,2.925,0,0,1,.907-2.141l.781-.781a2.893,2.893,0,0,1,2.125-.875,2.9,2.9,0,0,1,2.125.875l3.531,3.531a2.789,2.789,0,0,1,.75,2.906l-5.344-5.375a1.449,1.449,0,0,0-1.062-.437,1.448,1.448,0,0,0-1.063.437Zm.531,8.687a2.792,2.792,0,0,1-.75-2.906l5.344,5.375A1.442,1.442,0,0,0,699-229.4a1.447,1.447,0,0,0,1.063-.437l.812-.781a1.451,1.451,0,0,0,.438-1.063,1.448,1.448,0,0,0-.438-1.062l-5.375-5.375a2.781,2.781,0,0,1,2.875.781l3.532,3.531a2.832,2.832,0,0,1,.906,2.109,2.93,2.93,0,0,1-.906,2.141l-.782.781A2.9,2.9,0,0,1,699-227.9a2.893,2.893,0,0,1-2.125-.875Z"
            transform="translate(-690.877 243.71)"
          />
        </SvgIcon>
      ),
    },
    {
      link: '/products',
      label: 'Products',
      icon: (
        <SvgIcon className={classes.listItemIcon} width="13" height="16" viewBox="0 0 13 16">
          <path
            d="M703.721-209.525a.524.524,0,0,1,.125.36v8.312a.764.764,0,0,1-.312.531l-6.344,6.375a.954.954,0,0,1-.7.282.95.95,0,0,1-.7-.282l-4.657-4.656a.955.955,0,0,1-.281-.7.955.955,0,0,1,.281-.7l.782-.781-.782-.813a.955.955,0,0,1-.281-.7.955.955,0,0,1,.281-.7l6.375-6.375a.788.788,0,0,1,.532-.281h5.343A.44.44,0,0,1,703.721-209.525Zm-.875,8.485V-202.6l-5.656,5.656a.954.954,0,0,1-.7.282.95.95,0,0,1-.7-.282l-3.157-3.156-.781.813,4.625,4.625,6.375-6.344Zm-1-7.141a.518.518,0,0,0,.141.359.458.458,0,0,0,.359.157.458.458,0,0,0,.359-.157.518.518,0,0,0,.141-.359.469.469,0,0,0-.141-.344.487.487,0,0,0-.359-.14.487.487,0,0,0-.359.14A.469.469,0,0,0,701.846-208.181Z"
            transform="translate(-690.846 209.665)"
          />
        </SvgIcon>
      ),
    },
    {
      link: '/customers',
      label: 'Customers',
      icon: (
        <SvgIcon className={classes.listItemIcon} width="16" height="16" viewBox="0 0 16 16">
          <path
            d="M702.548-169.7a.964.964,0,0,1,.3.7v14a.966.966,0,0,1-.3.7.96.96,0,0,1-.7.3h-12a.959.959,0,0,1-.7-.3.962.962,0,0,1-.3-.7v-14a.96.96,0,0,1,.3-.7.959.959,0,0,1,.7-.3h12A.96.96,0,0,1,702.548-169.7Zm-12.7,14.7h2v-14h-2Zm12-14h-9v14h9Zm-2.062,9.812q0,.876-1.235,1.219a4.523,4.523,0,0,1-2.469,0q-1.234-.344-1.234-1.219a3.82,3.82,0,0,1,.719-2.344,2.122,2.122,0,0,1,1.75-.968,2.126,2.126,0,0,1,1.75.968A3.833,3.833,0,0,1,699.783-159.188Zm-2.5-6.969a1.476,1.476,0,0,1,1.078.454,1.476,1.476,0,0,1,.453,1.078,1.423,1.423,0,0,1-.453,1.062,1.5,1.5,0,0,1-1.078.438,1.445,1.445,0,0,1-1.063-.438,1.442,1.442,0,0,1-.437-1.062v-.625l.437-.453A1.423,1.423,0,0,1,697.283-166.157Zm6.562.157h1v-3h-1Zm0,4h1v-3h-1Zm0,4h1v-3h-1Z"
            transform="translate(-688.845 170)"
          />
        </SvgIcon>
      ),
    },
  ];

  const lowerMenu = [
    {
      link: '/settings',
      label: 'Settings',
      icon: (
        <SvgIcon className={classes.listItemIcon} width="16" height="16" viewBox="0 0 16 16">
          <path
            d="M13.3,5.2l1.1-2.1L13,1.7,10.9,2.8a3.582,3.582,0,0,0-1.1-.4L9,0H7L6.2,2.3a4.179,4.179,0,0,0-1,.4L3.1,1.6,1.6,3.1,2.7,5.2a4.179,4.179,0,0,0-.4,1L0,7V9l2.3.8c.1.4.3.7.4,1.1L1.6,13,3,14.4l2.1-1.1a3.582,3.582,0,0,0,1.1.4L7,16H9l.8-2.3c.4-.1.7-.3,1.1-.4L13,14.4,14.4,13l-1.1-2.1a3.582,3.582,0,0,0,.4-1.1L16,9V7l-2.3-.8A4.179,4.179,0,0,0,13.3,5.2ZM8,11A2.946,2.946,0,0,1,5,8,2.946,2.946,0,0,1,8,5a2.946,2.946,0,0,1,3,3A2.946,2.946,0,0,1,8,11Z"
            transform="translate(0 0)"
          />
        </SvgIcon>
      ),
    },
    {
      link: '/support',
      label: 'Support',
      icon: (
        <SvgIcon className={classes.listItemIcon} width="16" height="16" viewBox="0 0 16 16">
          <path
            d="M8,0a8,8,0,1,0,8,8A8.024,8.024,0,0,0,8,0ZM8,10a2,2,0,1,1,2-2A2.006,2.006,0,0,1,8,10ZM8,2a5.834,5.834,0,0,1,2.6.6L9.044,4.156a3.591,3.591,0,0,0-2.089,0L5.4,2.6A5.834,5.834,0,0,1,8,2ZM2,8a5.834,5.834,0,0,1,.6-2.6L4.156,6.956a3.591,3.591,0,0,0,0,2.089L2.6,10.6A5.834,5.834,0,0,1,2,8Zm6,6a5.834,5.834,0,0,1-2.6-.6l1.556-1.556a3.591,3.591,0,0,0,2.089,0L10.6,13.4A5.834,5.834,0,0,1,8,14Zm5.4-3.4L11.844,9.044a3.591,3.591,0,0,0,0-2.089L13.4,5.4a5.933,5.933,0,0,1,0,5.2Z"
            transform="translate(0 0)"
          />
        </SvgIcon>
      ),
    },
  ];

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classnames(classes.drawerPaper),
      }}
      open
    >
      <List className={classes.list}>
        {upperMenu.map((menu) => (
          <Link to={menu.link} className={classes.link} key={menu.label}>
            <ListItem className={classnames(classes.listItem, pathname === menu.link ? classes.listItemActive : '')}>
              {menu.icon}
              <Typography className={classes.listItemText}>{menu.label}</Typography>
            </ListItem>
          </Link>
        ))}

        <Divider className={classes.divider} />

        {lowerMenu.map((menu) => (
          <Link to={menu.link} className={classes.link} key={menu.label}>
            <ListItem className={classnames(classes.listItem, pathname === menu.link ? classes.listItemActive : '')}>
              {menu.icon}
              <Typography className={classes.listItemText}>{menu.label}</Typography>
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
}

LeftDrawer.propTypes = {
  location: PropTypes.object.isRequired,
};

export default LeftDrawer;
