import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import decode from 'jwt-decode';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import registerServiceWorker from './registerServiceWorker';
import {userLoggedIn} from './actions/auth'
import './index.css';
import App from './App';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
if(localStorage.groupzJWT){
	const payload = decode(localStorage.groupzJWT);
	store.dispatch(userLoggedIn({
		name:payload.name,
		email:payload.email,
		confirmed:payload.confirmed,
		token:localStorage.groupzJWT
	}));
}

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
		    <App/>
		</BrowserRouter>
	</Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
