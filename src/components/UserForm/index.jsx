import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Grid } from '@material-ui/core';
import { TextContent, userDetailsObjectKey, formErrorObjectKey } from '../Config/en';
import useStyles from './styles';

const UserForm = ({ formDetails, updateDetails, formErrors }) => {
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
              onChange={updateDetails(userDetailsObjectKey.firstName)}
              value={formDetails[userDetailsObjectKey.firstName]}
              className={classes.textFieldHalfWidth}
              size="small"
              error={formErrors[formErrorObjectKey.firstName].error}
              helperText={formErrors[formErrorObjectKey.firstName].errorText}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="user_last_name"
              label={TextContent.userDetailsForm.lastName}
              variant="outlined"
              color="primary"
              onChange={updateDetails(userDetailsObjectKey.lastName)}
              value={formDetails[userDetailsObjectKey.lastName]}
              className={classes.textFieldHalfWidth}
              size="small"
              error={formErrors[formErrorObjectKey.lastName].error}
              helperText={formErrors[formErrorObjectKey.lastName].errorText}
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
          onChange={updateDetails(userDetailsObjectKey.email)}
          value={formDetails[userDetailsObjectKey.email]}
          className={classes.textFieldFullWidth}
          size="small"
          error={formErrors[formErrorObjectKey.email].error}
          helperText={formErrors[formErrorObjectKey.email].errorText}
        />
      </Grid>
      <Grid item>
        <TextField
          required
          id="user_dob"
          label={TextContent.userDetailsForm.dob}
          variant="outlined"
          color="primary"
          onChange={updateDetails(userDetailsObjectKey.dobStr)}
          value={formDetails[userDetailsObjectKey.dobStr]}
          className={classes.textFieldFullWidth}
          size="small"
          error={formErrors[formErrorObjectKey.dobStr].error}
          helperText={formErrors[formErrorObjectKey.dobStr].errorText}
        />
      </Grid>
    </Grid>
  );
};

UserForm.propTypes = {
  formDetails: PropTypes.shape({
    [userDetailsObjectKey.firstName]: PropTypes.string,
    [userDetailsObjectKey.lastName]: PropTypes.string,
    [userDetailsObjectKey.email]: PropTypes.string,
    [userDetailsObjectKey.dob]: PropTypes.number,
    [userDetailsObjectKey.dobStr]: PropTypes.string,
  }).isRequired,
  updateDetails: PropTypes.func.isRequired,
  formErrors: PropTypes.shape({
    [formErrorObjectKey.firstName]: PropTypes.shape({
      error: PropTypes.bool,
      errorText: PropTypes.string,
    }),
    [formErrorObjectKey.lastName]: PropTypes.shape({
      error: PropTypes.bool,
      errorText: PropTypes.string,
    }),
    [formErrorObjectKey.email]: PropTypes.shape({
      error: PropTypes.bool,
      errorText: PropTypes.string,
    }),
    [formErrorObjectKey.dobStr]: PropTypes.shape({
      error: PropTypes.bool,
      errorText: PropTypes.string,
    }),
  }).isRequired,
};

export default UserForm;
