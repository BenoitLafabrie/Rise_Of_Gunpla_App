import { StyleSheet, TextInput, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";

export default function LogInScreen() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
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
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
    fontFamily: "Lato_400Regular",
  },
});
