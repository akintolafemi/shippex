import { Dimensions } from "react-native";

export const deivceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;

const DEVICE_SCALE = Dimensions.get("window").width / 375;
const DEVICE_SCALE_HEIGHT = Dimensions.get("window").height / 768;
const space_mono = "space-mono";

const sfprodisplay_400 = "sfprodisplay-regular";
const sfprodisplay_500 = "sfprodisplay-medium";
const sfprodisplay_700 = "sfprodisplay-bold";

const inter_regular = "inter-regular";
const inter_semibold = "inter-semibold";

function normalize(size: number): number {
  return Math.round(DEVICE_SCALE * size);
}

export default {
  space_mono,

  sfprodisplay_400,
  sfprodisplay_500,
  sfprodisplay_700,

  inter_regular,
  inter_semibold,

  h: (size: number): number => Math.round(DEVICE_SCALE_HEIGHT * size),
  w: normalize,
  r: normalize,
};
