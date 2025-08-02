/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import "react-native-gesture-handler";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native";

import { View } from "src/components/themed.components";
import fontUtils from "src/utils/font.utils";
import { colorPrimary } from "src/constants/colors.constants";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "src/navigation";
import useCachedResources from "src/hooks/useCachedResources";

function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator
          size={fontUtils.h(40)}
          color={colorPrimary}
        />
      </View>
    );
  }

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      <SafeAreaProvider>
        <Navigation colorScheme={"light"} />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
