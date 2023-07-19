import { StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  Button,
  CheckIcon,
  Checkbox,
  FormControl,
  HStack,
  Input,
  Modal,
  Select,
  Text,
  VStack,
  useTheme,
} from "native-base";
import { ArrowDown2 } from "iconsax-react-native";
import { useAppDispatch, useAppSelector } from "../store";
import { hidePopupFilter } from "../store/popup-filter.reducer";

const PopupFilterOverlay = () => {
  const { show } = useAppSelector((state) => state.popupFilter);
  const dispatch = useAppDispatch();
  const { colors } = useTheme();

  return (
    <Modal
      isOpen={show}
      onClose={() => dispatch(hidePopupFilter())}
      size="full"
      animationPreset="slide"
    >
      <Modal.Content style={{ marginBottom: 0, marginTop: "auto", width: "100%" }}>
        <Modal.CloseButton />
        <Modal.Header _text={{ color: "primary.600", fontSize: 22 }}>Bộ lọc</Modal.Header>
        <Modal.Body>
          <VStack space="4">
            <FormControl>
              <FormControl.Label _text={{ color: "primary.600", fontSize: "lg" }}>
                Loại chăm sóc
              </FormControl.Label>
              <Select
                // selectedValue={"ux"}
                placeholder="Lựa chọn"
                height="12"
                fontSize={14}
                colorScheme="primary"
                _selectedItem={{
                  bg: "primary.100",
                  endIcon: <CheckIcon size="5" />,
                }}
                _actionSheetBody={{ scrollEnabled: false }}
                dropdownIcon={
                  <ArrowDown2 color={colors.primary[600]} size={26} style={{ marginRight: 8 }} />
                }
                mt="2"
                // onValueChange={(itemValue) => setService(itemValue)}
              >
                <Select.Item label="UX Research" value="ux" />
                <Select.Item label="Web Development" value="web" />
              </Select>
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label _text={{ color: "primary.600", fontSize: "lg" }}>
                Giới tính
              </FormControl.Label>
              <Checkbox.Group flexDir="row" justifyContent="space-between" maxW="56" mt="2">
                <Checkbox value="save">
                  <Text color="muted.800">Tất cả</Text>
                </Checkbox>
                <Checkbox value="save">
                  <Text color="muted.800">Nam</Text>
                </Checkbox>
                <Checkbox value="save">
                  <Text color="muted.800">Nữ</Text>
                </Checkbox>
              </Checkbox.Group>
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{ color: "primary.600", fontSize: "lg" }} mb="2">
                Khu vực
              </FormControl.Label>
              <HStack space="4">
                <Select
                  // selectedValue={"ux"}
                  flex={1}
                  placeholder="Quận"
                  height="12"
                  fontSize={14}
                  colorScheme="primary"
                  _selectedItem={{
                    bg: "primary.100",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  dropdownIcon={
                    <ArrowDown2 color={colors.primary[600]} size={26} style={{ marginRight: 8 }} />
                  }
                  _actionSheetBody={{ scrollEnabled: false }}
                  // onValueChange={(itemValue) => setService(itemValue)}
                >
                  <Select.Item label="UX Research" value="ux" />
                  <Select.Item label="Web Development" value="web" />
                </Select>
                <Select
                  // selectedValue={"ux"}
                  flex={1}
                  placeholder="Thành phố"
                  height="12"
                  mb="2"
                  fontSize={14}
                  colorScheme="primary"
                  _selectedItem={{
                    bg: "primary.100",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  dropdownIcon={
                    <ArrowDown2 color={colors.primary[600]} size={26} style={{ marginRight: 8 }} />
                  }
                  _actionSheetBody={{ scrollEnabled: false }}
                  // onValueChange={(itemValue) => setService(itemValue)}
                >
                  <Select.Item label="UX Research" value="ux" />
                  <Select.Item label="Web Development" value="web" />
                </Select>
              </HStack>
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{ color: "primary.600", fontSize: "lg" }}>
                Giới tính
              </FormControl.Label>
              <HStack space="4">
                <Input flex={1} placeholder="Min" fontSize={14} h="12" />
                <Input flex={1} placeholder="Max" fontSize={14} h="12" />
              </HStack>
            </FormControl>
          </VStack>
        </Modal.Body>
        <Modal.Footer safeAreaBottom>
          <Button.Group space={2}>
            <Button
              variant="ghost"
              colorScheme="blueGray"
              onPress={() => dispatch(hidePopupFilter())}
            >
              Cancel
            </Button>
            <Button onPress={() => dispatch(hidePopupFilter())}>Save</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default PopupFilterOverlay;

const styles = StyleSheet.create({});
