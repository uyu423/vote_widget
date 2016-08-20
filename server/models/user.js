import { execute } from '../config/mysql';
import qsb from 'node-qsb';

export function selectUserAll(req, callback) {
	const qs = new qsb().select('user');	
	execute(qs, (err, res) => {
		err ? callback(err, null) : callback(null, res);
	});
}

export function selectUserByEmail(req, callback) {
	const qs = new qsb().select('user').where('email', '=', req.email);
	execute(qs, (err, res) => {
		err ? callback(err, null) : callback(null, res);
	});
}

export function insertUser(req, callback) {
	const qs = new qsb().insert('user').values(
			['email', 'name'],
			[req.email, req.name]);
	execute(qs, (err, res) => {
		err ? callback(err, null) : callback(null, res);
	});
}

export function selectUserById(req, callback) {
	const qs = new qsb().select('user').where('id', '=', req.id);
	execute(qs, (err, res) => {
		err ? callback(err, null) : callback(null, res);
	});

}

export function updateUserMovieIdById(req, callback) {
	const qs = new qsb().update('user')
		.set('movieId', req.movieId)
		.where('id', '=', req.id);
	qs.build().printString();
	execute(qs, (err, res) => {
		err ? callback(err, null) : callback(null, res);
	});
}
