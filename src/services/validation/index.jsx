import UserDetails from '../../models/UserDetails';

/**
 * Checks if provided argument is an instance of the UserDetails object
 * If it is, return the original argument. Otherwise, returns an instance
 * of the UserDetails object
 * @param {*} userDetails Argument to check if instance of UserDetails object
 */
export const validateUserDetailsObject = (userDetails) => {
  if (userDetails instanceof UserDetails) {
    return userDetails;
  }

  return new UserDetails();
};

export const validateUserForm = () => {

};
