import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon } from "@rneui/themed";
import { Image } from "expo-image";
import React from "react";
import { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Text, TouchableOpacity } from "src/components/themed.components";
import colorsConstants, {
  colorDisabledBtn,
  colorPrimary,
  colorWhite,
} from "src/constants/colors.constants";
import fontUtils from "src/utils/font.utils";

type shipmentStatus =
  | "canceled"
  | "received"
  | "putaway"
  | "delivered"
  | "rejected"
  | "lost"
  | "on hold";

export const RenderShipmentStatus = ({
  status = "received",
}: {
  status: shipmentStatus;
}) => {
  const color = colorsConstants.status[status];
  const borderColor =
    status === "delivered" || status === "received" ? colorPrimary : colorWhite;
  const backgroundColor = colorsConstants.convertToRgba(color, 0.2);

  return (
    <View
      style={[
        styles.statusViewStyle,
        {
          borderColor,
          backgroundColor,
        },
      ]}
    >
      <Text lightColor={color} darkColor={color} style={styles.statusTextStyle}>
        {status}
      </Text>
    </View>
  );
};

export type ShipmentItemProps = {
  id: string;
  from: string;
  destination: string;
  status: shipmentStatus;
  label: string;
};

const parcelBox = require("src/assets/images/parcel-box.png");

export const CustomCheckBox = () => {
  return (
    <TouchableOpacity>
      <MaterialCommunityIcons
        name="checkbox-blank"
        size={fontUtils.h(18)}
        color={colorWhite}
        style={styles.checkboxContainerStyle}
      />
    </TouchableOpacity>
  );
};

export const ShipmentItem = memo(function ShipmentItem({
  destination,
  from,
  id,
  label,
  status,
}: ShipmentItemProps) {
  const theme = "light";
  return (
    <View style={styles.itemWrapperStyle}>
      <CustomCheckBox />
      <Image source={parcelBox} style={styles.parcelBoxStyle} />
      <View style={styles.mainContentStyle}>
        <Text>{label}</Text>
        <Text fontFamily={fontUtils.inter_semibold}>{id}</Text>
        <View style={styles.addressInfoViewStyle}>
          <Text
            lightColor={colorsConstants[theme][757281]}
            darkColor={colorsConstants[theme][757281]}
            mr={fontUtils.w(5)}
          >
            {from}
          </Text>
          <Icon
            name="arrow-right"
            type="feather"
            size={fontUtils.h(10)}
            color={colorsConstants[theme][757281]}
          />
          <Text
            lightColor={colorsConstants[theme][757281]}
            darkColor={colorsConstants[theme][757281]}
            ml={fontUtils.w(5)}
          >
            {destination}
          </Text>
        </View>
      </View>
      <RenderShipmentStatus status={status} />
      <TouchableOpacity style={styles.actionBtnContainerStyle}>
        <MaterialCommunityIcons
          name="arrow-expand"
          size={fontUtils.h(15)}
          color={colorPrimary}
        />
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  itemWrapperStyle: {
    backgroundColor: colorDisabledBtn,
    borderRadius: fontUtils.r(10),
    paddingVertical: fontUtils.h(10),
    paddingHorizontal: fontUtils.w(10),
    flexDirection: "row",
    alignItems: "center",
    marginBottom: fontUtils.h(10),
  },
  parcelBoxStyle: {
    height: fontUtils.w(40),
    width: fontUtils.w(40),
    marginHorizontal: fontUtils.w(10),
  },
  addressInfoViewStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusTextStyle: {
    textTransform: "uppercase",
    fontSize: fontUtils.h(10),
    fontFamily: fontUtils.inter_regular,
  },
  statusViewStyle: {
    paddingHorizontal: fontUtils.w(8),
    paddingVertical: fontUtils.h(4),
    borderWidth: fontUtils.w(1),
    borderRadius: fontUtils.r(4),
  },
  mainContentStyle: {
    flex: 1,
  },
  actionBtnContainerStyle: {
    backgroundColor: colorWhite,
    width: fontUtils.w(24),
    height: fontUtils.w(24),
    borderRadius: fontUtils.w(24),
    justifyContent: "center",
    alignItems: "center",
    marginLeft: fontUtils.w(15),
  },
  checkboxContainerStyle: {
    borderWidth: fontUtils.w(1),
    borderRadius: fontUtils.r(5),
    borderColor: "#D0D5DD",
    backgroundColor: colorWhite,
  },
});
