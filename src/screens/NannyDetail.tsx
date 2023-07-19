import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { Heading, VStack, Text, Stack, ScrollView, useTheme, HStack, Button } from "native-base";
import UserSummary from "../components/UserSummary";
import NANNY from "../data/nanny";
import ListComments from "../components/ListComments/ListComments";
import { useNavigation } from "@react-navigation/native";
import { Heart, MessageText1 } from "iconsax-react-native";
import { HeaderButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";

const NannyDetail = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Thông tin bảo mẫu",
      headerRight: ({ tintColor }: HeaderButtonProps) => (
        <TouchableOpacity style={{ padding: 2 }}>
          <Heart color={tintColor} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <>
      <ScrollView background="white" flex={1} showsVerticalScrollIndicator={false}>
        <VStack flex={1} bg="white" pt="4" space="5" overflowX="visible">
          <Stack px="5">
            <UserSummary size="lg" user={NANNY[0]} />
          </Stack>
          <Button mx="5" mt="2" rounded="lg">
            Đánh giá
          </Button>
          <VStack mt="4" space="1" px="5">
            <Heading color="primary.600" fontSize="xl" fontWeight="semibold">
              Kinh nghiệm
            </Heading>
            <Text color="muted.800" fontSize={16}>
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </VStack>
          <VStack space="1" px="5">
            <Heading color="primary.600" fontSize="xl" fontWeight="semibold">
              Tuổi
            </Heading>
            <Text color="muted.800" fontSize={16}>
              30 tuổi
            </Text>
          </VStack>
          <VStack space="1" px="5">
            <Heading color="primary.600" fontSize="xl" fontWeight="semibold">
              Giới thiệu
            </Heading>
            <Text color="muted.800" fontSize={16}>
              Lorem ipsum dolor sit amet consectetur. Accumsan faucibus ut mattis massa lacus
              posuere pretium. Amet natoque eget ac eget. Neque vel a fusce dui felis non at ac
              vitae. Et semper eget blandit vulputate massa mus facilisi amet feugiat.
            </Text>
          </VStack>
          <VStack space="3">
            <Heading color="primary.600" fontSize="xl" fontWeight="semibold" px="5">
              Nhận xét
            </Heading>
            <ListComments />
          </VStack>
        </VStack>
      </ScrollView>
      <HStack safeAreaBottom space="5" px="8" bg="white" pt="4" pb="2">
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <MessageText1 size={40} color={colors.primary[600]} />
        </TouchableOpacity>
        <Button flex={1} rounded="lg">
          Đặt lịch ngay
        </Button>
      </HStack>
    </>
  );
};

export default NannyDetail;

const styles = StyleSheet.create({});
