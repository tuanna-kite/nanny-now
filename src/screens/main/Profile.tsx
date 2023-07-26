import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";
import { Button, Center, HStack, Heading, StatusBar, Text, VStack, useTheme } from "native-base";
import { removeUser } from "../../store/user.reducer";
import { useAppDispatch, useAppSelector } from "../../store";
import { useNavigation } from "@react-navigation/native";
import Avatar from "../../components/Avatar";
import FormSelect from "../../components/Form/FormSelect";
import FormInput from "../../components/Form/FormInput";
import ButtonInProfile from "../../components/ButtonInProfile";

const Profile = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const navigation = useNavigation<any>();
  const logout = () => {
    dispatch(removeUser());
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <VStack bg="white" safeArea flex={1} justifyContent="space-between" p="6">
          <VStack alignItems="center" space={4}>
            <Avatar source={require("../../../assets/Avatar.png")} rounded size="2xl" />
            <Center>
              <Heading color="primary.600" textAlign="center">
                {user?.profile.fullname}
              </Heading>
              <Text color="muted.500">{user?.phone}</Text>
            </Center>
          </VStack>
          <VStack space="2" mb="8">
            <FormInput label="Họ và tên" value={user?.profile.fullname} />
            <FormInput label="Tuổi" value={String(user?.profile.age)} />
            <FormInput label="Địa chỉ" value={user?.profile.address} />
            <FormSelect
              label="Giới tính"
              items={[
                { id: "male", label: "Nam" },
                { id: "female", label: "Nữ" },
              ]}
            />
          </VStack>
          <VStack space="4">
            <HStack space="2">
              <ButtonInProfile onPress={() => navigation.navigate("ManageNanny")}>
                Quản lý bảo mẫu
              </ButtonInProfile>
              <ButtonInProfile>Quản lý trẻ</ButtonInProfile>
            </HStack>
            <HStack space="2">
              <ButtonInProfile>Yêu thích</ButtonInProfile>
              <ButtonInProfile onPress={() => navigation.navigate("ChangePassword")}>
                Đổi mật khẩu
              </ButtonInProfile>
            </HStack>
          </VStack>
          <Button variant="link" colorScheme="warmGray" onPress={logout} mt="4">
            Đăng xuất
          </Button>
        </VStack>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({});
