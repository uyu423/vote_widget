import express from 'express';
import  * as account from './controllers/account';
import { requireAuth } from './config/jwt';

const router = express.Router();

/* account controller */
router.post('/account/login', account.postLogin);
router.get('/account/:id', requireAuth, account.getUserInfo);
router.get('/account', requireAuth, account.getCheckUserToken);

/* movie controller */

export default router;
