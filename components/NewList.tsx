import * as React from "react";
import { Image, FlatList, StyleSheet, Text, View } from "react-native";

const NewData = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "PG 1/60 GUNDAM ASTRAY RED FRAME",
    image_box:
      "https://riseofgunpla.com/wp-content/uploads/2020/07/pg-astrayr-boxart.webp",
    price: "200,00€",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    name: "HG 1/144 GUNDAM CALIBARN",
    image_box:
      "https://riseofgunpla.com/wp-content/uploads/2023/07/Gundam-Calibarn.webp",
    price: "25,00€",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "PG 1/60 GUNDAM EXIA",
    image_box:
      "https://riseofgunpla.com/wp-content/uploads/2020/07/pg-exia-no_led-boxart.webp",
    price: "209,00€",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    name: "HG 1/144 GUNDAM AERIAL REBUILD",
    image_box:
      "https://riseofgunpla.com/wp-content/uploads/2023/01/image3.webp",
    price: "25,00€",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    name: "HG 1/144 GUNDAM LFRITH",
    image_box:
      "https://riseofgunpla.com/wp-content/uploads/2022/06/HG-Gundam-Lfrith-the-witch-from-mercury-box-art.webp",
    price: "22,00€",
  },
];
export default function NewList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title_section}>New</Text>
      <FlatList
        data={NewData}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{ uri: item.image_box }}
              resizeMode={"center"}
              alt={item.name}
              style={styles.item}
            />
            <Text style={styles.footer}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 32,
  },
  item: {
    marginHorizontal: 8,
    height: 250,
    width: 250,
    maxHeight: 250,
    maxWidth: 280,
    marginBottom: -8,
  },
  name: {
    fontSize: 18,
    color: "#FB0041",
  },
  title_section: {
    fontSize: 42,
    color: "#FB0041",
    backgroundColor: "#fff",
    fontWeight: "700",
    marginBottom: -16,
  },

  footer: {
    paddingLeft: 8,
    marginTop: -16,
  },
  price: {
    paddingLeft: 8,
    color: "#FB0041",
    fontWeight: "700",
  },
});
