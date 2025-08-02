import React, { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { RootStackScreenProps } from "src/types/navigation.types";
import { SafeAreaView, Text } from "src/components/themed.components";
import fontUtils from "src/utils/font.utils";
import { Input } from "src/components/inputs.components";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  colorDisabledBtn,
  colorDisabledTitle,
  colorPrimary,
  colorWhite,
} from "src/constants/colors.constants";
import { View } from "react-native";
import { Button } from "src/components/buttons.components";
import { FlatList } from "react-native-gesture-handler";
import {
  CustomCheckBox,
  ShipmentItem,
  ShipmentItemProps,
} from "./components/shipment.components";
import { AppRefreshControl } from "src/components/refreshcontrol.component";
import { SAMPLE_DATA } from "src/constants/app.constants";
import { Modalize } from "react-native-modalize";
import layoutConstants from "src/constants/layout.constants";
import { Line } from "src/components/line.components";

export default function HomeTabScreen({
  navigation,
  route,
}: RootStackScreenProps<"HomeTabScreen">) {
  const modalRef = useRef<Modalize>(null);
  const openFilters = () => modalRef.current?.open();
  const closeModal = () => modalRef.current?.close();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([
    "putaway",
    "on hold",
  ]);
  const [data, setData] = useState(SAMPLE_DATA);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText.trim() !== "") {
      const filtered = SAMPLE_DATA.filter((d) => {
        return (
          d.id.toLowerCase().includes(searchText) ||
          d.label.toLowerCase().includes(searchText)
        );
      });
      setData([...filtered]);
    } else setData([...SAMPLE_DATA]);
  }, [searchText]);

  const filterOptions = [
    "received",
    "putaway",
    "delivered",
    "canceled",
    "rejected",
    "lost",
    "on hold",
  ];

  const renderItem = useCallback(
    ({ item, index }: { item: ShipmentItemProps; index: number }) => (
      <ShipmentItem {...item} />
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text lightColor="rgba(0, 0, 0, 0.6)">Hello,</Text>
      <Text
        fontFamily={fontUtils.sfprodisplay_500}
        size={fontUtils.h(24)}
        mb={fontUtils.h(15)}
      >
        Ibrahim Shaker
      </Text>
      <Input
        placeholder="Search"
        value={searchText}
        onChangeText={setSearchText}
        inputHeight={fontUtils.h(44)}
        leftIcon={
          <Feather
            name="search"
            color={colorDisabledTitle}
            size={fontUtils.w(24)}
          />
        }
        inputStyle={{ paddingLeft: 0 }}
      />
      <View style={styles.actionViewStyle}>
        <Button
          title={"Filters"}
          onPress={openFilters}
          buttonHeight={fontUtils.h(44)}
          icon={
            <Ionicons
              name="filter"
              size={fontUtils.h(20)}
              color={colorDisabledTitle}
            />
          }
          backgroundColor={colorDisabledBtn}
          wrapperStyle={[styles.actionBtnStyle]}
          titleStyle={[
            styles.actionBtnTitleStyle,
            styles.leftActionBtnTitleStyle,
          ]}
        />
        <Button
          title={"Add Scan"}
          buttonHeight={fontUtils.h(44)}
          icon={
            <MaterialCommunityIcons
              name="line-scan"
              size={fontUtils.h(20)}
              color={colorWhite}
            />
          }
          wrapperStyle={[styles.actionBtnStyle, styles.rightActionBtnStyle]}
          titleStyle={styles.actionBtnTitleStyle}
        />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        onEndReachedThreshold={0.2}
        initialNumToRender={20}
        maxToRenderPerBatch={50}
        scrollEventThrottle={16}
        removeClippedSubviews
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        refreshControl={<AppRefreshControl refreshing={false} />}
        ListHeaderComponent={
          <View style={[styles.actionViewStyle, styles.listHeaderViewStyle]}>
            <Text
              fontFamily={fontUtils.sfprodisplay_500}
              size={fontUtils.h(20)}
            >
              Shipments
            </Text>
            <View style={styles.actionViewStyle}>
              <CustomCheckBox />
              <Text
                ml={fontUtils.w(5)}
                size={fontUtils.h(16)}
                lightColor={colorPrimary}
              >
                Mark All
              </Text>
            </View>
          </View>
        }
      />
      <Modalize
        ref={modalRef}
        adjustToContentHeight
        withReactModal
        handlePosition="inside"
        childrenStyle={styles.modalChildrenStyle}
      >
        <View style={styles.modalTitleViewStyle}>
          <Text
            lightColor={colorPrimary}
            darkColor={colorPrimary}
            onPress={closeModal}
          >
            Cancel
          </Text>
          <Text fontFamily={fontUtils.inter_semibold} size={fontUtils.h(16)}>
            Filters
          </Text>
          <Text
            lightColor={colorPrimary}
            darkColor={colorPrimary}
            onPress={closeModal}
          >
            Done
          </Text>
        </View>
        <Line />
        <Text mt={fontUtils.h(10)} mb={fontUtils.h(15)}>
          SHIPMENT STATUS
        </Text>
        <View style={styles.optionsViewStyle}>
          {filterOptions.map((i) => (
            <Button
              key={i}
              title={i}
              buttonHeight={fontUtils.h(40)}
              backgroundColor={
                selectedFilters.includes(i) ? colorPrimary : colorDisabledBtn
              }
              containerStyle={styles.optionButtonStyle}
              titleStyle={{
                color: !selectedFilters.includes(i)
                  ? colorDisabledTitle
                  : colorWhite,
                fontFamily: fontUtils.sfprodisplay_400,
                paddingHorizontal: fontUtils.w(5),
              }}
            />
          ))}
        </View>
      </Modalize>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actionViewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionBtnStyle: {
    flex: 1,
  },
  rightActionBtnStyle: {
    marginLeft: fontUtils.w(10),
  },
  actionBtnTitleStyle: {
    fontFamily: fontUtils.inter_regular,
    marginLeft: fontUtils.w(5),
  },
  leftActionBtnTitleStyle: {
    color: colorDisabledTitle,
  },
  listHeaderViewStyle: {
    marginTop: fontUtils.h(20),
    marginBottom: fontUtils.h(15),
  },
  optionsViewStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  modalChildrenStyle: {
    paddingHorizontal: layoutConstants.mainViewHorizontalPadding,
    paddingTop: fontUtils.h(25),
    paddingBottom: fontUtils.h(50),
  },
  optionButtonStyle: {
    marginBottom: fontUtils.h(6),
    marginRight: fontUtils.w(6),
  },
  modalTitleViewStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: fontUtils.h(10),
  },
});
