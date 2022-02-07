import { Component, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';
import { authOperations } from './redux/auth';
import PrivateOutlet from './Components/PrivateRoute';
import PublicOutlet from './Components/PublicRoute';

import AppNavBar from './Components/AppNavBar';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.scss';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container fixed>
        <AppNavBar />

        <Suspense fallback={<CircularProgress className="progress" />}>
          <Routes>
            <Route path="/products" element={<PrivateOutlet />}>
              <Route path="/products" element={<ProductsPage />} />
            </Route>

            <Route ath="/public-outlet" element={<PublicOutlet />}>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/register"
                restricted
                Navigate="/login"
                element={<RegistrationPage />}
              />
              <Route
                path="/login"
                restricted
                Navigate="/products"
                element={<LoginPage />}
              />
            </Route>
          </Routes>
        </Suspense>
      </Container>
      // </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
