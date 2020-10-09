import React from 'react';
import {
  TableHead, TableRow, TableCell, Box,
} from '@material-ui/core';
import UserListTableColumns from './UserListTableColumns';

const UserListTableHeader = () => {
  const headerColumns = UserListTableColumns();
  return (
    <TableHead>
      <TableRow>
        {headerColumns.map((col) => (
          <TableCell
            key={col.field}
            align="right"
            style={{ minWidth: col.width }}
          >
            <Box fontWeight="fontWeightBold">
              {col.headerName}
            </Box>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default UserListTableHeader;
