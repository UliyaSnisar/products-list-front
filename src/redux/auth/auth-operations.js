import axios from 'axios';
import * as authActions from './auth-actions';

axios.defaults.baseURL = 'http://localhost:3001/api/v1';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/users/registration', credentials);

    console.log(response, 'response - register operations');

    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    // console.log(error, 'error - register operations');
    dispatch(authActions.registerError(error.message));
  }
};

export const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());
  // dispatch(authActions.loginError(''));

  try {
    const response = await axios.post('/users/login', credentials);

    token.set(response.data.token);
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    // console.log(error, 'error - logIn operations');
    dispatch(authActions.loginError(error.message));
  }
};

export const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    // console.log(error, 'error - logOut operations');
    dispatch(authActions.logoutError(error.message));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get('/users/current');

    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    // console.log(error, 'error - getCurrentUser operations');
    dispatch(authActions.getCurrentUserError(error.message));
  }
};
