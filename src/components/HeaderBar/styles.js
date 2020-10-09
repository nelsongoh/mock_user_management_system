import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  bar: {
    margin: '0px',
    height: '150px',
  },

  barTxt: {
    position: 'relative',
    flexGrow: 1,
    color: '#FFFFFF',
    verticalAlign: 'middle',
    textAlign: 'center',
    lineHeight: '150px',
  },
}));

export default useStyles;
