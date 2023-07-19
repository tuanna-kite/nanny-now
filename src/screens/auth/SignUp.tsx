import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../navigations/config";
import { useAppDispatch } from "../../store";
import { setUser } from "../../store/user.reducer";
import { Button, Center, Checkbox, Container, HStack, Image, Input, VStack } from "native-base";
import { EUserRole } from "../../types/user";

type Props = {} & NativeStackScreenProps<AuthStackParams, "SignUp">;

const SignUp = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();

  function onLoginBack() {
    navigation.navigate("Login");
  }

  function onSignUp() {
    // dispatch(setUser({ role: EUserRole.Nanny }));
  }

  return (
    <VStack
      backgroundColor="white"
      flex={1}
      safeArea
      paddingX={6}
      paddingTop="32"
      justifyContent="space-between"
      paddingBottom="8"
    >
      <VStack>
        <Center marginBottom="12">
          <Image
            source={require("../../../assets/Logo-Primary.png")}
            alt="Logo"
            size="xl"
            overflow="visible"
          />
        </Center>
        <VStack justifyContent="space-between" space={3} marginBottom="8">
          <Input size="2xl" placeholder="Họ và tên" fontSize={14} height="12" />
          <Input size="2xl" placeholder="Điện thoại" fontSize={14} height="12" />
          <Input size="2xl" placeholder="Mật khẩu" fontSize={14} height="12" />
          <Input size="2xl" placeholder="Nhập lại mật khẩu" fontSize={14} height="12" />
        </VStack>
        <Button onPress={onSignUp}>Đăng ký</Button>
      </VStack>
      <HStack justifyContent="center" alignItems="center">
        <Text>Bạn đã có tài khoản?</Text>
        <Button variant="link" onPress={onLoginBack}>
          Đăng nhập
        </Button>
      </HStack>
    </VStack>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
