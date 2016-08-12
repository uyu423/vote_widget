/* import dependency package */
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';
import expressValidator from 'express-validator';

import webpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

/* route file import */
import route from './route';

/* const variable define */
const app = express();

/* load .env settings */
dotenv.load({
	path: path.join(__dirname, '../.env')
});

/* middleware */
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.use('/api', route);
app.use('/', express.static(path.join(__dirname, '../public')));

/* routing */
app.get('/test', (req, res) => {
	return res.send('Hello World');
});

app.listen(process.env.PORT, () => {
	console.log("Server Listening on Port : " + process.env.PORT);
});

/* if `npm run development` */
if(process.env.NODE_ENV == 'development' || process.env.NODE_ENV == undefined) {
	console.log("Server ENV : development");
	const config = require('../webpack.dev.config.js');
	const compiler = webpack(config);
	const devServer = new webpackDevServer(compiler, config.devServer);
	devServer.listen(
			process.env.DEV_PORT, () => {
				console.log('webpack-dev-server Listening on port : ', + process.env.DEV_PORT + ", proxy to port " + process.env.PORT);
	});

}

