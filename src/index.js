import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import voteApp from './reducers';

const store = createStore(voteApp, window.devToolsExtension && window.devToolsExtension());

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store = {store}>
		<App /> 
	</Provider>,
	rootElement
);
