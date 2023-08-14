import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const placeholderImage = require("./assets/Placeholder_image.webp");

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View>
          <Image source={placeholderImage} resizeMode="contain" />
        </View>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
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
