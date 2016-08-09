/* import dependency package */
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';
import session from 'express-session';

import webpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

/* route file import */
import route from './route';

/* const variable define */
const app = express();
const port = 3000;
const devPort = 4000;

/* load .env settings */
dotenv.load({
	path: path.join(__dirname, '../.env')
});

/* middleware */
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(session({
	secret: process.env.SECRET_KEY,
	resave : false,
	saveUninitialized : true
}));

app.use('/api', route);
app.use('/', express.static(path.join(__dirname, '../public')));

/* routing */
app.get('/test', (req, res) => {
	console.log(process.env);
	return res.send('Hello World');
});

/* if `npm run development` */
if(process.env.NODE_ENV == 'development' || process.env.NODE_ENV == undefined) {
	console.log("Server ENV : development");
	const config = require('../webpack.dev.config.js');
	const compiler = webpack(config);
	const devServer = new webpackDevServer(compiler, config.devServer);
	devServer.listen(
			devPort, () => {
				console.log('webpack-dev-server Listening on port : ', + devPort + ", proxy to port " + port);
	});

}
else {
	console.log("Server ENV : production");
}

app.listen(port, () => {
	console.log("Server Listening on Port : " + port);
});
