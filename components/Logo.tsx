import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
export default function Logo(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/ROG_Cover_transparent.png")}
        style={{ objectFit: "contain", width: "90%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 15,
  },
});
