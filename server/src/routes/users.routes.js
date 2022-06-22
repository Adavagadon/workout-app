import express from 'express';
import multer from 'multer';
import usersControllers from '../controllers/users.controllers.js';

const router = express.Router();
const upload = multer();

router.put('/image', upload.single('image'), usersControllers.updateImage);

router
  .route('/')
  .put(usersControllers.updateUser)
  .delete(usersControllers.deleteUser);

export default router;
