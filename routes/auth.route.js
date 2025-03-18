import express from 'express';
import {signup, login, logout, updateProfile, checkAuth, forgetPassword, resetPassword} from '../controllers/auth.controller.js';
import { upload } from '../middleware/upload.middleware.js';
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

router.post("/update-profile", protectRoute, upload.single('profilePic'), updateProfile);

router.post("/forget-password", forgetPassword);
router.post("/reset-password", resetPassword);

router.get("/check", protectRoute, checkAuth);
  
export default router;