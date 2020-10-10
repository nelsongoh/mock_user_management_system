const UserDetails = (
  firstName = '',
  lastName = '',
  email = '',
  dob = -1,
  dobStr = '',
) => ({
  firstName,
  lastName,
  email,
  dob,
  dobStr,
});

export default UserDetails;
