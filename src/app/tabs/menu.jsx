import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Lucide from "@react-native-vector-icons/lucide";

const MenuScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconCircle}>
          <Lucide name="utensils" size={38} color="#C98616" />
        </View>
        <Text style={styles.title}>Menu Milk & Madu</Text>
        <Text style={styles.subtitle}>
          Halaman Menu sedang disiapkan untuk task berikutnya.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF7F2",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    gap: 12,
  },
  iconCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: "#FDF1DC",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#292524",
  },
  subtitle: {
    fontSize: 14,
    color: "#78716C",
    textAlign: "center",
  },
});

export default MenuScreen;
