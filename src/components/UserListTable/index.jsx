import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Table, TableContainer, TablePagination } from '@material-ui/core';
import UserListTableHeader from './UserListTableHeader';
import UserListTableContent from './UserListTableContent';
import useStyles from './styles';

const UserListTable = ({
  openDialog, dialogTypeUpdate, setFormState, setFormErrorState,
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

  const mockDataGenerator = (numRows) => {
    const output = [];
    for (let i = 0; i < numRows; i += 1) {
      output.push({
        id: i,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@gmail.com',
        dob: 1595493789,
      });
    }
    return output;
  };

  const mockData = mockDataGenerator(102);

  const rowsToDisplay = mockData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

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
        count={mockData.length}
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
};

export default UserListTable;
