import express from 'express';
import  * as account from './controllers/account';
import { requireAuth } from './config/jwt';

import * as vote from './controllers/vote';

const router = express.Router();

/* account controller */
router.post('/account/login', account.postLogin);
router.get('/account/:id', requireAuth, account.getUserInfo);

/* movie controller */


/* vote controller */
router.put('/vote/:userId', requireAuth, vote.putUserMovieId);
router.get('/vote', vote.getVoteResult);
router.get('/vote/top', vote.getVoteResultTop);

export default router;
