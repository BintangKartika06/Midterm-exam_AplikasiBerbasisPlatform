import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import Lucide from "@react-native-vector-icons/lucide";

const DetailsScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  // Data default jika dibuka tanpa parameter khusus
  const title = params.title;
  const price = params.price;
  const category = params.category;
  const description = params.description;
  const imageUri =
    params.imageUri ||
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&auto=format&fit=crop&q=80";

  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Banner Gambar */}
        <View style={styles.imageWrapper}>
          <Image source={{ uri: imageUri }} style={styles.foodImage} />
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryBadgeText}>{category}</Text>
          </View>
        </View>

        {/* Info Konten */}
        <View style={styles.bodyContainer}>
          <View style={styles.titlePriceRow}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.priceText}>{price}</Text>
          </View>

          {/* Rating & Tag */}
          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <Lucide name="star" size={16} color="#EAB308" />
              <Text style={styles.metaText}>4.9 (420+ reviews)</Text>
            </View>
            <View style={styles.metaDivider} />
            <View style={styles.metaItem}>
              <Lucide name="leaf" size={16} color="#15803D" />
              <Text style={styles.metaText}>Vegetarian</Text>
            </View>
          </View>

          <View style={styles.separator} />

          {/* Deskripsi */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Deskripsi Menu</Text>
            <Text style={styles.descriptionText}>{description}</Text>
          </View>

          {/* Catatan Bahan */}
          <View style={styles.ingredientsBox}>
            <Text style={styles.ingredientsTitle}>✨ Fresh Ingredients</Text>
            <Text style={styles.ingredientsText}>
              Dibuat setiap pagi menggunakan telur organik lokal Bali, susu segar,
              serta madu murni alami dari peternakan lokal.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom CTA Bar */}
      <View style={styles.footerBar}>
        <Pressable
          style={styles.orderButton}
          onPress={() => router.back()}
        >
          <Lucide name="shopping-bag" size={20} color="#FFFFFF" />
          <Text style={styles.orderButtonText}>Pesan Sekarang • {price}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FAF7F2",
  },
  scrollContent: {
    paddingBottom: 24,
  },
  imageWrapper: {
    width: "100%",
    height: 280,
    position: "relative",
  },
  foodImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E7E5E4",
  },
  categoryBadge: {
    position: "absolute",
    bottom: 16,
    left: 20,
    backgroundColor: "rgba(41, 37, 36, 0.85)",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  categoryBadgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  bodyContainer: {
    padding: 20,
  },
  titlePriceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
  },
  titleText: {
    flex: 1,
    fontSize: 22,
    fontWeight: "800",
    color: "#292524",
  },
  priceText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#C98616",
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 12,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  metaText: {
    fontSize: 13,
    color: "#57534E",
    fontWeight: "500",
  },
  metaDivider: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#D6D3D1",
  },
  separator: {
    height: 1,
    backgroundColor: "#E7E5E4",
    marginVertical: 18,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#292524",
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 22,
    color: "#57534E",
  },
  ingredientsBox: {
    backgroundColor: "#FDF1DC",
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#FCE7BE",
    gap: 6,
    marginTop: 8,
  },
  ingredientsTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#9A6309",
  },
  ingredientsText: {
    fontSize: 13,
    lineHeight: 20,
    color: "#784E07",
  },
  footerBar: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#EAE5DC",
  },
  orderButton: {
    backgroundColor: "#C98616",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 14,
    borderRadius: 14,
  },
  orderButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});

export default DetailsScreen;
