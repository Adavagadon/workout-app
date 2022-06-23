import express from 'express';
import excercisesControllers from '../controllers/excercises.controllers.js';

const router = express.Router();

router
  .route('/')
  .get(excercisesControllers.getExcercises)
  .post(excercisesControllers.createExcercise)
  .put(excercisesControllers.updateExcercise)
  .delete(excercisesControllers.deleteExcercise);

export default router;
