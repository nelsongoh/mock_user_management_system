import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const DialogCancelButton = ({ onClick, btnText }) => (
  <Button
    variant="outlined"
    color="secondary"
    onClick={onClick}
  >
    {btnText}
  </Button>
);

DialogCancelButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default DialogCancelButton;
