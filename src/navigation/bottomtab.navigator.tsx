import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RenderProps, RootTabParamList } from "src/types/navigation.types";
import colorsConstant, { colorPrimary } from "src/constants/colors.constants";
import layoutConstant from "src/constants/layout.constants";
import fontUtil from "src/utils/font.utils";
import { HomeTabRoutes } from "src/constants/tabs.routes.constants";
import ShipmentIcon from "src/components/svgs/shipment.icon";
import ScanIcon from "src/components/svgs/scan.icon";
import WalletIcon from "src/components/svgs/wallet.icon";
import ProfileIcon from "src/components/svgs/profile.icon";

const BottomTab = createBottomTabNavigator<RootTabParamList>();
const InTabStack = createNativeStackNavigator();

function renderTabsScreen({
  name,
  component,
  options = {},
  initialParams = {},
}: RenderProps) {
  return (
    <InTabStack.Screen
      name={name}
      key={name}
      options={options}
      component={component}
      initialParams={initialParams}
    />
  );
}

function HomeTabNavigator() {
  return (
    <InTabStack.Navigator>
      {HomeTabRoutes.map((route) => {
        return renderTabsScreen(route);
      })}
    </InTabStack.Navigator>
  );
}
export function BottomTabNavigator() {
  const tabBarIconSize = fontUtil.h(18);
  const theme = "light";

  return (
    <BottomTab.Navigator
      initialRouteName="HomeTabNavigator"
      backBehavior="history"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colorPrimary,
        // tabBarActiveBackgroundColor: colorPrimary,
        headerShown: false,
        tabBarStyle: {
          height: layoutConstant.tabBarHeight,
          backgroundColor: colorsConstant[theme].background,
        },
        tabBarLabelStyle: styles.tabBarLabelStyle,
      }}
    >
      <BottomTab.Screen
        name="HomeTabNavigator"
        component={HomeTabNavigator}
        options={({ navigation }) => ({
          tabBarLabel: "Shipments",
          tabBarIcon: ({ focused, color }) => <ShipmentIcon color={color} />,
        })}
      />
      <BottomTab.Screen
        name="ScanTabNavigator"
        component={HomeTabNavigator}
        options={({ navigation }) => ({
          tabBarLabel: "Scan",
          tabBarIcon: ({ focused, color }) => <ScanIcon color={color} />,
        })}
      />
      <BottomTab.Screen
        name="WalletTabNavigator"
        component={HomeTabNavigator}
        options={({ navigation }) => ({
          tabBarLabel: "Wallet",
          tabBarIcon: ({ focused, color }) => <WalletIcon color={color} />,
        })}
      />
      <BottomTab.Screen
        name="ProfileTabbNavigator"
        component={HomeTabNavigator}
        options={({ navigation }) => ({
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused, color }) => <ProfileIcon color={color} />,
        })}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    // fontFamily: fontUtil.poppins_400,
    fontSize: fontUtil.h(10),
  },
  tabBarItemViewStyle: {},
});
