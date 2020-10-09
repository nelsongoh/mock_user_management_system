import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog, DialogTitle, DialogContent, DialogActions, Icon, IconButton,
} from '@material-ui/core';
import useStyles from './styles';
import DialogSaveButton from './DialogSaveButton';
import DialogCancelButton from './DialogCancelButton';
import { TextContent, StateTypes } from '../Config/en';
import UserForm from '../UserForm';

const UserDetailDialog = ({ isOpen, closeDialog, dialogType }) => {
  const classes = useStyles();

  let saveBtnText = TextContent.userDetailsDialog.createUserBtn;
  let dialogTitle = TextContent.userDetailsDialog.createUserTitle;

  if (dialogType !== StateTypes.DIALOG.CREATE) {
    saveBtnText = TextContent.userDetailsDialog.updateUserBtn;
    dialogTitle = TextContent.userDetailsDialog.updateUserTitle;
  }

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
          <UserForm />
        </DialogContent>
        <DialogActions>
          <DialogCancelButton
            onClick={closeDialog}
            btnText={TextContent.userDetailsDialog.cancelBtn}
          />
          <DialogSaveButton onClick={closeDialog} btnText={saveBtnText} />
        </DialogActions>
      </Dialog>
    </div>
  );
};

UserDetailDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  dialogType: PropTypes.string.isRequired,
};

export default UserDetailDialog;
