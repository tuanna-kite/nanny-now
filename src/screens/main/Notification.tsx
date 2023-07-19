import { StyleSheet } from "react-native";
import React from "react";
import { Divider, HStack, Heading, Stack, VStack } from "native-base";
import NANNY from "../../data/nanny";
import NotificationList from "../../components/NotificationList/NotificationList";

const Notification = () => {
  return (
    <VStack flex={1} safeAreaTop bg="white" py="4">
      <Heading color="primary.600" textAlign="center" pb="4" fontWeight="semibold">
        Thông báo
      </Heading>

      <Divider />
      <Stack px="4">
        <NotificationList data={NANNY.map((user) => ({ fromUser: user }))} />
      </Stack>
    </VStack>
  );
};

export default Notification;

const styles = StyleSheet.create({});
