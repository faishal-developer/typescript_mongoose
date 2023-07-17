import express from 'express';
import { createUserCon, getAdminUsers, getUserById, getUsers } from './user.controller';

const router = express.Router();

router.get('/',getUsers);
router.post('/',createUserCon);
router.get('/admin',getAdminUsers);
router.get('/:id',getUserById);

export default router;
