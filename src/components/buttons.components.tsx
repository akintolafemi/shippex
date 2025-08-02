import { Button as RNEButton, ButtonProps } from "@rneui/themed";
import React from "react";
import { Platform, StyleProp, TextStyle, View, ViewStyle } from "react-native";
import colorsConstant, {
  colorDisabledBtn,
  colorDisabledTitle,
  colorPrimary,
} from "src/constants/colors.constants";
import layoutConstant from "src/constants/layout.constants";
import fontUtil from "src/utils/font.utils";
import { StyleSheet } from "react-native";
import * as Haptics from "expo-haptics";

type buttonPropsType = {
  type?: "outline" | "solid" | "clear";
  titleStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  buttonHeight?: number;
  borderRadius?: number;
  backgroundColor?: string;
} & ButtonProps;

export const Button = ({
  buttonHeight = layoutConstant.buttonHeight,
  titleStyle = {},
  buttonStyle = {},
  wrapperStyle,
  type = "solid",
  borderRadius = layoutConstant.inputRadius,
  backgroundColor = colorPrimary,
  ...props
}: buttonPropsType) => {
  return (
    <View style={[styles.buttonViewStyle, wrapperStyle]}>
      <RNEButton
        titleStyle={[
          {
            fontFamily: fontUtil.sfprodisplay_700,
            fontSize: fontUtil.h(14),
            textTransform: "capitalize",
          },
          titleStyle,
        ]}
        type={type}
        activeOpacity={layoutConstant.activeOpacity}
        buttonStyle={[
          {
            height: buttonHeight,
            borderRadius: borderRadius,
            backgroundColor: type === "solid" ? backgroundColor : undefined,
            borderWidth: type === "outline" ? fontUtil.h(1) : undefined,
            borderColor: type === "outline" ? backgroundColor : undefined,
          },
          buttonStyle,
        ]}
        containerStyle={[
          {
            height: buttonHeight,
            borderRadius: borderRadius,
          },
        ]}
        radius={borderRadius}
        disabledTitleStyle={{
          color: colorDisabledTitle,
        }}
        disabledStyle={styles.disabledStyle}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonViewStyle: {
    borderRadius: fontUtil.r(10),
  },
  disabledStyle: {
    backgroundColor: colorDisabledBtn,
  },
});
