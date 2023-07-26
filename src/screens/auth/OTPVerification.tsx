import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button, Center, Input } from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../navigations/config";
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { firebaseAuth } from "../../firebase";
import { useAppDispatch } from "../../store";
import { setUser } from "../../store/user.reducer";
import { EUserRole } from "../../types/user";
import { setPopup } from "../../store/popup.reducer";
import { EPopupType } from "../../types/popup";

type Props = {} & NativeStackScreenProps<AuthStackParams, "OTPVerification">;

const OTPVerification = ({ route, navigation }: Props) => {
  const dispatch = useAppDispatch();

  const { verificationId, password, phone } = route.params;
  const [OTP, setOTP] = useState("");
  async function verifyOTP() {
    try {
      // const credential = PhoneAuthProvider.credential(verificationId, OTP); // get the credential
      // await signInWithCredential(firebaseAuth, credential); // verify the credential
      navigation.navigate("FillProfile", { phone, password });
    } catch (err) {
      dispatch(
        setPopup({
          type: EPopupType.ERROR,
          title: "Xác thực thất bại!",
          message: "Mã OTP nhập không chính xác. Hãy thử lại",
        })
      );
    }
  }
  return (
    <Center flex={1}>
      <Input value={OTP} onChangeText={setOTP} />
      <Button onPress={verifyOTP}>Xác nhận</Button>
    </Center>
  );
};

export default OTPVerification;

const styles = StyleSheet.create({});
