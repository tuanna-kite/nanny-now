import { ADDRESS_TREE } from "../data/address";

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
  district:  keyof typeof ADDRESS_TREE;
  ward: string;
  experience: string;
  description: string;
  rate?: number;
  nRated?: number;
  price: number;
}

export interface Parrent {
  fullname: string;
  age: number;
  avatar: string;
  avatarName: string;
  district:  keyof typeof ADDRESS_TREE;
  ward: string;
  gender: EGender;
}
