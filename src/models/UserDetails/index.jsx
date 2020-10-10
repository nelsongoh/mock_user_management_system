const UserDetails = (
  id = -1,
  firstName = '',
  lastName = '',
  email = '',
  dob = -1,
  dobStr = '',
) => ({
  id,
  firstName,
  lastName,
  email,
  dob,
  dobStr,
});

export default UserDetails;
