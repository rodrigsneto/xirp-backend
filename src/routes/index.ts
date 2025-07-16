import {Router, Request, Response} from 'express';
import authRouter from './authRoutes';

const router = Router();

router.use('/', authRouter)

export default router;