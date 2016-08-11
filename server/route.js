import express from 'express';
import accountContoller from './controllers/account'

const router = express.Router();

router.use('/account', accountContoller);

export default router;
