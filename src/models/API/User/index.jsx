import { JSONObjectKey, userDetailsObjectKey } from '../../../components/Config/en';
import { slashStringToEpochTime } from '../../../services/utils';

const SingleUser = (id, firstName, lastName, email, dob) => ({
  id, firstName, lastName, email, dob,
});

const userDetailsToSingleUserModel = (userDetails) => {
  const outputSingleUserModel = SingleUser();
  Object.keys(JSONObjectKey.user).forEach((key) => {
    if (key === userDetailsObjectKey.dob) {
      outputSingleUserModel[key] = slashStringToEpochTime(userDetails[userDetailsObjectKey.dobStr]);
    } else {
      outputSingleUserModel[key] = userDetails[key];
    }
  });

  return outputSingleUserModel;
};

export default userDetailsToSingleUserModel;
