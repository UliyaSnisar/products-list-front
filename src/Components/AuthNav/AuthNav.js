import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#FFF',
  },
};

const AuthNav = () => (
  <div>
    <NavLink to="/register" style={styles.link}>
      Регистрация
    </NavLink>
    <NavLink to="/login" style={styles.link}>
      Войти
    </NavLink>
  </div>
);

export default AuthNav;
