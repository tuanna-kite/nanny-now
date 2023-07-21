import { Animated, StyleSheet } from "react-native";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { HStack, ScrollView, Stack, StatusBar, Text, VStack, useTheme } from "native-base";
import ListProfile from "../../components/ListProfile/ListProfile";
import PopupFilterOverlay from "../../components/PopupFilterOverlay";
import HomeHeader from "../../components/HomeHeader";
import { useAppDispatch, useAppSelector } from "../../store";
import { removeLoading } from "../../store/loading.reducer";
import LoadingOverlay from "../../components/LoadingOverlay";

const Home = () => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const { isLoading } = useAppSelector((state) => state.loading);
  console.log(isLoading);

  useEffect(() => {
    setTimeout(() => dispatch(removeLoading()), 50);
  }, []);
  if (isLoading) return <LoadingOverlay />;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <VStack flex={1} bg="primary.600">
        <HomeHeader animHeaderValue={scrollOffsetY} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }], {
            useNativeDriver: false,
          })}
          bounces={false}
        >
          <VStack flex={1} backgroundColor="white" space="8">
            <Stack space="6" bg="primary.600" pb="6">
              <VStack space="4" mb="6">
                <HStack justifyContent="space-between" alignItems="center" px="5">
                  <Text fontSize="2xl" fontWeight="600" color="white">
                    Top đánh giá
                  </Text>
                </HStack>
                <ListProfile horizontal itemStyle={{ backgroundColor: colors.muted[50] }} />
              </VStack>
            </Stack>
            <VStack px="5" flex={1}>
              <HStack justifyContent="space-between" alignItems="center">
                <Text fontSize="2xl" fontWeight="600" color="primary.600">
                  Gợi ý
                </Text>
                <Text color="muted.500">Xem thêm</Text>
              </HStack>
              <ListProfile scrollEnabled={false} />
            </VStack>
            <PopupFilterOverlay />
          </VStack>
        </ScrollView>
      </VStack>
    </>
  );
};
``;

export default Home;

const styles = StyleSheet.create({
  topBg: {
    height: 280,
    width: "100%",
    backgroundColor: "#E38383",
    position: "absolute",
  },
  endRadius: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
