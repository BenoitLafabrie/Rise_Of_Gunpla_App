import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Keyboard, StyleSheet, TextInput, View } from "react-native";

export default function SearchBar({
  clicked,
  searchItem,
  setSearchItem,
  setClicked,
}: {
  clicked: any;
  searchItem: any;
  setSearchItem: any;
  setClicked: any;
}) {
  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Ionicons
          name="search"
          size={20}
          color={clicked ? "#FB0041" : "#151515"}
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Find your next Gunpla"
          value={searchItem}
          onChangeText={setSearchItem}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Ionicons
            name="close"
            size={20}
            color="#FB0041"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          />
        )}
      </View>
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "95%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#FB0041",
    borderRadius: 20,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#FB0041",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
    fontFamily: "Lato_400Regular",
  },
});
