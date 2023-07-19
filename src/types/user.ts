export enum EUserRole {
  None,
  Nanny,
  Parent,
}
export interface UserProfile<T = Nanny> {
  phone: string;
  profile: T;
  role: EUserRole;
}

export interface Nanny {
  fullname: string;
  location: string;
  experience: string;
  description: string;
  rate?: number;
  nRated?: number;
  price: number;
}
