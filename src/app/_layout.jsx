import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FAF7F2",
        },
        headerTintColor: "#292524",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    >
      {/* index redirect ke tabs */}
      <Stack.Screen name="index" options={{ headerShown: false }} />

      {/* tab bar utama */}
      <Stack.Screen name="tabs" options={{ headerShown: false }} />

      {/* halaman Stack Detail */}
      <Stack.Screen
        name="details"
        options={{
          headerTitle: "Detail Menu",
          headerShown: true,
          headerBackTitle: "Kembali",
        }}
      />
    </Stack>
  );
};

export default RootLayout;
