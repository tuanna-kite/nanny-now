import { NavigatorScreenParams } from "@react-navigation/native";
import { EUserRole } from "../types/user";

export type BottomTabsParams = {
  Home: undefined;
  Profile: {};
  Notification: {};
};

export type AuthStackParams = {
  OTPVerification: {
    verificationId: string;
    phone: string;
    password: string;
  };
  EditProfile: {
    phone: string;
    password: string;
    role: EUserRole;
  };
  PreAuth: undefined;
  Login: { role: EUserRole };
  SignUp: { role: EUserRole };
};

export type RootStackParams = {
  Auth?: NavigatorScreenParams<AuthStackParams>;
  TabNav?: undefined;
  NannyDetail: {};
  ManageNanny: undefined;
  Chat: undefined;
  EditProfile: {
    phone: string;
    password: string;
    role: EUserRole;
  };
  ChangePassword: {};
};
