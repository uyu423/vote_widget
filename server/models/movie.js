import { execute } from '../config/mysql';
import qsb from 'node-qsb';

export function selectMovies(req, callback) {
	const qs = new qsb().select('movie');
	execute(qs, (err, res) => {
		err ? callback(err, null) : callback(null, res);
	});
}
