import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { createStackNavigator } from "@react-navigation/stack";
import TabNav from "./TabNav";
import PopupOverlay from "../components/PopupOverlay";
import { useAppSelector } from "../store";
import { StatusBar } from "expo-status-bar";
import NannyDetail from "../screens/NannyDetail";
import { useTheme } from "native-base";
import ManageNanny from "../screens/ManageNanny";
import { RootStackParams } from "./config";
import Chat from "../screens/Chat";
import ChangePassword from "../screens/ChangePassword";

const Stack = createStackNavigator<RootStackParams>();

const Root = () => {
  const { user } = useAppSelector((state) => state.user);
  const { colors } = useTheme();
  return (
    <>
      <StatusBar style="dark" />
      <PopupOverlay />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: colors.primary[600],
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: "500",
              fontFamily: "NunitoSans_600SemiBold",
            },
            headerBackTitleVisible: false,
            headerLeftContainerStyle: {
              paddingHorizontal: 10,
            },
            headerRightContainerStyle: {
              paddingHorizontal: 10,
            },
          }}
        >
          {!user && (
            <Stack.Screen options={{ headerShown: false }} name="Auth" component={AuthStack} />
          )}
          {user && (
            <Stack.Screen options={{ headerShown: false }} name="TabNav" component={TabNav} />
          )}
          <Stack.Screen name="NannyDetail" component={NannyDetail} />
          <Stack.Screen name="ManageNanny" component={ManageNanny} />
          <Stack.Screen options={{ headerShown: false }} name="Chat" component={Chat} />
          <Stack.Screen
            name="ChangePassword"
            options={{ title: "Đổi mật khẩu", headerTruncatedBackTitle: "Test" }}
            component={ChangePassword}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Root;

const styles = StyleSheet.create({});
