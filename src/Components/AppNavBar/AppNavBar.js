import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { authSelectors } from '../../redux/auth';
import { makeStyles } from '@material-ui/core/styles';
import MaterialAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: 'rgb(116, 126, 191)',
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  const classes = useStyles();

  return (
    <MaterialAppBar position="static">
      <Toolbar className={classes.appBar}>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </MaterialAppBar>
  );
}
