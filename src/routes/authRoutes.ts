import { Router } from "express";
import { authPage } from "../controllers/authController";

const router = Router();

router.use('/', authPage);

export default router;