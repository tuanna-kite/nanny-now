import { StyleSheet, View } from "react-native";
import React from "react";
import {
  Avatar,
  Button,
  Center,
  Checkbox,
  FormControl,
  HStack,
  Heading,
  Input,
  StatusBar,
  Text,
  VStack,
  useTheme,
} from "native-base";
import { removeUser } from "../../store/user.reducer";
import { useAppDispatch } from "../../store";
import { ArrowRight2 } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const { colors } = useTheme();
  const logout = () => {
    dispatch(removeUser());
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <VStack bg="white" safeArea flex={1} justifyContent="space-between" p="6">
        <VStack alignItems="center" space={4}>
          <Avatar source={require("../../../assets/Avatar.png")} size="2xl" />
          <Center>
            <Heading color="primary.600" textAlign="center">
              Paityn George
            </Heading>
            <Text color="muted.500">paityngeorge@gmail.com</Text>
          </Center>
        </VStack>
        <VStack space="2" mb="8">
          <FormControl>
            <VStack>
              <FormControl.Label>Họ và tên</FormControl.Label>
              <Input variant="outline" placeholder="Họ và tên" h="12" fontSize="md" />
            </VStack>
          </FormControl>
          <FormControl>
            <VStack>
              <FormControl.Label>Tuổi</FormControl.Label>
              <Input variant="outline" placeholder="Tuổi" h="12" fontSize="md" />
            </VStack>
          </FormControl>
          <FormControl>
            <VStack>
              <FormControl.Label>Số điện thoại</FormControl.Label>
              <Input variant="outline" placeholder="Số điện thoại" h="12" fontSize="md" />
            </VStack>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{ color: "primary.600", fontSize: "lg", fontWeight: "semibold" }}
            >
              Giới tính
            </FormControl.Label>
            <Checkbox.Group flexDir="row" justifyContent="space-between" maxW="56">
              <Checkbox value="save">
                <Text color="muted.800">Nam</Text>
              </Checkbox>
              <Checkbox value="save">
                <Text color="muted.800">Nữ</Text>
              </Checkbox>
            </Checkbox.Group>
          </FormControl>
        </VStack>
        <VStack space="4">
          <HStack space="2">
            <Button
              variant="outline"
              borderColor="primary.600"
              size="lg"
              rounded="lg"
              flex={1}
              rightIcon={<ArrowRight2 variant="Outline" color={colors.primary[600]} />}
              _stack={{ width: "100%", justifyContent: "space-between" }}
              _text={{ fontWeight: "semibold" }}
              onPress={() => navigation.navigate("ManageNanny")}
            >
              Quản lý bảo mẫu
            </Button>
            <Button
              variant="outline"
              borderColor="primary.600"
              size="lg"
              rounded="lg"
              flex={1}
              rightIcon={<ArrowRight2 variant="Outline" color={colors.primary[600]} />}
              _text={{ fontWeight: "semibold" }}
              _stack={{ width: "100%", justifyContent: "space-between" }}
            >
              Quản lý trẻ
            </Button>
          </HStack>
          <HStack space="2">
            <Button
              variant="outline"
              borderColor="primary.600"
              size="lg"
              rounded="lg"
              flex={1}
              _stack={{ width: "100%", justifyContent: "space-between" }}
              _text={{ fontWeight: "semibold" }}
              rightIcon={<ArrowRight2 variant="Outline" color={colors.primary[600]} />}
            >
              Yêu thích
            </Button>
            <Button
              variant="outline"
              borderColor="primary.600"
              size="lg"
              rounded="lg"
              flex={1}
              rightIcon={<ArrowRight2 variant="Outline" color={colors.primary[600]} />}
              _stack={{ width: "100%", justifyContent: "space-between" }}
              _text={{ fontWeight: "semibold" }}
              onPress={() => navigation.navigate("ChangePassword")}
            >
              Đổi mật khẩu
            </Button>
          </HStack>
        </VStack>
        <Button variant="link" colorScheme="warmGray" onPress={logout} mt="4">
          Đăng xuất
        </Button>
      </VStack>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({});
