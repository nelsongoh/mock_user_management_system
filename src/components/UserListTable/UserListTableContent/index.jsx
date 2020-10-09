import React from 'react';
import PropTypes from 'prop-types';
import { TableBody, TableRow, TableCell } from '@material-ui/core';
import UserListTableColumns from '../UserListTableHeader/UserListTableColumns';

const UserListTableContent = ({ pageDataArray }) => {
  const headerColumns = UserListTableColumns();
  return (
    <TableBody>
      {pageDataArray.map((row) => (
        <TableRow hover tabIndex={-1} key={row.id}>
          {headerColumns.map((col) => {
            const rowValue = row[col.field];
            return (
              <TableCell key={col.field} align="right">
                {rowValue}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </TableBody>

  );
};

UserListTableContent.defaultProps = {
  pageDataArray: [],
};

UserListTableContent.propTypes = {
  pageDataArray: PropTypes.arrayOf(PropTypes.object),
};

export default UserListTableContent;
