import express from 'express';
import settingsControllers from '../controllers/settings.controllers.js';

const router = express.Router();

router.put('/', settingsControllers.updateSettings);

export default router;
