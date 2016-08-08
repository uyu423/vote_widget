import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Root from './components/Root';
import Home from './components/Home';

export default function getRoutes(store) {
	return (
		<Route path="/" component={Root}>
			<IndexRoute component={Home}/>
		</Route>
	);
};
