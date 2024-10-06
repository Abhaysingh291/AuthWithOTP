# Auth API

## Overview
The Auth API provides a robust and secure way to handle user authentication using One-Time Passwords (OTP). It allows users to request and validate OTPs for secure access to applications.

## Features
- Request OTP for mobile devices
- Validate OTP to authenticate users
- Secure OTP storage with expiration
- Input validation for mobile numbers and device IDs
- Error handling for various scenarios

## Getting Started

### Prerequisites
- Node.js
- Express.js 
- Postman or a similar tool for testing API endpoints

### Installation
1. Clone the repository:
   git clone https://github.com/Abhaysingh291/AuthWithOTP.git
   cd auth-api
   
2. Install dependencies:
   bash
   npm install
   
3. Configure environment variables. Create a .env file in the root directory and add the following:
   PORT=3000
   
4. Start the server:
   npm run dev
   

## API Endpoints

### 1. Request OTP
- URL: http://localhost:3000/requestOtp
- Method: POST
- Request Body:
  json
  {
    "mobileNumber": "string",
    "deviceId": "UUID"
  }
  
- Response:
  json
  {
    "hash": "string"
  }
  
- Success Status Code: 200
- Error Status Codes: 400 - Validation errors

### 2. Validate OTP
- URL: http://localhost:3000/validateOtp
- Method: POST
- Request Body:
  json
  {
    "otp": "string",
    "hash": "string"
  }
  
- Response:
  json
  {
    "userId": "string",
    "mobileNumber": "string",
    "deviceId": "string",
    "createdAt": "Date"
  }
  
- Success Status Code: 200
- Error Status Codes: 400 - Invalid or expired hash, 400 - Invalid OTP

## Error Handling
The API uses centralized error handling middleware to respond to errors in a consistent manner.

## Security
- OTP Expiration: OTPs are stored with an expiration time.
- Input Validation: All input data is validated to prevent malicious data.

## Testing
Test the API using Postman or any other API client.

## License
This project is licensed under the MIT License.
