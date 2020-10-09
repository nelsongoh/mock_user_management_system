import { TableColumnHeaders } from '../../../Config/en';
import classes from './styles';

const UserListTableColumns = () => [
  // Column #1 (Left-most column)
  {
    field: 'id',
    type: 'number',
    headerName: TableColumnHeaders.userList.id,
    width: classes.id,
  },
  {
    field: 'firstName',
    type: 'string',
    headerName: TableColumnHeaders.userList.firstName,
    width: classes.firstName,
  },
  {
    field: 'lastName',
    headerName: TableColumnHeaders.userList.lastName,
    width: classes.lastName,
  },
  {
    field: 'email',
    headerName: TableColumnHeaders.userList.email,
    width: classes.email,
  },
  {
    field: 'dob',
    headerName: TableColumnHeaders.userList.dob,
    width: classes.dob,
  },
];

export default UserListTableColumns;
