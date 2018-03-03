import {combineReducers} from 'redux';
import user from './reducers/user';
import members from './reducers/memberReducer';

export default combineReducers({
	user,
	members
});
