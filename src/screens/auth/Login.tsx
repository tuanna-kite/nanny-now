import { StyleSheet } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../navigations/config";
import { useAppDispatch, useAppSelector } from "../../store";
import { setUser } from "../../store/user.reducer";
import { Button, Center, Checkbox, HStack, Image, Input, Text, VStack } from "native-base";
import { EUserRole } from "../../types/user";
import { setLoading } from "../../store/loading.reducer";
import LoadingOverlay from "../../components/LoadingOverlay";
import { StatusBar } from "expo-status-bar";

type Props = {} & NativeStackScreenProps<AuthStackParams, "Login">;

const Login = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();

  function onSignUp() {
    navigation.navigate("SignUp");
  }

  function onLoggedIn() {
    dispatch(setLoading());
    dispatch(setUser({ role: EUserRole.Nanny }));
  }

  return (
    <>
      <StatusBar style="dark" />

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
          <Center marginBottom="16">
            <Image
              source={require("../../../assets/Logo-Primary.png")}
              alt="Logo"
              size="xl"
              overflow="visible"
            />
          </Center>
          <VStack justifyContent="space-between" space={3} marginBottom="8">
            <Input size="2xl" placeholder="Điện thoại" fontSize={14} height="12" rounded="lg" />
            <Input size="2xl" placeholder="Mật khẩu" fontSize={14} height="12" rounded="lg" />
            <HStack justifyContent="space-between" alignItems="center">
              <Checkbox value="save">
                <Text color="muted.500">Ghi nhớ đăng nhập</Text>
              </Checkbox>
              <Button variant="link">Quên mật khẩu?</Button>
            </HStack>
          </VStack>
          <Button onPress={onLoggedIn} rounded="lg">
            Đăng nhập
          </Button>
        </VStack>
        <HStack justifyContent="center" alignItems="center">
          <Text>Bạn chưa có tài khoản?</Text>
          <Button variant="link" onPress={onSignUp}>
            Đăng ký
          </Button>
        </HStack>
      </VStack>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({});
