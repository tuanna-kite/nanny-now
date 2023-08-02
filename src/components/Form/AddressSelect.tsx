import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack } from "native-base";
import FormSelect from "./FormSelect";
import { ADDRESS_TREE } from "../../data/address";
import { IHStackProps } from "native-base/lib/typescript/components/primitives/Stack/HStack";

type DistrictKeys = keyof typeof ADDRESS_TREE;

type Props = {
  _stack?: IHStackProps;
  district: DistrictKeys;
  setDistrict: (value: string) => void;
  ward: string;
  setWard: (value: string) => void;
};

const AddressSelect = (props: Props) => {
  const { _stack, district, ward, setDistrict, setWard } = props;

  return (
    <HStack space="2.5" {..._stack}>
      <FormSelect
        label="Quận"
        _stack={{ flex: 1 }}
        _actionSheetBody={{ scrollEnabled: true }}
        items={Object.entries(ADDRESS_TREE).map((item) => ({
          id: item[0],
          label: item[1].name,
        }))}
        selectedValue={district}
        onValueChange={setDistrict}
      />
      <FormSelect
        label="Phường"
        selectedValue={ward}
        _stack={{ flex: 1 }}
        _actionSheetBody={{ scrollEnabled: true }}
        items={Object.entries(ADDRESS_TREE[district]["xa-phuong"]).map((item) => ({
          id: item[0],
          label: item[1].name,
        }))}
        onValueChange={setWard}
      />
    </HStack>
  );
};

export default React.memo(AddressSelect);

const styles = StyleSheet.create({});
