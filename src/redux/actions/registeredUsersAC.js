export const REGISTER_NEW_USER = 'REGISTER_NEW_USER';
export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';

const registerNewUserAC = (newUserDataObj) => ({
  type: REGISTER_NEW_USER,
  newUserDataObj,
});

export const updateUserInfoAC = (updatedUserDataObj, userMail) => ({
  type: UPDATE_USER_DATA,
  updatedUserDataObj,
  userMail,
});

export default registerNewUserAC;
