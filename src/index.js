import React from 'react';
import ReactDOM from 'react-dom';

// containers
import { App, Home, Login, Movie, VoteResult } from 'containers';

// routers
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';

const rootElement = document.getElementById('root');
const store = createStore(
	reducers,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension && window.devToolsExtension()
	)
);

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}/>
				<Route path="home" component={Home}/>
				<Route path="login" component={Login}/>
				<Route path="movie" component={Movie}/>
				<Route path="vote_result" component={VoteResult}/>
			</Route>
		</Router>
	</Provider>, rootElement
);
