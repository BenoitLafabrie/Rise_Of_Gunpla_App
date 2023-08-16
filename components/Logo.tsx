import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const headerLogo = require("../assets/ROG_Cover_transparent.png");
export default function Logo(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={headerLogo} resizeMode={"center"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
