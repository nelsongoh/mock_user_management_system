import React from 'react';
import PropTypes from 'prop-types';
import { TableBody, TableRow, TableCell } from '@material-ui/core';
import UserListTableColumns from '../UserListTableHeader/UserListTableColumns';
import UserDetails from '../../../models/UserDetails';
import FormError from '../../../models/FormError';
import { epochTimeToString } from '../../../services/utils';

const UserListTableContent = ({
  pageDataArray, openDialog, dialogTypeUpdate, setFormState, setFormErrorState,
}) => {
  const headerColumns = UserListTableColumns();

  // A wrapper function to set the dialog type to 'Update'
  // and open the dialog
  const openUpdateDialog = (row) => {
    setFormState(UserDetails(
      row.firstName, row.lastName, row.email, row.dob, epochTimeToString(row.dob),
    ));
    setFormErrorState(FormError());
    dialogTypeUpdate();
    openDialog();
  };

  return (
    <TableBody>
      {pageDataArray.map((row) => (
        <TableRow onClick={() => { openUpdateDialog(row); }} hover tabIndex={-1} key={row.id}>
          {headerColumns.map((col) => {
            let rowValue = row[col.field];
            if (col.field === 'dob') {
              rowValue = epochTimeToString(rowValue);
            }

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

UserListTableContent.propTypes = {
  pageDataArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
      dob: PropTypes.number,
    }),
  ).isRequired,
  openDialog: PropTypes.func.isRequired,
  dialogTypeUpdate: PropTypes.func.isRequired,
  setFormState: PropTypes.func.isRequired,
  setFormErrorState: PropTypes.func.isRequired,
};

export default UserListTableContent;
