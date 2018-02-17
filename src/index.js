import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './rootReducer';

var store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
		    <App/>
		</BrowserRouter>
	</Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
