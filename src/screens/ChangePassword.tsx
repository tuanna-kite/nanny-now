import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, FormControl, Input, Stack, VStack, WarningOutlineIcon } from "native-base";

const ChangePassword = () => {
  return (
    <VStack flex={1} bg="white" safeAreaBottom px="5">
      <VStack flex={1} justifyContent="center" space="3">
        <FormControl>
          <Stack mx="4">
            <FormControl.Label>Mật khẩu hiện tại</FormControl.Label>
            <Input
              type="password"
              variant="outline"
              placeholder="Mật khẩu hiện tại"
              h="12"
              fontSize="md"
            />
          </Stack>
        </FormControl>
        <FormControl>
          <Stack mx="4">
            <FormControl.Label>Mât khẩu mới</FormControl.Label>
            <Input
              type="password"
              variant="outline"
              placeholder="Mât khẩu mới"
              h="12"
              fontSize="md"
            />
          </Stack>
        </FormControl>
        <FormControl>
          <Stack mx="4">
            <FormControl.Label>Nhập lại mật khẩu</FormControl.Label>
            <Input
              variant="outline"
              placeholder="Nhập lại mật khẩu"
              h="12"
              fontSize="md"
              secureTextEntry
            />
          </Stack>
        </FormControl>
      </VStack>
      <Stack py="4">
        <Button rounded="lg" size="lg">
          Cập nhật mật khẩu
        </Button>
      </Stack>
    </VStack>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
