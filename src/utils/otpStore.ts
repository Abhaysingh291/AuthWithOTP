import { UserDetails } from '../interfaces/authInterfaces';

interface OtpEntry {
  otp: string;
  userDetails: UserDetails;
  expiresAt: Date;
}

class OtpStore {
  private store: Map<string, OtpEntry>;

  constructor() {
    this.store = new Map();
  }
  //add the item in store map
  add(hash: string, otp: string, userDetails: UserDetails, ttlMinutes: number = 5) {
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + ttlMinutes);// Add expiration of otp for the security
    this.store.set(hash, { otp, userDetails, expiresAt }); //Set the otp corresponding to the map
  }
  //get the otpEntry from map with the help of hash
  get(hash: string): OtpEntry | undefined {
    const entry = this.store.get(hash);
    if (entry && entry.expiresAt > new Date()) {// check the otp is expired or not
      return entry;
    }
    this.store.delete(hash); // Remove expired entry
    return undefined;
  }
  //delete from the map
  delete(hash: string) {
    this.store.delete(hash);
  }
}

export const otpStore = new OtpStore();
