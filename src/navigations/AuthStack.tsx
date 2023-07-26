import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import { AuthStackParams } from "./config";
import PreAuth from "../screens/auth/PreAuth";
import OTPVerification from "../screens/auth/OTPVerification";
import FillProfile from "../screens/auth/FillProfile";

const Stack = createNativeStackNavigator<AuthStackParams>();

const AuthStack = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PreAuth" component={PreAuth} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
        <Stack.Screen
          name="FillProfile"
          component={FillProfile}
          options={{ headerShown: true, title: "Thiết lập tài khoản" }}
        />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
