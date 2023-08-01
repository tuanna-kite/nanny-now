export enum EUserRole {
  None,
  Nanny,
  Parent,
}

export enum EGender {
  None = "",
  Male = "M",
  Female = "F",
}

export interface UserProfile<T = Nanny> {
  phone: string;
  password?: string;
  profile: T;
  role: EUserRole;
}

export interface Nanny {
  fullname: string;
  address: string;
  experience: string;
  description: string;
  rate?: number;
  nRated?: number;
  price: number;
}

export interface Parrent {
  fullname: string;
  age: number;
  avatar?: string;
  address: string;
  gender?: EGender;
}
