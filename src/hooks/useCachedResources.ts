import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";

export default function useCachedResources() {
  const [fontsLoaded] = useFonts({
    ...FontAwesome.font,
    "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),

    "sfprodisplay-regular": require("../assets/fonts/SFProdisplay/sfprodisplayregular.otf"),
    "sfprodisplay-medium": require("../assets/fonts/SFProdisplay/sfprodisplaymedium.otf"),
    "sfprodisplay-bold": require("../assets/fonts/SFProdisplay/sfprodisplaybold.otf"),

    "inter-regular": require("../assets/fonts/Inter/Inter_Regular.ttf"),
    "inter-semibold": require("../assets/fonts/Inter/Inter_SemiBold.ttf"),
  });

  return fontsLoaded;
}
