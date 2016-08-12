import React from 'react';
import ReactDOM from 'react-dom';
import { App, Home, Result } from 'containers';
import { Provider } from 'react-redux';
import * as redux from 'redux';
import rootReducer from './reducers';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import thunk from 'redux-thunk';

//thunk middleware not work
//const store = createStore(rootReducer, applyMiddleware(thunk), window.devToolsExtension && window.devToolsExtension());

//thunk middleware work.. why???
const store = redux.createStore(
	rootReducer,
	redux.compose(
		redux.applyMiddleware(thunk),
		window.devToolsExtension && window.devToolsExtension()
	)
);

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store = {store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}/>
				<Route path="vote_result" component={Result}/>
			</Route>
		</Router>
	</Provider>, rootElement
);
