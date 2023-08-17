import * as React from "react";
import { Image, FlatList, StyleSheet, Text, View } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    name: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    name: "Fourth Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    name: "Fifth Item",
  },
];

type ItemProps = { name: string };

const Item = ({ name }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
  </View>
);

const Footer = ({ name }: ItemProps) => (
  <View style={styles.footer}>
    <Text style={styles.name}>{name}</Text>
  </View>
);
export default function PopularList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title_section}>Popular</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <View style={styles.item_container}>
            <Item name={item.name} />
            <Footer name={item.name} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 8,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginHorizontal: 8,
    marginTop: 8,
    height: 250,
    width: 280,
    maxHeight: 250,
    maxWidth: 280,
  },
  name: {
    fontSize: 24,
  },
  title_section: {
    fontSize: 42,
    color: "#FB0041",
    backgroundColor: "#fff",
  },
  item_container: {
    flex: 1,
  },
  footer: {
    paddingTop: 8,
    paddingLeft: 8,
  },
});
