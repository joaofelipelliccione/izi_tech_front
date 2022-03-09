export const SET_USER_LOGOUT = 'SET_USER_LOGOUT';

const setUserLogoutAC = () => ({
  type: SET_USER_LOGOUT,
});

export default setUserLogoutAC;

// REF: Reset da Store --> https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
// Action relacionada à função rootreducer(), presente em [redux]/[reducers]/index.js
