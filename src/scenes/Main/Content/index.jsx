import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import UserListTable from '../../../components/UserListTable';
import NewUserButton from '../../../components/NewUserButton';
import UserDetailDialog from '../../../components/UserDetailDialog';
import { StateTypes } from '../../../config/en';
import UserDetails from '../../../models/UserDetails';
import FormError from '../../../models/FormError';
import { retrieveUsers } from '../../../services/api/user';

const Content = () => {
  // The state of the form in the dialog
  const [form, setForm] = useState(UserDetails());
  const handleFormUpdate = (newFormState) => {
    setForm({ ...form, ...newFormState });
  };

  // The open / close state for the dialog
  const [isDialogOpen, setDialogOpen] = useState(false);
  const handleOpen = () => setDialogOpen(true);
  const handleClose = () => setDialogOpen(false);

  // The dialog type (whether create or update) state for the dialog
  const [dialogType, setDialogType] = useState(StateTypes.DIALOG.CREATE);
  const handleDialogTypeCreate = () => setDialogType(StateTypes.DIALOG.CREATE);
  const handleDialogTypeUpdate = () => setDialogType(StateTypes.DIALOG.UPDATE);

  // The state of the form error in the dialog
  const [formErrors, setFormError] = useState(FormError());
  const handleFormErrorChange = (updatedFormError) => {
    setFormError({ ...formErrors, ...updatedFormError });
  };

  // We need to maintain a state for the data retrieved
  const [userData, setUserData] = useState([]);

  const getLatestUserData = async () => {
    const users = await retrieveUsers();
    setUserData(users);
  };

  useEffect(() => {
    getLatestUserData();
  }, []);

  return (
    <div>
      <UserDetailDialog
        isOpen={isDialogOpen}
        closeDialog={handleClose}
        dialogType={dialogType}
        initialFormState={form}
        setFormState={handleFormUpdate}
        formErrorState={formErrors}
        setFormErrorState={handleFormErrorChange}
        getUserData={getLatestUserData}
      />
      <Grid
        container
        justify="center"
      >
        <Grid item lg={10}>
          <NewUserButton
            openDialog={handleOpen}
            dialogTypeCreate={handleDialogTypeCreate}
            setFormState={handleFormUpdate}
            setFormErrorState={handleFormErrorChange}
          />
        </Grid>
        <Grid item lg={10}>
          <UserListTable
            openDialog={handleOpen}
            dialogTypeUpdate={handleDialogTypeUpdate}
            setFormState={handleFormUpdate}
            setFormErrorState={handleFormErrorChange}
            userData={userData}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Content;
