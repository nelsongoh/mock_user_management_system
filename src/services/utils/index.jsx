import FormError from '../../models/FormError';
import {
  ErrorText, Regex, formErrorObjectKey, userDetailsObjectKey, Constants,
} from '../../config/en';

/**
 * Converts a date string (in DD/MM/YYYY format) to epoch time
 * @param {string} dateStr The date in DD/MM/YYYY format
 * @returns -1 if the string is invalid, else, the number of seconds since epoch time
 */
export const slashStringToEpochTime = (dateStr) => {
  // We check if the string contains exactly 3 parts after splitting on a slash delimiter
  const delimitedStrArr = dateStr.split('/');

  // If it doesn't, we return -1
  if (delimitedStrArr.length !== 3) {
    return -1;
  }

  // We check if each part of the delimited string is valid
  // Check if the date is a valid number
  const date = Number(delimitedStrArr[0]);
  if (date < 1 || date > 31 || Number.isNaN(date) || !Number.isInteger(date)) {
    return -1;
  }

  const mth = Number(delimitedStrArr[1]);
  if (mth < 1 || mth > 12 || Number.isNaN(mth) || !Number.isInteger(mth)) {
    return -1;
  }

  const yr = Number(delimitedStrArr[2]);
  if (yr < 100
    || Number.isNaN(mth)
    || !Number.isInteger(mth)
  ) {
    return -1;
  }

  return Math.trunc(new Date(yr, mth - 1, date).getTime() / 1000);
};

// Internal implementation of validating a date of birth string
const isDobValid = (dobStr) => {
  const dateObj = slashStringToEpochTime(dobStr);
  // If the date itself is an invalid format
  if (dateObj === -1) {
    return false;
  }

  // If the date is valid, but is beyond today's date
  // or less than our defined minimum date
  if (
    dateObj > Math.trunc(new Date().getTime() / 1000)
    || dateObj < Math.trunc(Constants.MIN_DOB.getTime() / 1000)
  ) {
    return false;
  }

  return true;
};

// Internal implementation of validating an email address
const isEmailValid = (email) => {
  if (email.trim() === '') {
    return false;
  }

  if (email == null) {
    return false;
  }

  if (email === undefined) {
    return false;
  }

  if (email.search(Regex.emailValidation) === -1) {
    return false;
  }

  return true;
};

// Internal implementation of validating a user's last name
const isLastNameValid = (lastName) => {
  if (lastName.trim() === '') {
    return false;
  }

  if (lastName == null) {
    return false;
  }

  if (lastName === undefined) {
    return false;
  }

  return true;
};

// Internal implementation of validating a user's first name
const isFirstNameValid = (firstName) => {
  if (firstName.trim() === '') {
    return false;
  }

  if (firstName == null) {
    return false;
  }

  if (firstName === undefined) {
    return false;
  }

  return true;
};

/**
 * Performs a frontend validity check on the form with the user details
 * and returns an object with the error state and text values (if any)
 * @param {*} userDetails The UserDetail object values to check
 * @returns The FormError() object with the associated errors and text
 */
export const validateUserForm = (userDetails) => {
  const formErrorState = new FormError();

  if (!isFirstNameValid(userDetails[userDetailsObjectKey.firstName])) {
    formErrorState[formErrorObjectKey.firstName].error = true;
    formErrorState[formErrorObjectKey.firstName].errorText = ErrorText.form.firstName;
  }

  if (!isLastNameValid(userDetails[userDetailsObjectKey.lastName])) {
    formErrorState[formErrorObjectKey.lastName].error = true;
    formErrorState[formErrorObjectKey.lastName].errorText = ErrorText.form.lastName;
  }

  if (!isEmailValid(userDetails[userDetailsObjectKey.email])) {
    formErrorState[formErrorObjectKey.email].error = true;
    formErrorState[formErrorObjectKey.email].errorText = ErrorText.form.email;
  }

  if (!isDobValid(userDetails[userDetailsObjectKey.dobStr])) {
    formErrorState[formErrorObjectKey.dobStr].error = true;
    formErrorState[formErrorObjectKey.dobStr].errorText = ErrorText.form.dob;
  }

  return formErrorState;
};

/**
 * Converts the number of seconds since epoch time, to a Date object
 * @param {number} numSeconds The number of seconds elapsed since epoch time
 */
export const epochTimeToString = (numSeconds) => {
  if (!Number.isInteger(numSeconds)) {
    return '';
  }
  const dateObj = new Date(numSeconds * 1000);
  return (`${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`);
};

/**
 * Checks if the FormError() object is valid, i.e. If it is error-free or not
 * @param {FormError} formError a FormError() object
 * @returns True if the form is error-free, false otherwise.
 */
export const isFormValid = (formError) => {
  if (formError[formErrorObjectKey.firstName].error !== false) {
    return false;
  }

  if (formError[formErrorObjectKey.lastName].error !== false) {
    return false;
  }

  if (formError[formErrorObjectKey.email].error !== false) {
    return false;
  }

  if (formError[formErrorObjectKey.dobStr].error !== false) {
    return false;
  }

  return true;
};
