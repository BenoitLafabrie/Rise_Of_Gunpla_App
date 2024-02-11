import {
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
  useFonts,
} from "@expo-google-fonts/lato";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { useCallback, useEffect } from "react";
import { Platform } from "react-native";
import AccountScreen from "./Screens/AccountScreen";
import CartScreen from "./Screens/CartScreen";
import ExploreScreen from "./Screens/ExploreScreen";
import HomeScreen from "./Screens/HomeScreen";
import WishlistScreen from "./Screens/WishlistScreen";
import Logo from "./components/Logo";

const Tab = createBottomTabNavigator();
export default function App() {
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);
  async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = await Notifications.getExpoPushTokenAsync({
        projectId: "0672ea9d-154d-4439-bab4-0e69bc5bb496",
      });
      console.log(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    return token;
  }
  let [fontsLoaded, fontError] = useFonts({
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
  });

  const onLayoutRootView = useCallback(async (): Promise<void> => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          header: () => <Logo />,
          tabBarActiveTintColor: "#FB0041",
          tabBarInactiveTintColor: "#151515",
          tabBarStyle: {
            borderTopWidth: 0,
            borderTopColor: "transparent",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="home-sharp"
                size={32}
                color={focused ? "#FB0041" : "#151515"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarLabel: "Explore",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="search"
                size={32}
                color={focused ? "#FB0041" : "#151515"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarLabel: "Cart",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="cart"
                size={32}
                color={focused ? "#FB0041" : "#151515"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={WishlistScreen}
          options={{
            tabBarLabel: "Wishlist",
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="favorite"
                size={32}
                color={focused ? "#FB0041" : "#151515"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarLabel: "Account",
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="account-circle"
                size={32}
                color={focused ? "#FB0041" : "#151515"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
