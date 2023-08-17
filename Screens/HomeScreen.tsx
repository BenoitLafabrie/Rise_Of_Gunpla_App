import { Image, StyleSheet, View, ScrollView, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import NewList from "../components/NewList";
import PopularList from "../components/PopularList";

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 8 }}>
      <NewList />
      <PopularList />
      <StatusBar style="auto" />
    </ScrollView>
  );
}
