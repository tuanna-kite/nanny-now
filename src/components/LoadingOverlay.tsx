import { Dimensions, StyleSheet } from "react-native";
import React from "react";
import { Center, HStack, Heading, Spinner, Stack } from "native-base";

const LoadingOverlay = () => {
  return (
    <Center flex={1} style={styles.container} bg="white">
      {/* <Stack position="absolute" width="100%" height="100%" backgroundColor="black" opacity={0.1} zIndex={0} /> */}
      <HStack space={2} justifyContent="center">
        <Spinner size="lg" accessibilityLabel="Loading posts" />
        {/* <Heading color="primary.600" fontSize="lg">
          Loading
        </Heading> */}
      </HStack>
    </Center>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
});
