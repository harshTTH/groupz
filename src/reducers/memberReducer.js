import {FETCH_USERS, CHANGE_STATUS} from '../types';

export default function(state = {}, action = {}){
  switch(action.type){
    case FETCH_USERS:
      return {users:action.users};
    case CHANGE_STATUS:{
        const us = state.users.findIndex((user)=>user.email === action.email);
        const usersCopy = [...state.users];
        if(us !== -1){
            usersCopy[us].socket[0] += action.status;
        }
        return{...state,users:usersCopy}
    }
    default:
        return state;
  }
}
