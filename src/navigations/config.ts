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
  FillProfile: {
    phone: string;
    password: string;
  };
  PreAuth: undefined;
  Login: undefined;
  SignUp: undefined;
};

export type RootStackParams = {
  Auth?: undefined;
  TabNav?: undefined;
  NannyDetail: {};
  ManageNanny: undefined;
  Chat: undefined;
  ChangePassword: {};
};
