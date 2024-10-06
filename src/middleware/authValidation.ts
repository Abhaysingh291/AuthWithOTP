// src/middleware/authValidation.ts

import { body } from 'express-validator';

// validation with rezex and device id

export const requestMobileDeviceValidation = [
  body('mobileNumber')
    .exists().withMessage('mobileNumber is required')
    .bail()
    .isString().withMessage('mobileNumber must be a string')
    .bail()
    .matches(/^[0-9]{10}$/).withMessage('mobileNumber must 10 digits only'),
//   check for 10 digit only include 0 to 9
  body('deviceId')
    .exists().withMessage('deviceId is required')
    .bail()
    .isUUID().withMessage('deviceId must be a valid UUID'),
];
