import React from "react";
import { Tabs } from "expo-router";
import Lucide from "@react-native-vector-icons/lucide";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#C98616",
        tabBarInactiveTintColor: "#8C827A",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopColor: "#EAE5DC",
          height: 60,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
      }}
    >
      {/* 1. Tab Home */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Lucide name="home" size={22} color={color} />
          ),
        }}
      />

      {/* 2. Tab Menu */}
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          tabBarIcon: ({ color }) => (
            <Lucide name="utensils" size={22} color={color} />
          ),
        }}
      />

      {/* 3. Tab What's On */}
      <Tabs.Screen
        name="whatson"
        options={{
          title: "What's On",
          tabBarIcon: ({ color }) => (
            <Lucide name="ticket" size={22} color={color} />
          ),
        }}
      />

      {/* 4. Tab Locations */}
      <Tabs.Screen
        name="locations"
        options={{
          title: "Locations",
          tabBarIcon: ({ color }) => (
            <Lucide name="store" size={22} color={color} />
          ),
        }}
      />

      {/* 5. Tab Rewards */}
      <Tabs.Screen
        name="rewards"
        options={{
          title: "Rewards",
          tabBarIcon: ({ color }) => (
            <Lucide name="gift" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
