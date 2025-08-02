import React from "react";
import { TabHeader } from "src/components/headers.components";
import HomeTabScreen from "src/screens/hometab";
import { RenderProps } from "src/types/navigation.types";

export const HomeTabRoutes: RenderProps[] = [
  {
    name: "HomeTabScreen",
    component: HomeTabScreen,
    options: {
      header: ({}) => <TabHeader />,
    },
    initialParams: {},
  },
];
