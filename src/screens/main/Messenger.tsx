import { StyleSheet } from "react-native";
import React from "react";
import { Button, VStack, useTheme, Text } from "native-base";
import { SearchNormal } from "iconsax-react-native";
import MessageItem from "../../components/ListMassages/MessageItem";
import ListMassages from "../../components/ListMassages/ListMassages";
import { MESSAGES } from "../../data/message";
import { StatusBar } from "expo-status-bar";

const Messenger = () => {
  const { colors } = useTheme();
  return (
    <>
      <StatusBar style="dark" />
      <VStack safeAreaTop flex={1} bg="white" px="4" space="6" pt="4">
        <Button
          size="lg"
          rounded="lg"
          colorScheme="button"
          leftIcon={<SearchNormal color={colors.muted[400]} />}
          onPress={() => {}}
        >
          <Text color="muted.400">Tìm kiếm theo khu vực</Text>
        </Button>
        <ListMassages data={MESSAGES} />
      </VStack>
    </>
  );
};

export default Messenger;

const styles = StyleSheet.create({});
