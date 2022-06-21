import express from 'express';
import authControllers from '../controllers/auth.controllers.js';

const router = express.Router();

router.post('/register', authControllers.register);
router.post('/login', authControllers.login);

export default router;
