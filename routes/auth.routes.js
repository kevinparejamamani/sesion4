import _express from 'express';
import { login } from '../controllers/auth.controller.js';
const router = _express.Router();
router.post('/login', login);
export default router;
