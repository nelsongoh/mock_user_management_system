import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog, DialogTitle, DialogContent, DialogActions, Icon, IconButton,
} from '@material-ui/core';
import useStyles from './styles';
import DialogSaveButton from './DialogSaveButton';
import DialogCancelButton from './DialogCancelButton';
import DialogDeleteButton from './DialogDeleteButton';
import {
  TextContent, StateTypes, userDetailsObjectKey, formErrorObjectKey,
} from '../../config/en';
import UserForm from '../UserForm';
import { validateUserForm, isFormValid } from '../../services/utils';
import { createUser, updateUser, deleteUser } from '../../services/api/user';

const UserDetailDialog = ({
  isOpen, closeDialog, dialogType, initialFormState, setFormState, formErrorState,
  setFormErrorState, getUserData,
}) => {
  const classes = useStyles();

  let saveBtnText = TextContent.userDetailsDialog.createUserBtn;
  let dialogTitle = TextContent.userDetailsDialog.createUserTitle;
  let saveFormFunc = createUser;
  let deleteBtn = null;

  if (dialogType !== StateTypes.DIALOG.CREATE) {
    saveBtnText = TextContent.userDetailsDialog.updateUserBtn;
    dialogTitle = TextContent.userDetailsDialog.updateUserTitle;
    saveFormFunc = updateUser;

    // Wrapper function to delete the user and refresh the data view
    const deleteUserData = async () => {
      await deleteUser(initialFormState[userDetailsObjectKey.id]);
      closeDialog();
      getUserData();
    };

    deleteBtn = (
      <DialogDeleteButton
        onClick={deleteUserData}
        btnText={TextContent.userDetailsDialog.deleteUserBtn}
      />
    );
  }

  // Setter functions to update the user details
  const handleTextValueChange = (prop) => (event) => {
    setFormState({ [prop]: event.target.value });
  };

  // Wrapper function to validate the form details and update errors (if any)
  const saveFormData = async () => {
    try {
      const newErrorState = validateUserForm(initialFormState);
      // If there are no errors, we can save the changes from the data we're making
      // and retrieve an updated list of the changes
      if (isFormValid(newErrorState)) {
        await saveFormFunc(initialFormState);
        closeDialog();
        getUserData();
      } else {
        // Else we just update the error state
        setFormErrorState(newErrorState);
      }
    } catch (e) {
      // Inform the user about an error occurring
      console.log(e);
    }
  };

  return (
    <div id="user_detail_dialog">
      <Dialog open={isOpen}>
        <DialogTitle>
          {dialogTitle}
          <IconButton className={classes.closeBtn} onClick={closeDialog}>
            <Icon>close</Icon>
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <UserForm
            formDetails={initialFormState}
            updateDetails={handleTextValueChange}
            formErrors={formErrorState}
          />
        </DialogContent>
        <DialogActions>
          {deleteBtn}
          <DialogCancelButton
            onClick={closeDialog}
            btnText={TextContent.userDetailsDialog.cancelBtn}
          />
          <DialogSaveButton onClick={saveFormData} btnText={saveBtnText} />
        </DialogActions>
      </Dialog>
    </div>
  );
};

UserDetailDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  dialogType: PropTypes.string.isRequired,
  initialFormState: PropTypes.shape({
    [userDetailsObjectKey.firstName]: PropTypes.string,
    [userDetailsObjectKey.lastName]: PropTypes.string,
    [userDetailsObjectKey.email]: PropTypes.string,
    [userDetailsObjectKey.dob]: PropTypes.number,
    [userDetailsObjectKey.dobStr]: PropTypes.string,
  }).isRequired,
  setFormState: PropTypes.func.isRequired,
  formErrorState: PropTypes.shape({
    [formErrorObjectKey.firstName]: PropTypes.shape({
      error: PropTypes.bool,
      errorText: PropTypes.string,
    }),
    [formErrorObjectKey.lastName]: PropTypes.shape({
      error: PropTypes.bool,
      errorText: PropTypes.string,
    }),
    [formErrorObjectKey.email]: PropTypes.shape({
      error: PropTypes.bool,
      errorText: PropTypes.string,
    }),
    [formErrorObjectKey.dobStr]: PropTypes.shape({
      error: PropTypes.bool,
      errorText: PropTypes.string,
    }),
  }).isRequired,
  setFormErrorState: PropTypes.func.isRequired,
  getUserData: PropTypes.func.isRequired,
};

export default UserDetailDialog;
