import api from '../api';
import {FETCH_USERS, CHANGE_STATUS} from '../types';

const userFetched = (users) => ({
    type:FETCH_USERS,
    users
});

const changedStatus = (email,status) => ({
  type:CHANGE_STATUS,
  email,status
})

export const fetchUsers = (email) => (dispatch) => {
  api.members.fetchUsers(email).then((users)=>dispatch(userFetched(users)))
}

export const changeStatus = (email,status) => (dispatch) => {
  dispatch(changedStatus(email,status))
}
