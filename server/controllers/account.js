import express from 'express';
import * as userModel from '../models/user';

const router = express.Router();

router.get('/login', (req, res) => {
	res.send('Routing Sucess, ' + userModel.selectUserInfo());
});

export default router;
