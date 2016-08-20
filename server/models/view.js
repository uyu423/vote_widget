import { execute } from '../config/mysql';
import qsb from 'node-qsb'

export function selectVoteResultAll(req, callback) {
	const qs = new qsb().select('view-voteResult');
	execute(qs, (err, res) => {
		err ? callback(err, null) : callback(null, res);
	});
}

export function selectVoteResultTop(req, callback) {
	const qs = new qsb().select('view-voteResult').limit(0, 1);
	execute(qs, (err, res) => {
		err ? callback(err, null) : callback(null, res);
	});
}
