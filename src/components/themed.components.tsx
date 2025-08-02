/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import React from "react";
import {
  ScrollViewProps as DefaultScrollViewProps,
  Text as DefaultText,
  View as DefaultView,
  StyleSheet,
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { ScrollView as DefaultScrollView } from "react-native-gesture-handler";

import {
  SafeAreaView as DefaultSafeAreaView,
  SafeAreaViewProps as DefaultSafeAreaViewProps,
} from "react-native-safe-area-context";
import fontUtils from "src/utils/font.utils";
import colorsConstants from "src/constants/colors.constants";
import layoutConstants from "src/constants/layout.constants";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof colorsConstants.light &
    keyof typeof colorsConstants.dark,
) {
  // const theme = useColorScheme() ?? "light";
  const theme = "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return colorsConstants[theme][colorName];
  }
}

export type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps &
  DefaultText["props"] & {
    size?: number;
    lineHeight?: number;
    align?: "auto" | "left" | "right" | "center" | "justify" | undefined;
    fontFamily?: string;
    type?:
      | "default"
      | "title"
      | "defaultSemiBold"
      | "subtitle"
      | "link"
      | "small"
      | "extraSmall";
    mt?: number;
    mb?: number;
    ml?: number;
    mr?: number;
    m?: number;
  };
export type ViewProps = ThemeProps & DefaultView["props"];
export type SafeAreaViewProps = ThemeProps & DefaultSafeAreaViewProps;
export type ScrollViewProps = ThemeProps & DefaultScrollViewProps;

export function Text(props: TextProps) {
  const {
    style,
    lightColor,
    darkColor,
    size = fontUtils.h(14),
    lineHeight,
    align,
    ml,
    mr,
    mt,
    mb,
    m,
    fontFamily = fontUtils.sfprodisplay_400,
    ...otherProps
  } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <DefaultText
      style={[
        styles.defaultTextStyle,
        {
          color,
        },
        { fontSize: size },
        { lineHeight: lineHeight },
        { textAlign: align },
        { marginLeft: ml, marginRight: mr, marginTop: mt, marginBottom: mb },
        { margin: m },
        { fontFamily },
        style,
      ]}
      {...otherProps}
    />
  );
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function SafeAreaView(props: SafeAreaViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "screenGb",
  );

  return (
    <DefaultSafeAreaView
      edges={["right", "bottom", "left"]}
      style={[
        styles.defaultSafeAreaViewStyle,
        {
          backgroundColor,
        },
        style,
      ]}
      {...otherProps}
    />
  );
}

export function ScrollView(props: ScrollViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "screenGb",
  );

  return (
    //@ts-ignore
    <DefaultScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={[{ backgroundColor }, style]}
      {...otherProps}
    />
  );
}

export function TouchableOpacity(props: TouchableOpacityProps) {
  const { activeOpacity = layoutConstants.activeOpacity, ...otherProps } =
    props;
  return <RNTouchableOpacity activeOpacity={activeOpacity} {...otherProps} />;
}

const styles = StyleSheet.create({
  defaultTextStyle: {
    fontFamily: fontUtils.sfprodisplay_400,
    fontSize: fontUtils.h(12),
  },
  defaultSafeAreaViewStyle: {
    flex: 1,
    paddingHorizontal: layoutConstants.mainViewHorizontalPadding,
    paddingTop: layoutConstants.mainViewHorizontalPadding / 2,
  },
});
