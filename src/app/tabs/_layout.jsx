import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
    return (
        <Stack
        screenOptions={{
            headerStyle: {
                backgroundColor: "#FAF7F2"
            },
            headerTintColor: "#292524",
            headerTitleStyle: {
                fontWeight: "bold",
            },
            headerTitleAlign: "center",
        }}
        >
            {/* tab bar utama */}
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

            {/* halaman stack detail */}
            <Stack.Screen 
                name="details"
                options={{
                    headerTitle: "Detail Menu",
                    headerShown: true,
                    headerBackTitles: "Kembali",
                }}
                />
        </Stack>
    );
};

export default RootLayout;