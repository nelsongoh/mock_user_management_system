import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Grid } from '@material-ui/core';
import UserDetails from '../../models/UserDetails';
import { validateUserDetailsObject } from '../../services/validation';
import { TextContent, userDetailsObjectKey } from '../Config/en';
import useStyles from './styles';

const UserDetailForm = ({ providedUserDetails }) => {
  // Determine the user detail state for the form
  const userDetailState = validateUserDetailsObject(providedUserDetails);

  // Set the state of the user's form details
  const [userDetails, setUserDetails] = useState(userDetailState);

  // Setter functions to update the user details
  const handleTextValueChange = (prop) => (event) => {
    setUserDetails({ ...userDetails, [prop]: event.target.value });
  };

  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item>
        <Grid
          container
          direction="row"
          spacing={3}
        >
          <Grid item>
            <TextField
              required
              id="user_first_name"
              label={TextContent.userDetailsForm.firstName}
              variant="outlined"
              color="primary"
              onChange={handleTextValueChange(userDetailsObjectKey.firstName)}
              value={userDetails.firstName}
              className={classes.textFieldHalfWidth}
              size="small"
              // error={}
              // helperText={}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="user_last_name"
              label={TextContent.userDetailsForm.lastName}
              variant="outlined"
              color="primary"
              onChange={handleTextValueChange(userDetailsObjectKey.lastName)}
              value={userDetails.lastName}
              className={classes.textFieldHalfWidth}
              size="small"
              // error={}
              // helperText={}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <TextField
          required
          id="user_email_addr"
          label={TextContent.userDetailsForm.email}
          variant="outlined"
          color="primary"
          onChange={handleTextValueChange(userDetailsObjectKey.email)}
          value={userDetails.email}
          className={classes.textFieldFullWidth}
          size="small"
          // error={}
          // helperText={}
        />
      </Grid>
      <Grid item>
        <TextField
          required
          id="user_dob"
          label={TextContent.userDetailsForm.dob}
          variant="outlined"
          color="primary"
          onChange={handleTextValueChange(userDetailsObjectKey.dob)}
          value={userDetails.dob}
          className={classes.textFieldFullWidth}
          size="small"
          // error={}
          // helperText={}
        />
      </Grid>
    </Grid>
  );
};

UserDetailForm.defaultProps = {
  providedUserDetails: null,
};

UserDetailForm.propTypes = {
  providedUserDetails: PropTypes.instanceOf(UserDetails),
};

export default UserDetailForm;
