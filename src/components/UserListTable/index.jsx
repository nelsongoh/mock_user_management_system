import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Table, TableContainer, TablePagination } from '@material-ui/core';
import UserListTableHeader from './UserListTableHeader';
import UserListTableContent from './UserListTableContent';
import { JSONObjectKey } from '../../config/en';
import useStyles from './styles';

const UserListTable = ({
  openDialog, dialogTypeUpdate, setFormState, setFormErrorState, userData,
}) => {
  const classes = useStyles();
  const ROWS_PER_PAGE = [10, 25, 50, 100];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const changePageNum = (event, newPageNum) => {
    setPage(newPageNum);
  };

  const changeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rowsToDisplay = userData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div id="user_list_table">
      <TableContainer className={classes.table}>
        <Table stickyHeader>
          <UserListTableHeader />
          <UserListTableContent
            pageDataArray={rowsToDisplay}
            openDialog={openDialog}
            dialogTypeUpdate={dialogTypeUpdate}
            setFormState={setFormState}
            setFormErrorState={setFormErrorState}
          />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={ROWS_PER_PAGE}
        component="div"
        count={userData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={changePageNum}
        onChangeRowsPerPage={changeRowsPerPage}
      />
    </div>
  );
};

UserListTable.propTypes = {
  openDialog: PropTypes.func.isRequired,
  dialogTypeUpdate: PropTypes.func.isRequired,
  setFormState: PropTypes.func.isRequired,
  setFormErrorState: PropTypes.func.isRequired,
  userData: PropTypes.arrayOf(
    PropTypes.shape({
      [JSONObjectKey.user.id]: PropTypes.number,
      [JSONObjectKey.user.firstName]: PropTypes.string,
      [JSONObjectKey.user.lastName]: PropTypes.string,
      [JSONObjectKey.user.email]: PropTypes.string,
      [JSONObjectKey.user.dob]: PropTypes.number,
    }),
  ).isRequired,
};

export default UserListTable;
