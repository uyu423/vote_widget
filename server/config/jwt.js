import jwt from 'jwt-simple';
import dotenv from 'dotenv';
import path from 'path';

export function requireAuth(req, res, next) {
	//console.log('req.headers', req);
	if(req.headers.token) {
		dotenv.load({
			path : path.join(__dirname, '../../.env'),
		});
		const token = req.headers.token;
		const decode = jwt.decode(token, process.env.SECRET_KEY);

		if(new Date(decode.expire) > new Date()) {
			console.log("Decoded Token : ", decode);
			req.headers.parseToken = { id : decode.id };
			next(); return;
		}
		else {
			console.log("Session is expired", decode);
			res.status(401).json({
				success : false,
				message : "Your Session is expired"
			});
		}
	}
	else {
		console.log("Session Token not exist");
		res.status(401).json({
			success : false,
			message : "You Haven't Session Token"
		});
	}
}
