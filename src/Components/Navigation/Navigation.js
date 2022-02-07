import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#FFF',
  },
};

const Navigation = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav>
      <NavLink to="/" style={styles.link}>
        Главная
      </NavLink>
      {isAuthenticated && (
        <NavLink to="/products" style={styles.link}>
          Продукты
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;

// const mapStateToProps = (state) => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(Navigation);
