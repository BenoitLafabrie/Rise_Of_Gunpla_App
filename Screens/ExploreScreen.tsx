import { Image, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

export default function ExploreScreen() {
  const [searchItem, setSearchItem] = useState("");
  const [clicked, setClicked] = useState(false);
  const SearchImage = require("../assets/ROG_Search.png");

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
      <View>
        <Image
          source={SearchImage}
          style={{ resizeMode: "contain", height: 600, width: 600 }}
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
