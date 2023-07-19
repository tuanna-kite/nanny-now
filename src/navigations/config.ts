export type BottomTabsParams = {
  Home: undefined;
  Profile: {};
  Notification: {};
};

export type AuthStackParams = {
  PreAuth: undefined;
  Login: undefined;
  SignUp: undefined;
};

export type RootStackParams = {
  Auth?: undefined;
  TabNav?: undefined;
  NannyDetail: {};
  ManageNanny: {};
  Chat: {};
  ChangePassword: {};
};
