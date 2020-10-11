import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import useStyles from './styles';
import { TextContent } from '../../config/en';

const HeaderBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar color="primary" position="sticky">
        <ToolBar>
          <Typography variant="h3" className={classes.barTxt}>
            {TextContent.headerBar.title}
          </Typography>
        </ToolBar>
      </AppBar>
      <ToolBar />
    </div>
  );
};

export default HeaderBar;
