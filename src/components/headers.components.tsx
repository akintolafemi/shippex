import React, { JSX } from "react";
import { Text, View, TouchableOpacity } from "./themed.components";
import { StyleProp, ViewStyle, View as RNView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colorDisabledBtn, colorPrimary } from "src/constants/colors.constants";
import { Icon } from "@rneui/themed";
import { StyleSheet } from "react-native";
import fontUtils from "src/utils/font.utils";
import { Image } from "expo-image";
import layoutConstants from "src/constants/layout.constants";

export const ScreenHeader = ({
  title = "Screen",
  containerStyle,
  hideBackButton = false,
  backButtonColor,
  onBackPressed,
  backButtonName = "keyboard-arrow-left",
  backButtonTitle,
}: {
  title?: string | JSX.Element;
  containerStyle?: StyleProp<ViewStyle>;
  hideBackButton?: boolean;
  backButtonColor?: string;
  onBackPressed?: any;
  backButtonName?: string;
  backButtonTitle?: string;
}) => {
  const navigation = useNavigation();

  const backPressed = () => {
    if (onBackPressed) onBackPressed();
    else if (navigation.canGoBack()) navigation.goBack();
  };

  return (
    <View
      style={[
        {
          flexDirection: "row",
          height: fontUtils.h(80),
          alignItems: "flex-end",
          paddingBottom: fontUtils.h(10),
          paddingHorizontal: layoutConstants.mainViewHorizontalPadding,
        },
        containerStyle,
      ]}
    >
      {!hideBackButton && (
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Icon
            name={backButtonName}
            size={fontUtils.h(30)}
            onPress={backPressed}
            color={backButtonColor ? backButtonColor : colorPrimary}
            containerStyle={{
              marginLeft: fontUtils.w(-5),
            }}
          />
          {backButtonTitle ? (
            <Text
              ml={fontUtils.w(2)}
              size={fontUtils.h(16)}
              darkColor={colorPrimary}
              lightColor={colorPrimary}
            >
              {backButtonTitle}
            </Text>
          ) : null}
        </TouchableOpacity>
      )}
      {typeof title === "string" ? (
        <RNView
          style={{
            flex: 1,
            marginLeft: hideBackButton ? 0 : -fontUtils.h(25),
          }}
        >
          <Text>{title}</Text>
        </RNView>
      ) : (
        title
      )}
    </View>
  );
};

const logoSource = require("src/assets/images/shippex-logo-primary.png");
export const TabHeader = () => {
  return (
    <View style={styles.tabHeaderWrapperStyle}>
      <View style={styles.tabheaderViewStyle}>
        <Image
          source={require("src/assets/images/profile-avatar.png")}
          style={styles.avatarStyle}
        />
        <Image source={logoSource} style={styles.logoStyle} />
        <TouchableOpacity>
          <Icon
            name="notifications-outline"
            type="ionicon"
            containerStyle={styles.avatarStyle}
            color={colorPrimary}
            size={fontUtils.h(20)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabHeaderWrapperStyle: {
    paddingHorizontal: layoutConstants.mainViewHorizontalPadding,
    justifyContent: "flex-end",
    paddingBottom: fontUtils.h(10),
    height: fontUtils.h(100),
  },
  tabheaderViewStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoStyle: {
    width: fontUtils.w(92),
    height: fontUtils.w(16),
  },
  avatarStyle: {
    height: fontUtils.w(40),
    width: fontUtils.w(40),
    borderRadius: fontUtils.w(40),
    backgroundColor: colorDisabledBtn,
    justifyContent: "center",
  },
});
