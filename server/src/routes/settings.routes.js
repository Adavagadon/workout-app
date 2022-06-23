import express from 'express';
import settingsControllers from '../controllers/settings.controllers.js';

const router = express.Router();

router
  .route('/')
  .get(settingsControllers.getSettings)
  .put(settingsControllers.updateSettings);

export default router;
