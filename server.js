var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var Provider = require('react-redux').Provider;
var webpack = require('webpack');
var config = require('./webpack.config');

var exphbs = require('express-handlebars');

require('babel-core/register');
require('babel-polyfill');

var routes = require('./app/Route');
var configureStore = require('./app/store/configureStore').default;

var app = express();
var compiler = webpack(config);
console.log(compiler);

var hbs = exphbs.create({
	defaultLayout: 'main',
	helpers : {
		ifeq: function(a, b, options) {
			if( a === b) {
				return options.fn(this);
			}
			return options.inverse(this);
		},
		toJSON : function(object) {
			return JSON.stringify(object);
		}
	}
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/bower', express.static(path.join(__dirname, 'bower_components')));

if(app.get('env') === 'development') {
	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath
	}));
	app.use(require('webpack-hot-middleware')(compiler));
}

app.use(function(req, res) {
	var initialState = {
		auth : {
			token : req.cookies.token,
			user: req.user
		},
		messages : {}
	};
	var store = configureStore(initialState);
	console.log(store.getState());

	Router.match({
		routes: routes.default(store),
		location : req.url,
	}, function(err, redirectLocation, renderProps) {
		if(err) {
			res.status(500).send(err,message);
		}
		else if(redirectLocation) {
			res.status(302).redirect(redirectLocation.pathname + redirectLocation.search);
		}
		else if(renderProps) {
			var html = ReactDOM.renderToString(React.createElement(Provider, { store : store },
				React.createElement(Router.RouterContext, renderProps)
			));
			res.render('layouts/main', {
				html: html,
				initialState : store.getState()
			});
		} else {
			res.sendStatus(404);
		}
	});
});


app.listen(app.get('port'), function() {
	console.log('server listen port ' + app.get('port'));
	console.log('application env :  ' + app.get('env'));
});


module.exports = app;
