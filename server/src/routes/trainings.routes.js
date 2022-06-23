import express from 'express';
import trainingsControllers from '../controllers/trainings.controllers.js';

const router = express.Router();

router.get('/:id', trainingsControllers.getTrainings);

router
  .route('/')
  .post(trainingsControllers.createTraining)
  .put(trainingsControllers.updateTraining)
  .delete(trainingsControllers.deleteTraining);

export default router;
