import { StyleSheet } from "react-native";
import React from "react";
import { Divider, HStack, Heading, Stack, VStack } from "native-base";
import NANNY from "../../data/nanny";
import NotificationList from "../../components/NotificationList/NotificationList";
import { StatusBar } from "expo-status-bar";

const Notification = () => {
  return (
    <>
      <StatusBar style="dark" />
      <VStack flex={1} safeAreaTop bg="white" pt="3">
        <Heading textAlign="center" pb="3" fontSize="xl" fontWeight="semibold">
          Thông báo
        </Heading>

        <Divider />
        <Stack px="4">
          <NotificationList data={NANNY.map((user) => ({ fromUser: user }))} />
        </Stack>
      </VStack>
    </>
  );
};

export default Notification;

const styles = StyleSheet.create({});
