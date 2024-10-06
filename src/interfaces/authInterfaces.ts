//interface for the all entity response and request
export interface RequestOtpData {
    mobileNumber: string;
    deviceId: string;
  }
  
  export interface RequestOtpResponse {
    hash: string;
  }
  
  export interface ValidateOtpData {
    otp: string;
    hash: string;
  }
  
  export interface UserDetails {
    userId: string;
    mobileNumber: string;
    deviceId: string;
    createdAt: Date;
  }
  