import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import UserListTable from '../../../components/UserListTable';
import NewUserButton from '../../../components/NewUserButton';

const Content = ({ openDialog }) => (
  <Grid
    container
    justify="center"
  >
    <Grid item lg={10}>
      <NewUserButton openDialog={openDialog} />
    </Grid>
    <Grid item lg={10}>
      <UserListTable />
    </Grid>
  </Grid>
);

Content.propTypes = {
  openDialog: PropTypes.func.isRequired,
};

export default Content;
