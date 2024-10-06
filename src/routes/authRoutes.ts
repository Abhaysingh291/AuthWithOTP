// src/routes/authRoutes.ts

import { Router } from 'express';
import { requestOtp, validateOtp } from '../controllers/authController';
import { requestMobileDeviceValidation } from '../middleware/authValidation';

const router = Router();
// Routes for requestOTP with Deviceid and mobile validation with middleware
router.post('/requestOtp', requestMobileDeviceValidation, requestOtp);

// Routes for validateOtp
router.post('/validateOtp', validateOtp);

export default router;
