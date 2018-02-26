import api from '../api';
import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../types';

export const userLoggedIn = user => ({
	type:USER_LOGGED_IN,
	user
});

export const userLoggedOut = () => ({
	type:USER_LOGGED_OUT
});


export const login =  credentials => ((dispatch) =>(
		(api.user.login(credentials).then(user => {
			localStorage.groupzJWT = user.token;
			dispatch(userLoggedIn(user))
		}))
	)
);

export const logout =  (history) => ((dispatch) =>{
		localStorage.removeItem('groupzJWT');
		history.push("/");
		dispatch(userLoggedOut());
	}
);

export const confirm = (token) => ((dispatch) => (
	(api.user.confirm(token).then(user=>{
		localStorage.groupzJWT = user.token;
		dispatch(userLoggedIn(user))
	}))
));
