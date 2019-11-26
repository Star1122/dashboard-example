import React from 'react';
import classnames from 'classnames';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useResource } from 'rest-hooks';
import moment from 'moment';
import Gravatar from 'react-gravatar';

import { formatCurrency } from 'utils';
import { DistributorResource } from 'resources';
import { MuiDataTable } from 'components/common';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  content: {
    height: 100,
    border: '1px solid #EAEDF3',
    borderRadius: theme.spacing(0.5),
    boxShadow: '0px 1px 3px #0000000A',

    '& .MuiToolbar-root': {
      display: 'none',

      '&.MuiTablePagination-toolbar': {
        display: 'flex',
      },
    },

    '& .MuiTableCell-root:not(:first-child)': {
      textAlign: 'right',
    },

    '& .MuiTableCell-head': {
      padding: theme.spacing(1.875, 3),
      fontFamily: 'AvenirLTStd-Medium',
      fontSize: 12,
      lineHeight: '18px',
      color: '#9EA0A5',

      '&:not(:first-child) > span': {
        justifyContent: 'flex-end',
      },

      '& svg': {
        width: '1rem',
        height: '1rem',
        marginTop: theme.spacing(0.5),
      },
    },

    '& .MuiTableCell-body': {
      padding: theme.spacing(2, 3),
      color: '#3E3F42',
    },
  },
  userInfo: {
    marginLeft: theme.spacing(2.5),
  },
  image: {
    borderRadius: '50%',
  },
  email: {
    marginTop: theme.spacing(0.5),
    color: '#9EA0A5',
  },
  sales: {
    minWidth: 'unset',
    height: 24,
    padding: theme.spacing(0.375, 1.5),
    backgroundColor: '#F8F8F8',
    border: '1px solid #E2E5ED',
    borderRadius: theme.spacing(0.5),
    fontSize: 12,
    lineHeight: '18px',
    color: '#3E3F42',
    textTransform: 'none',
  },
  status: {
    width: 67,
    height: 24,
    padding: 0,
    backgroundColor: '#F8F8F8',
    border: '1px solid #E2E5ED',
    borderRadius: theme.spacing(0.5),
    fontSize: 12,
    lineHeight: '18px',
    color: '#3E3F42',
    textTransform: 'none',
  },
  active: {
    backgroundColor: '#B0DFE5',
  },
  more: {
    color: '#9EA0A5',
  },
}));

function Distributors() {
  const classes = useStyles();

  const distributors = useResource(DistributorResource.listShape(), {});

  const columns = [
    {
      name: 'firstName',
      label: 'DISTRIBUTOR',
      options: {
        customBodyRender: (firstName, tableMeta) => {
          const { rowIndex } = tableMeta;
          const data = distributors[rowIndex];
          return (
            <Box display="flex" alignItems="center">
              <Gravatar email={data.email} size={38} className={classes.image} />
              <div className={classes.userInfo}>
                <Typography variant="body2" align="left">{`${firstName} ${data.lastName}`}</Typography>
                <Typography variant="caption" className={classes.email}>{data.email}</Typography>
              </div>
            </Box>
          );
        },
      },
    },
    {
      name: 'registered',
      label: 'ACCT CREATED',
      options: {
        customBodyRender: (registered) => `${moment(registered).format('MMM D, YYYY')}`,
      },
    },
    {
      name: 'isActive',
      label: 'ACCT STATUS',
      options: {
        customBodyRender: (isActive) => (
          <Button variant="outlined" className={classnames(classes.status, isActive ? classes.active : '')}>
            {isActive ? 'Active' : 'Inactive'}
          </Button>
        ),
      },
    },
    {
      name: 'sales',
      label: 'SALES PAGES',
      options: {
        customBodyRender: () => (
          <Button variant="outlined" className={classnames(classes.sales)}>
            {Math.round(Math.random() * 10)}
          </Button>
        ),
      },
    },
    {
      name: 'balance',
      label: 'BALANCE AVAIL',
      options: {
        customBodyRender: (balance) => `${formatCurrency(balance)}`,
      },
    },
    {
      name: 'totalCollected',
      label: 'TOTAL COLLECTED',
      options: {
        customBodyRender: (totalCollected) => `${formatCurrency(totalCollected)}`,
      },
      align: 'center',
    },
    {
      name: '',
      label: '',
      options: {
        customBodyRender: () => <MoreHorizIcon className={classes.more} />,
      },
    },
  ];

  return (
    <>
      <Header />

      <Paper className={classes.content}>
        <MuiDataTable
          title="Distributors"
          columns={columns}
          data={distributors}
        />
      </Paper>
    </>
  );
}

export default Distributors;
