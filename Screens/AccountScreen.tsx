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

export default function AccountScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require("../assets/adaptive-icon.png")}
          style={styles.account_logo}
        />
        <View>
          <Text style={styles.username}>ROG_Admin</Text>
        </View>
        <View>
          <Text style={styles.email}>ROG_Admin@riseofgunpla.com</Text>
        </View>
        <View style={{ padding: 5 }}>
          <Pressable
            onPress={() => navigation.navigate("Home")}
            style={styles.pressable}
          >
            <Text style={styles.profile_button}>Edit Profile</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Home")}
            style={styles.pressable}
          >
            <Text style={styles.profile_button}>My addresses</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Home")}
            style={styles.pressable}
          >
            <Text style={styles.profile_button}>My orders</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Home")}
            style={styles.pressable}
          >
            <Text style={styles.profile_button}>FAQ</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Home")}
            style={{
              marginTop: 25,
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
    height: 150,
    width: 150,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: -12,
  },
  username: {
    fontFamily: "Lato_400Regular",
    fontSize: 36,
    textAlign: "center",
  },
  email: {
    fontFamily: "Lato_300Light",
    fontSize: 18,
    padding: 5,
    textAlign: "center",
  },
  pressable: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  profile_button: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: 340,
    height: 50,
    fontFamily: "Lato_700Bold",
    textAlign: "center",
    lineHeight: 25,
    fontSize: 24,
    borderWidth: 1,
    borderRadius: 25,
    marginTop: 25,
    padding: 15,
  },

  log_out_button: {
    width: 180,
    height: 50,
    alignSelf: "center",
    fontFamily: "Lato_900Black",
    color: "#FB0041",
    textAlign: "center",
    lineHeight: 25,
    fontSize: 28,
    borderWidth: 1,
    borderColor: "#FB0041",
    borderRadius: 25,
    marginTop: 25,
    padding: 15,
  },
});
