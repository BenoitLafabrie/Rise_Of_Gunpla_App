import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
export default function AccountScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={require("../assets/adaptive-icon.png")}
          style={styles.account_logo}
        />
        <View>
          <Text
            style={{
              fontFamily: "Lato_400Regular",
              fontSize: 36,
              textAlign: "center",
            }}
          >
            ROG_Admin
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: "Lato_300Light",
              fontSize: 20,
              marginTop: 10,
              textAlign: "center",
            }}
          >
            ROG_Admin@riseofgunpla.com
          </Text>
        </View>
        <View>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Text style={styles.profile_button}>Edit Profile</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Text style={styles.profile_button}>My addresses</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Text style={styles.profile_button}>My payment methods</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Text style={styles.profile_button}>Support</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Text style={styles.log_out_button}>Log out</Text>
          </Pressable>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  account_logo: {
    height: 200,
    width: 200,
    borderRadius: 20,
    alignSelf: "center",
  },
  profile_button: {
    width: 380,
    fontFamily: "Lato_400Regular",
    textAlign: "center",
    fontSize: 28,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 25,
    padding: 10,
  },
  log_out_button: {
    fontFamily: "Lato_900Black",
    color: "#FB0041",
    textAlign: "center",
    fontSize: 28,
    borderWidth: 1,
    borderColor: "#FB0041",
    borderRadius: 20,
    marginTop: 25,
    padding: 10,
  },
});
