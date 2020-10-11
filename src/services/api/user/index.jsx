import axios from 'axios';
import routes from '../routes';
import UserDetailsToSingleUserModel from '../../../models/API/User';

export const retrieveUsers = async () => {
  const resp = await axios.get(routes.users.retrieve)
    .catch((error) => {
      // We just print the error out now for simplicity
      // otherwise, we will attempt a retry mechanism
      // and display an error to the user if the retry mechanism fails
      console.log(error);
    });

  const users = resp.data.allUsers;

  return users;
};

export const createUser = async (userDetails) => {
  const detailsToPost = UserDetailsToSingleUserModel(userDetails);
  await axios.post(routes.users.create, { userDetails: detailsToPost })
    .catch((error) => {
      // We just print the error out now for simplicity
      // otherwise, we will attempt a retry mechanism (where applicable,
      // based on the HTTP error response)
      // and display an error to the user if the retry mechanism fails
      // In this case, if no error is received, e.g. HTTP 201
      // then we assume the user was successfully created
      console.log(error);
    });
};

export const updateUser = async (userDetails) => {
  const detailsToUpdate = UserDetailsToSingleUserModel(userDetails);

  await axios.put(routes.users.update, { userDetails: detailsToUpdate })
    .catch((error) => {
      // We just print the error out now for simplicity
      // otherwise we will attempt a retry mechanism (where applicable,
      // based on the HTTP error response)
      // and display an error to the user if the retry mechanism fails
      // In this case, if no error is received, e.g. HTTP 204
      // then we assume the user was successfully updated
      console.log(error);
    });
};

export const deleteUser = async (userId) => {
  // NOTE TO SELF: Specifically for DELETE with request bodies, the 'data' keyword needs
  // to be there
  await axios.delete(routes.users.delete + userId)
    .catch((error) => {
      // We just print the error out now for simplicity
      // otherwise we will attempt a retry mechanism (where applicable,
      // based on the HTTP error response)
      // and display an error to the user if the retry mechanism fails
      // In this case, if no error is received, e.g. HTTP 204
      // then we assume the user was successfully deleted
      console.log(error);
    });
};
