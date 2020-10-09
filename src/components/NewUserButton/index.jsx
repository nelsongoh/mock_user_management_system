import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { TextContent } from '../Config/en';

const NewUserButton = ({ openDialog }) => (
  <Button
    variant="contained"
    color="secondary"
    startIcon={<Icon>add</Icon>}
    onClick={openDialog}
  >
    {TextContent.newUserMainPageBtn}
  </Button>
);

NewUserButton.propTypes = {
  openDialog: PropTypes.func.isRequired,
};

export default NewUserButton;
