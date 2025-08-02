import React from "react";
import { DimensionValue, StyleProp, View, ViewStyle } from "react-native";
import colorsConstant from "src/constants/colors.constants";
import fontUtil from "src/utils/font.utils";

export const Line = ({
  height = fontUtil.h(1),
  flex,
  width,
  containerStyle = {},
}: {
  height?: DimensionValue;
  flex?: number;
  width?: DimensionValue;
  containerStyle?: StyleProp<ViewStyle>;
}) => {
  return (
    <View
      style={[
        {
          flex: flex ? flex : undefined,
          backgroundColor: colorsConstant.colorDisabledBtn,
          height: height,
          width: width ? width : undefined,
        },
        containerStyle,
      ]}
    ></View>
  );
};
