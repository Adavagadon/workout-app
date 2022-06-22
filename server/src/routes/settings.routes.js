import express from 'express';
import settingsControllers from '../controllers/settings.controllers.js';

const router = express.Router();

router
  .route('/')
  .put(settingsControllers.updateSettings)
  .delete(settingsControllers.deleteSettings);

export default router;
