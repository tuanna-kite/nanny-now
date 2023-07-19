import React from "react";
import { AlertDialog, Button, Center, Image, Text, VStack } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { removePopup } from "../store/popup.reducer";
import { EPopupType } from "../types/popup";

const errorImage = require("../../assets/ErrorImage.png");
const successImage = require("../../assets/SuccessImage.png");

const PopupOverlay = () => {
  const { popup } = useSelector((state: RootState) => state.popup);
  const dispatch = useDispatch();
  const cancelRef = React.useRef(null);
  const onClose = () => dispatch(removePopup());
  const image = popup?.type === EPopupType.ERROR ? errorImage : successImage;
  return (
    <AlertDialog leastDestructiveRef={cancelRef} isOpen={!!popup} onClose={onClose}>
      <AlertDialog.Content paddingX={4} paddingY="8">
        <Center>
          <Image source={image} size="lg" overflow="visible" />
        </Center>
        <AlertDialog.Body>
          <Center>
            <Text fontWeight="700" fontSize="2xl" color="primary.600" my="2">
              {popup?.title || "Không thể xác minh"}
            </Text>
            <Text textAlign="center" fontSize="md" color="muted.500">
              {popup?.message || "ID hoặc mật khẩu của bạn chưa chính xác"}
            </Text>
          </Center>
        </AlertDialog.Body>
        <Button onPress={onClose} ref={cancelRef} size="lg">
          Close
        </Button>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

export default PopupOverlay;
