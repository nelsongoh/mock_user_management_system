import React, { useState } from 'react';
import { Table, TableContainer, TablePagination } from '@material-ui/core';
import UserListTableHeader from './UserListTableHeader';
import UserListTableContent from './UserListTableContent';
import useStyles from './styles';

const UserListTable = () => {
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
        dob: '01/02/03',
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
          <UserListTableContent pageDataArray={rowsToDisplay} />
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

export default UserListTable;
