import React, { useState } from 'react';
import HeaderBar from '../../components/HeaderBar';
import UserDetailDialog from '../../components/UserDetailDialog';
import Content from './Content';
import { StateTypes } from '../../components/Config/en';

const MainPage = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpen = () => setDialogOpen(true);
  const handleClose = () => setDialogOpen(false);

  return (
    <div id="main_page">
      <HeaderBar />
      <Content openDialog={handleOpen} />
      <UserDetailDialog
        isOpen={isDialogOpen}
        closeDialog={handleClose}
        dialogType={StateTypes.DIALOG.CREATE}
      />
    </div>
  );
};

export default MainPage;
