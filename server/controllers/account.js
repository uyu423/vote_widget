import * as userModel from '../models/user';
import jwt from 'jwt-simple';
import dotenv from 'dotenv';
import path from 'path';
import util from 'util';

export function postLogin(req, res) {
	req.assert('email', 'email type is invalid').isEmail();
	req.assert('email', 'email not allow empty').notEmpty();

	const error = req.validationErrors();
	if(error) {
		let parseErr = error.map(function(item, idx) {
			return item.msg;
		});
		res.status(401).json({
			success : false,
			message : "Error : " + parseErr
		});
	}
	else {
		userModel.selectUserByEmail({ email : req.body.email }, (err, rows) => {
			if(err) {
				res.status(500).json({
					success : false,
					message : "Error : UserModel.selectUserByEmail"
				});
			}
			else if(rows.length != 1) {
				res.status(401).json({
					success : false,
					message : "Error : Not Exist Email"
				});
			}
			else {
				dotenv.load({
					path : path.join(__dirname, '../../.env')
				});
				const row = rows[0];
				let expire = new Date();
				expire.setDate((new Date()).getDate() + 1);

				const token = jwt.encode({
					id : row.id,
					expire : expire 
				}, process.env.SECRET_KEY);

				res.status(200).json({
					success : true,
					data : {
						row : row,
						token : token
					}
				});
			}
		});
	}
}

//jwt auth service test function
export function getUserInfo(req, res) {
	req.assert('id', 'user id only integer').isInt();
	req.assert('id', 'user id can not empty').notEmpty();

	if(req.headers.parseToken.id != req.params.id) {
		res.status(401).json({
			success : false,
			message : "Error : Can Not Access Other User Info"
		});
	}

	const error = req.validationErrors();
	if(error) {
		let parseErr = error.map(function(item, idx) {
			return item.msg;
		});
		res.status(401).json({
			success : false,
			message : "Error : " + parseErr 
		});
	}
	else {
		userModel.selectUserById({ id : req.params.id }, (err, rows) => {
			if(err) {
				res.status(500).json({
					success : false,
					message : "Error : UserModel.selectUserById"
				});
			}
			else {
				const row = rows[0];
				res.status(200).json({
					success: true,
					data : {
						row : row
					}
				});
			}
		});
	}
}
