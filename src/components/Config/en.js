export const TextContent = {
  headerBar: {
    title: 'User Management System',
  },

  newUserMainPageBtn: 'Create New User',

  userDetailsDialog: {
    createUserTitle: 'Create New User',
    createUserBtn: 'Create',
    updateUserTitle: 'Update Existing User',
    updateUserBtn: 'Update',
    cancelBtn: 'Cancel',
    deleteUserBtn: 'Delete',
  },

  userDetailsForm: {
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email address',
    dob: 'Date of Birth',
  },
};

export const TableColumnHeaders = {
  userList: {
    id: 'User ID#',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email address',
    dob: 'Date of birth',
  },
};

export const StateTypes = {
  DIALOG: {
    CREATE: 'create',
    UPDATE: 'update',
  },
};

export const JSONObjectKey = {
  user: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    dob: 'dob',
  },
};

export const userDetailsObjectKey = {
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  dob: 'dob',
  dobStr: 'dobStr',
};

export const formErrorObjectKey = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  dobStr: 'dobStr',
};

export const ErrorText = {
  form: {
    firstName: 'First name must not be empty.',
    lastName: 'Last name must not be empty.',
    email: 'Email must be of valid format.',
    dob: 'The date of birth must be in DD/MM/YYYY format, and cannot be after today\'s date',
  },

  invalidUserDetails: {
    CUST: 'Something has gone wrong with the form details, please contact your administrator and quote ERROR: 101.',
    ADMIN: 'The UserDetails object provided in validateUserForm is invalid, not an instance of UserDetails.',
  },
};

export const Regex = {
  emailValidation: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export const Constants = {
  // Defined as 1875 due as the oldest recorded ever living person was born in 1875
  MIN_DOB: new Date(1875, 0, 1),
};
