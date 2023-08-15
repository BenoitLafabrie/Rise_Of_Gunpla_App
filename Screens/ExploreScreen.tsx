import { Image, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";

const placeholderImage = require("../assets/Placeholder_image.webp");
export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={placeholderImage} resizeMode="contain" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
