/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { FunctionComponent } from "react";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = AuthScreensParamList &
  RootTabParamList & {
    Root: NavigatorScreenParams<StackParamList> | undefined;
    App: NavigatorScreenParams<RootTabParamList> | undefined;
    LandingScreen: undefined;
    HomeTabScreen: undefined;
  };

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type StackParamList = AuthScreensParamList & RootTabParamList;

export type AuthScreensParamList = {
  LoginScreen: undefined;
};

export type RootTabParamList = {
  HomeTabNavigator: undefined;
  ScanTabNavigator: undefined;
  WalletTabNavigator: undefined;
  ProfileTabbNavigator: undefined;
};

export type CombinedTabsParamList = RootTabParamList;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type RenderProps = {
  name: keyof RootStackParamList;
  component: FunctionComponent<any>;
  options: NativeStackNavigationOptions;
  initialParams: any;
};
