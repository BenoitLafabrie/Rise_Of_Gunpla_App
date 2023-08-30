import { Image, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

export default function ExploreScreen() {
  const [searchItem, setSearchItem] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <SearchBar
          searchItem={searchItem}
          setSearchItem={setSearchItem}
          clicked={clicked}
          setClicked={setClicked}
        />
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
  },
});
