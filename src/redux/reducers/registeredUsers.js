import { REGISTER_NEW_USER, UPDATE_USER_DATA } from '../actions/registeredUsersAC';
import dummyRegisteredUsers from
'../../data/dummyData/registeredUsers/dummyRegisteredUsers';

const INITIAL_STATE = {
  registeredUsers: dummyRegisteredUsers,
};

function registeredUsers(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REGISTER_NEW_USER:
    return {
      registeredUsers: [...state.registeredUsers, action.newUserDataObj],
    };

  case UPDATE_USER_DATA:
    return {
      registeredUsers: [...state.registeredUsers
        .filter((users) => (users.userMail !== action.userMail)),
      action.updatedUserDataObj],
    };

  default:
    return state;
  }
}

export default registeredUsers;
