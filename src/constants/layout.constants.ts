import { Dimensions, Platform } from "react-native";
import fontUtil from "src/utils/font.utils";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  tabBarHeight: Platform.select({
    ios: fontUtil.h(70),
    android: fontUtil.h(80),
  }),
  activeOpacity: 0.6,
  mainViewHorizontalPadding: fontUtil.w(16),
  screenWidth: width - fontUtil.w(16 * 2),
  buttonHeight: fontUtil.h(56),
  inputHeight: fontUtil.h(56),
  inputRadius: fontUtil.r(10),
};
