import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

const DialogDeleteButton = ({ onClick, btnText }) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      onClick={onClick}
      className={classes.deleteBtn}
    >
      {btnText}
    </Button>
  );
};

DialogDeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default DialogDeleteButton;
