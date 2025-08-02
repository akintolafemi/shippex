import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { RootStackScreenProps } from "src/types/navigation.types";
import { SafeAreaView } from "src/components/themed.components";
import { Button } from "src/components/buttons.components";
import colorsConstants, { colorPrimary } from "src/constants/colors.constants";
import fontUtils, { deviceHeight } from "src/utils/font.utils";
import { Image } from "expo-image";
import layoutConstants from "src/constants/layout.constants";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  withDelay,
  runOnJS,
} from "react-native-reanimated";

export default function LandingScreen({
  navigation,
  route,
}: RootStackScreenProps<"LandingScreen">) {
  const logoSource = require("src/assets/images/shippex-logo.png");
  const iconSource = require("src/assets/images/shippex-icon.png");

  const [showAnimation, setShowAnimation] = useState(true);

  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);
  const translateY = useSharedValue(0);
  const mainOpacity = useSharedValue(0);

  useEffect(() => {
    // Animation sequence
    scale.value = withSequence(
      withTiming(5, { duration: 1000 }), // scale up
      withDelay(2000, withTiming(1, { duration: 0 })), // wait
      withTiming(0.3, { duration: 600 }), // optional squash
    );

    opacity.value = withDelay(
      3000,
      withTiming(0, { duration: 400 }, () => {
        runOnJS(setShowAnimation)(false); // hide animation
        mainOpacity.value = withTiming(1, { duration: 500 }); // fade in main
      }),
    );

    translateY.value = withDelay(3000, withTiming(-100, { duration: 400 }));
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { translateY: translateY.value }],
    opacity: opacity.value,
  }));

  const mainStyle = useAnimatedStyle(() => ({
    opacity: mainOpacity.value,
  }));

  return (
    <SafeAreaView style={styles.container} edges={[]}>
      {showAnimation ? (
        <View style={styles.animationView}>
          <Animated.Image
            source={iconSource}
            style={[styles.iconStyle, animatedStyle]}
          />
        </View>
      ) : (
        <Animated.View style={styles.mainStyle}>
          <Image
            source={logoSource}
            contentFit="contain"
            style={styles.logoImageStyle}
          />
          <Button
            title={"Login"}
            color={colorPrimary}
            onPress={() => navigation.navigate("LoginScreen")}
            backgroundColor={colorsConstants.colorWhite}
            titleStyle={styles.btnTitleStyle}
          />
        </Animated.View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
    paddingBottom: 0,
    paddingTop: 0,
  },
  animationView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainStyle: {
    flex: 1,
    backgroundColor: colorPrimary,
    paddingBottom: fontUtils.h(50),
    paddingHorizontal: layoutConstants.mainViewHorizontalPadding,
    justifyContent: "flex-end",
  },
  btnTitleStyle: {
    color: colorPrimary,
  },
  logoImageStyle: {
    width: fontUtils.w(208),
    height: fontUtils.w(37),
    alignSelf: "center",
    position: "absolute",
    bottom: deviceHeight / 2,
  },
  iconStyle: {
    height: fontUtils.h(30),
    width: fontUtils.h(30),
  },
});
