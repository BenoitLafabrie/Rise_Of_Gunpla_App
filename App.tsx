import * as React from "react";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {
  BottomTabHeaderProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import {
  useFonts,
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
} from "@expo-google-fonts/lato";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Logo from "./components/Logo";
import HomeScreen from "./Screens/HomeScreen";
import ExploreScreen from "./Screens/ExploreScreen";
import CartScreen from "./Screens/CartScreen";
import WishlistScreen from "./Screens/WishlistScreen";
import AccountScreen from "./Screens/AccountScreen";
import "react-native-gesture-handler";

const Tab = createBottomTabNavigator();
export default function App() {
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
                name="ios-home-sharp"
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
                name="ios-search"
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
                name="ios-cart"
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
