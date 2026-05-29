import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import GenreScreen from "../screens/GenreScreen";
import TrendingScreen from "../screens/TrendingScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DetailScreen from "../screens/DetailScreen"; // 🔥 TAMBAH INI

import { Home, Film, Flame, User } from "lucide-react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// 🔥 TAB (JANGAN DIUBAH)
function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#020617" },
        tabBarActiveTintColor: "#6366f1",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />

      <Tab.Screen
        name="Genre"
        component={GenreScreen}
        options={{
          tabBarIcon: ({ color }) => <Film color={color} />,
        }}
      />

      <Tab.Screen
        name="Trending"
        component={TrendingScreen}
        options={{
          tabBarIcon: ({ color }) => <Flame color={color} />,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <User color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

// 🔥 STACK (INI YANG TAMBAH)
export default function Router() {
  return (
    <Stack.Navigator>
      {/* TAB UTAMA */}
      <Stack.Screen
        name="Main"
        component={MainTab}
        options={{ headerShown: false }}
      />

      {/* 🔥 DETAIL (TIDAK MENGGANGGU TAB) */}
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerShown: true,
          title: "Detail Movie",
        }}
      />
    </Stack.Navigator>
  );
}
