import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image, ImageProps } from "expo-image";

type Props = { size?: "sm" | "md" | "lg" | "xl" | "2xl" } & ImageProps;

const Avatar = ({ size = "md", ...imageProps }: Props) => {
  let imgSize = 0;
  if (size === "sm") {
    imgSize = 48;
  } else if (size === "md") {
    imgSize = 64;
  } else if (size === "lg") {
    imgSize = 80;
  } else if (size === "xl") {
    imgSize = 100;
  } else {
    imgSize = 140;
  }
  return (
    <Image
      {...imageProps}
      style={{
        width: imgSize,
        height: imgSize,
      }}
    />
  );
};

export default Avatar;

const styles = StyleSheet.create({});
