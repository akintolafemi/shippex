import React from "react";
import { ScreenHeader } from "src/components/headers.components";
import { BottomTabNavigator } from "src/navigation/bottomtab.navigator";
import LoginScreen from "src/screens/auth/LoginScreen";
import LandingScreen from "src/screens/landing.screen";
import { RenderProps } from "src/types/navigation.types";

export const Routes: RenderProps[] = [
  {
    name: "LandingScreen",
    component: LandingScreen,
    options: {
      headerShown: false,
    },
    initialParams: {},
  },
  {
    name: "LoginScreen",
    component: LoginScreen,
    options: {
      // presentation: "modal",
      header: ({}) => <ScreenHeader title={""} backButtonTitle="Cancel" />
    },
    initialParams: {},
  },
  {
    name: "App",
    component: BottomTabNavigator,
    options: {
      headerShown: false,
    },
    initialParams: {},
  },
];
