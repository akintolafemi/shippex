import { Input as RNEInput, InputProps, Icon } from "@rneui/themed";
import { useState } from "react";
import { StyleProp, TextStyle, View, ViewStyle } from "react-native";
import colorsConstant, { colorPrimary } from "src/constants/colors.constants";
import layoutConstant from "src/constants/layout.constants";
import fontUtil from "src/utils/font.utils";
import { TouchableOpacity } from "./themed.components";
import React from "react";

export type defaultInputProps = {
  inputHeight?: number;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  secureTextEntry?: boolean;
  hasError?: boolean;
  wrapperStyle?: StyleProp<ViewStyle>;
  labelPosision?: "top" | "bottom";
  inputRef?: any;
  errorType?: "error" | "info" | "success";
} & InputProps;

export const Input = ({
  inputHeight = layoutConstant.inputHeight,
  containerStyle = {},
  labelStyle = {},
  secureTextEntry = false,
  errorMessage,
  errorType = "error",
  hasError,
  inputContainerStyle = {},
  inputStyle = {},
  inputRef = null,
  label,
  wrapperStyle,
  labelPosision = "top",
  rightIcon,
  ...props
}: defaultInputProps) => {
  const [showEntry, setShowEntry] = useState(secureTextEntry);
  const theme = "light";
  const [borderColor, setBorderColor] = useState<undefined | string>(undefined);

  const onFocus = () => {
    setBorderColor(colorPrimary);
  };
  const onBlur = () => {
    setBorderColor(undefined);
  };

  return (
    <View
      style={[
        {
          marginBottom: fontUtil.h(10),
        },
        wrapperStyle,
      ]}
    >
      <RNEInput
        ref={inputRef}
        inputStyle={[
          {
            fontFamily: fontUtil.inter_regular,
            paddingHorizontal: fontUtil.w(15),
            fontSize: fontUtil.h(15),
            color: colorPrimary,
          },
          inputStyle,
        ]}
        cursorColor={colorPrimary}
        labelStyle={[
          {
            fontFamily: fontUtil.sfprodisplay_500,
            fontSize: fontUtil.w(15),
            marginBottom: fontUtil.h(5),
          },
          labelStyle,
        ]}
        inputContainerStyle={[
          {
            height: inputHeight,
            borderRadius: layoutConstant.inputRadius,
            backgroundColor: colorsConstant[theme].inputBG,
            borderBottomWidth: borderColor ? 1 : 0,
            borderWidth: borderColor ? 1 : 0,
            borderColor,
          },
          inputContainerStyle,
        ]}
        leftIconContainerStyle={{ marginLeft: fontUtil.w(15) }}
        containerStyle={[
          {
            height: inputHeight,
            paddingLeft: 0,
            paddingRight: 0,
            marginBottom: fontUtil.w(20),
          },
          containerStyle,
        ]}
        rightIcon={
          secureTextEntry && !rightIcon ? (
            <TouchableOpacity onPress={() => setShowEntry(!showEntry)}>
              <Icon
                name={showEntry ? `eye-off` : `eye`}
                type="ionicon"
                size={fontUtil.h(16)}
                iconStyle={{
                  opacity: 0.5,
                }}
                containerStyle={{
                  marginRight: fontUtil.w(10),
                }}
              />
            </TouchableOpacity>
          ) : (
            rightIcon
          )
        }
        secureTextEntry={showEntry}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      />
    </View>
  );
};
