import express from 'express';
import authRoutes from './auth.routes.js';
import usersRoutes from './users.routes.js';
import settingsRoutes from './settings.routes.js';
import trainingsRoutes from './trainings.routes.js';
import excercisesRoutes from './excercises.routes.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', usersRoutes);
router.use('/settings', settingsRoutes);
router.use('/trainings', trainingsRoutes);
router.use('/excercises', excercisesRoutes);

export default router;
