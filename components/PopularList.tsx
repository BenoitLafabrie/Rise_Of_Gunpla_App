import * as React from "react";
import { Image, FlatList, StyleSheet, Text, View } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "RG 1/144 HI-NU GUNDAM RX-93-2",
    image_box:
      "https://riseofgunpla.com/wp-content/uploads/2021/04/rg-hi-nu-ver-ka-min.webp",
    price: "55,00€",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "MG 1/100 GUNDAM BARBATOS",
    image_box:
      "https://riseofgunpla.com/wp-content/uploads/2020/07/mg-barbatos-boxart.webp",
    price: "55,00€",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    name: "PG UNLEASHED RX-78-2 GUNDAM",
    image_box:
      "https://riseofgunpla.com/wp-content/uploads/2020/10/130604457_1007649016397640_8736139746410154253_o.webp",
    price: "280,00€",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    name: "MG 1/100 WING GUNDAM ZERO EW VER. KA",
    image_box:
      "https://riseofgunpla.com/wp-content/uploads/2020/07/gkgundamkit-mg-1100-wing-gundam-zero-ew-ver-ka-8d88a36ce60a178.webp",
    price: "75,00€",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    name: "RG 1/144 GUNDAM ASTRAY RED FRAME",
    image_box:
      "https://riseofgunpla.com/wp-content/uploads/2020/07/GUN83120_1.webp",
    price: "32,00€",
  },
];
export default function PopularList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title_section}>Popular</Text>
      <FlatList
        data={DATA}
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
    marginTop: 16,
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
