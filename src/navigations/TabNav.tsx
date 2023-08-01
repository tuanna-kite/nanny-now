import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/main/Home";
import Notification from "../screens/main/Notification";
import Profile from "../screens/main/Profile";
import { useTheme } from "native-base";
import { useSelector } from "react-redux";
import { RootState, useAppSelector } from "../store";
import { EUserRole, UserProfile } from "../types/user";
import {
  ProfileCircle,
  SearchNormal,
  Speedometer,
  Notification as NotificationIcon,
  Messages,
} from "iconsax-react-native";
import Messenger from "../screens/main/Messenger";
// import { BottomTabsParams } from "./types";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  const { colors } = useTheme();
  const user = useAppSelector((state) => state.user.user!);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: colors.muted[500],
        tabBarActiveTintColor: colors.primary[600],
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) =>
            user?.role === EUserRole.Parent ? (
              <SearchNormal size={size} color={color} />
            ) : (
              <Speedometer size={size} color={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Messenger"
        component={Messenger}
        options={{
          tabBarIcon: ({ color, size }) => <Messages size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ color, size }) => <NotificationIcon size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => <ProfileCircle size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
