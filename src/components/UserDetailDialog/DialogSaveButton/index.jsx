import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const DialogSaveButton = ({ onClick, btnText }) => (
  <Button
    variant="contained"
    color="primary"
    onClick={onClick}
  >
    {btnText}
  </Button>
);

DialogSaveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default DialogSaveButton;
