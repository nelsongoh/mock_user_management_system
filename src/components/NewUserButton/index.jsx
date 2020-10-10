import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { TextContent } from '../Config/en';
import UserDetails from '../../models/UserDetails';
import FormError from '../../models/FormError';

const NewUserButton = ({
  openDialog, dialogTypeCreate, setFormState, setFormErrorState,
}) => {
  // A wrapper function to set the dialog type
  // (which updates the text of the dialog),
  // reset the initial form state in the dialog, and open it
  const openCreateDialog = () => {
    dialogTypeCreate();
    setFormState(UserDetails());
    setFormErrorState(FormError());
    openDialog();
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      startIcon={<Icon>add</Icon>}
      onClick={openCreateDialog}
    >
      {TextContent.newUserMainPageBtn}
    </Button>
  );
};

NewUserButton.propTypes = {
  openDialog: PropTypes.func.isRequired,
  dialogTypeCreate: PropTypes.func.isRequired,
  setFormState: PropTypes.func.isRequired,
  setFormErrorState: PropTypes.func.isRequired,
};

export default NewUserButton;
