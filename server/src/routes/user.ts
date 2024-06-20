import express from 'express';
import { myDiscussion } from '../controllers/user';
import { create, like, reply } from '../controllers/discussion';


const router = express.Router();

router.post('/discussion', myDiscussion)
router.post('/create', create)
router.post('/reply', reply)
router.post('/like', like)


export default router