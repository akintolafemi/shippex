import React, { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { RootStackScreenProps } from "src/types/navigation.types";
import { SafeAreaView, Text } from "src/components/themed.components";
import { Button } from "src/components/buttons.components";
import fontUtils from "src/utils/font.utils";
import { Input } from "src/components/inputs.components";

export default function LoginScreen({
  navigation,
  route,
}: RootStackScreenProps<"LoginScreen">) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const disableBtn = useMemo(() => {
    return username === "" || password === "";
  }, [username, password]);

  const handleLogin = () => navigation.navigate("App");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formViewStyle}>
        <Text size={fontUtils.h(30)} fontFamily={fontUtils.sfprodisplay_500}>
          Login
        </Text>
        <Text
          mt={fontUtils.h(10)}
          mb={fontUtils.h(40)}
          lightColor="#757281"
          lineHeight={fontUtils.h(20)}
          size={fontUtils.h(15)}
        >
          Please enter your username/email and password to login to your account
        </Text>
        <Input
          placeholder="Username / Email"
          value={username}
          onChangeText={setUsername}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <Button title={"Login"} onPress={handleLogin} disabled={disableBtn} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: fontUtils.h(20),
  },
  formViewStyle: {
    flex: 1,
  },
});
