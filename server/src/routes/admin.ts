import express from 'express';
import { allUsers, blockUser, close } from '../controllers/admin';


const router = express.Router();

router.post('/close', close)
router.post('/block', blockUser)
router.post('/allUsers', allUsers)


export default router