import { Pressable, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";

export default function CartScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontFamily: "Lato_400Regular", fontSize: 30 }}>
          No orders yet,
        </Text>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Text
            style={{
              fontFamily: "Lato_400Regular",
              fontSize: 30,
              color: "#FB0041",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
          >
            let's go shopping!
          </Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
