import { Image, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontFamily: "Lato_400Regular", fontSize: 32 }}>
          Explore
        </Text>
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
