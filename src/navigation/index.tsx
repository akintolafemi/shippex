/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import linking from "./linkingconfiguration";
import { RenderProps, RootStackParamList } from "src/types/navigation.types";
import { Routes } from "src/constants/routes.constants";

export function renderScreen({
  name,
  component,
  options = {},
  initialParams = {},
}: RenderProps) {
  return (
    <Stack.Screen
      name={name}
      key={name}
      options={options}
      component={component}
      initialParams={initialParams}
    />
  );
}

export default function Navigation({
  colorScheme,
  initialRouteName,
}: {
  colorScheme: ColorSchemeName;
  initialRouteName?: keyof RootStackParamList;
}) {
  return (
    <NavigationContainer
      linking={linking}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator initialRouteName={initialRouteName} />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator({
  initialRouteName = "LandingScreen",
}: {
  initialRouteName?: keyof RootStackParamList;
}) {
  return (
    <Stack.Navigator
      screenOptions={{}}
      screenListeners={{
        beforeRemove: (e) => {
          // console.log(e)
        },
        focus: (e) => {
          // console.log(e)
        },
      }}
      initialRouteName={initialRouteName}
    >
      {Routes.map((route: any) => {
        return renderScreen(route);
      })}
    </Stack.Navigator>
  );
}
