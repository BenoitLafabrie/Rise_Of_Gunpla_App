import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "./Screens/HomeScreen";
import ExploreScreen from "./Screens/ExploreScreen";
import CartScreen from "./Screens/CartScreen";
import WishlistScreen from "./Screens/WishlistScreen";
import AccountScreen from "./Screens/AccountScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#FB0041",
          tabBarInactiveTintColor: "#151515",
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
