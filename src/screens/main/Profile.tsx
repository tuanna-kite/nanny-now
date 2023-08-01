import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { Button, HStack, Heading, Text, VStack } from "native-base";
import { removeUser } from "../../store/user.reducer";
import { useAppDispatch, useAppSelector } from "../../store";
import { useNavigation } from "@react-navigation/native";
import Avatar from "../../components/Avatar";
import FormInput from "../../components/Form/FormInput";
import ButtonInProfile from "../../components/ButtonInProfile";
import GenderSelect from "../../components/Form/GenderSelect";
import { removeLoading, setLoading } from "../../store/loading.reducer";

const Profile = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const navigation = useNavigation<any>();

  const logout = () => {
    dispatch(removeUser());
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <VStack bg="white" flex={1}>
          <VStack alignItems="center" space={4} bg="primary.600" safeAreaTop>
            <Avatar
              source={{ uri: user?.profile.avatar }}
              _stack={{
                style: {
                  borderWidth: 8,
                  borderColor: "white",
                  marginBottom: -50,
                },
              }}
              rounded
              size="2xl"
              onLoadStart={() => dispatch(setLoading())}
              onLoadEnd={() => dispatch(removeLoading())}
            />
          </VStack>
          <VStack alignItems="center" space="2" mt={12}>
            <Heading color="primary.600">{user?.profile.fullname}</Heading>
            <Text color="muted.400" fontSize="md">
              {user?.phone}
            </Text>
          </VStack>
          {/* <VStack space="2" my="4" px="6">
            <FormInput label="Số điện thoại" value={user?.phone} isDisabled />
            <FormInput label="Họ và tên" value={user?.profile.fullname} isDisabled={!editMode} />
            <FormInput label="Tuổi" value={String(user?.profile.age)} isDisabled={!editMode} />
            <FormInput label="Địa chỉ" value={user?.profile.address} isDisabled={!editMode} />
            <GenderSelect selectedValue={user?.profile.gender} isDisabled={!editMode} />
          </VStack> */}
          <VStack space="4" px="6" mt="12" mb="6">
            <ButtonInProfile onPress={() => navigation.navigate("EditProfile")}>
              Chỉnh sửa thông tin
            </ButtonInProfile>
            <ButtonInProfile onPress={() => navigation.navigate("ManageNanny")}>
              Quản lý bảo mẫu
            </ButtonInProfile>
            <ButtonInProfile>Quản lý trẻ</ButtonInProfile>
            <ButtonInProfile>Yêu thích</ButtonInProfile>
            <ButtonInProfile onPress={() => navigation.navigate("ChangePassword")}>
              Đổi mật khẩu
            </ButtonInProfile>
          </VStack>
          <Button variant="link" colorScheme="warmGray" onPress={logout} mb="4">
            Đăng xuất
          </Button>
        </VStack>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({});
