import api from '../api';
import {USER_SIGNED_UP} from '../types';

export const userSignedUp = (user) => ({
	type:USER_SIGNED_UP,
	user
});

export const signup = (credentials) =>(dispatch) => (
	api.user.signup(credentials).then(
		(user)=>{
			localStorage.groupzJWT = user.token;
			dispatch(userSignedUp(user));
		}
	)
);
