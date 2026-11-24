import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Lucide from "@react-native-vector-icons/lucide";

const MenuScreen = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All Dishes");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All Dishes",
    "Brekky Sets",
    "Artisan Pizza",
    "Bowls & Salads",
    "Coffee & Drinks",
  ];

  const menuItems = [
    {
      id: "1",
      title: "Ricotta Hotcakes",
      price: "115K IDR",
      category: "Chef Pick • Signature",
      description:
        "Fluffy whipped ricotta pancakes topped with artisanal honeycomb butter, seasonal hand-picked berries, wild Bali bee pollen & pure Canadian maple syrup.",
      image: "https://placehold.co/600x400/png",
      tags: ["Veg", "Iconic"],
      initialQuantity: 1,
    },
    {
      id: "2",
      title: "Burrata Prosciutto Pizza",
      price: "145K IDR",
      category: "Wood-Fired • 2-for-1 Eligible",
      description:
        "Hand-stretched fermented sourdough base, Italian San Marzano sauce, fresh torn burrata, 18-month aged prosciutto, wild rocket & cold-pressed EVOO.",
      image: "https://placehold.co/600x400/png",
      tags: ["Neapolitan", "Dinner & Lunch"],
      initialQuantity: 0,
    },
    {
      id: "3",
      title: "The Smashed Avo",
      price: "95K IDR",
      category: "Vegetarian • GF Option",
      description:
        "Lush Bedugul highland avocado on artisan sourdough toast, two soft poached pasture eggs, crumbled Greek feta, dukkah spice & lemon wedge.",
      image: "https://placehold.co/600x400/png",
      tags: ["Organic Eggs", "All Day"],
      initialQuantity: 1,
    },
    {
      id: "4",
      title: "Madu Super Bowl",
      price: "90K IDR",
      category: "Vegan • Gluten-Free",
      description:
        "Organic Amazon acai blended with Bali red dragonfruit, house baked coconut granola, chia seeds, shaved coconut & fragrant tropical berries.",
      image: "https://placehold.co/600x400/png",
      tags: ["Raw & Fresh", "Superfood"],
      initialQuantity: 0,
    },
    {
      id: "5",
      title: "Iced Coconut Latte",
      price: "45K IDR",
      category: "Cold Brew • Plant Milk",
      description:
        "Slow-steeped Kintamani single-origin cold brew poured over chilled fresh coconut milk and infused with organic Madu blossom nectar.",
      image: "https://placehold.co/600x400/png",
      tags: ["Kintamani Origin", "Dairy Free"],
      initialQuantity: 0,
    },
  ];

  // Helper untuk membuka halaman Detail
  const openDetails = (item) => {
    router.push({
      pathname: "/details",
      params: {
        title: item.title,
        price: item.price,
        category: item.category,
        description: item.description,
        imageUri: item.image,
      },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 1. Header Bar */}
      <View style={styles.header}>
        <View>
          <Text style={styles.brandSubtitle}>MILK & MADU</Text>
          <Text style={styles.headerTitle}>Menu</Text>
        </View>

        <View style={styles.headerActions}>
          <Pressable style={styles.iconButton}>
            <Lucide name="bell" size={20} color="#292524" />
          </Pressable>
          <Image
            source={{ uri: "https://placehold.co/600x400/png" }}
            style={styles.avatar}
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* 2. Search Bar */}
        <View style={styles.searchContainer}>
          <Lucide name="search" size={18} color="#78716C" />
          <TextInput
            placeholder="Search dishes, smoothie bowls, coffees..."
            placeholderTextColor="#A8A29E"
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.searchInput}
          />
        </View>

        {/* 3. Filter Kategori Chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesList}
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <Pressable
                key={cat}
                style={[
                  styles.categoryChip,
                  isActive && styles.categoryChipActive,
                ]}
                onPress={() => setSelectedCategory(cat)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    isActive && styles.categoryTextActive,
                  ]}
                >
                  {cat}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* 4. Brekky Set Highlight Card */}
        <View style={styles.brekkyCard}>
          <View style={styles.brekkyHeader}>
            <View style={styles.brekkyBadge}>
              <Text style={styles.brekkyBadgeText}>BALI'S #1 BRUNCH DEAL</Text>
            </View>
            <Text style={styles.brekkyPrice}>110K IDR</Text>
          </View>

          <Text style={styles.brekkyTitle}>The 110K Brekky Set</Text>
          <Text style={styles.brekkyDesc}>
            Born in 2014 & still Bali's golden morning ritual. Any signature
            brekky main + artisan barista coffee + fresh cold-pressed tropical juice.
          </Text>

          {/* 3 Steps / Inclusions */}
          <View style={styles.brekkySteps}>
            <View style={styles.stepItem}>
              <View style={styles.stepIconCircle}>
                <Lucide name="utensils" size={16} color="#8C5E13" />
              </View>
              <Text style={styles.stepText}>1. Any Brekky</Text>
            </View>

            <View style={styles.stepItem}>
              <View style={styles.stepIconCircle}>
                <Lucide name="coffee" size={16} color="#8C5E13" />
              </View>
              <Text style={styles.stepText}>2. Coffee</Text>
            </View>

            <View style={styles.stepItem}>
              <View style={styles.stepIconCircle}>
                <Lucide name="sparkles" size={16} color="#8C5E13" />
              </View>
              <Text style={styles.stepText}>3. Fresh Juice</Text>
            </View>
          </View>

          {/* Button CTA */}
          <Pressable
            style={styles.brekkyButton}
            onPress={() =>
              openDetails({
                title: "The 110K Brekky Set",
                price: "110K IDR",
                category: "Bali's #1 Brunch Deal",
                description:
                  "Born in 2014 & still Bali's golden morning ritual. Any signature brekky main + artisan barista coffee + fresh cold-pressed tropical juice.",
                image: "https://placehold.co/600x400/png",
              })
            }
          >
            <Lucide name="plus" size={16} color="#292524" />
            <Text style={styles.brekkyButtonText}>BUILD YOUR SET • 110K</Text>
          </Pressable>
        </View>

        {/* 5. Section Header */}
        <View style={styles.sectionHeaderRow}>
          <View>
            <Text style={styles.sectionBadge}>ARTISAN CRAFT</Text>
            <Text style={styles.sectionHeading}>Signature Dishes</Text>
          </View>
          <Text style={styles.itemCountText}>{menuItems.length} items</Text>
        </View>

        {/* 6. List Menu Dishes */}
        <View style={styles.dishList}>
          {menuItems.map((item) => (
            <Pressable
              key={item.id}
              style={styles.dishCard}
              onPress={() => openDetails(item)}
            >
              {/* Gambar Menu */}
              <View style={styles.dishImageWrapper}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.dishImage}
                  resizeMode="cover"
                />
                {/* Badges di atas gambar */}
                <View style={styles.dishBadgesOverlay}>
                  <View style={styles.dishBadge}>
                    <Text style={styles.dishBadgeText}>{item.category}</Text>
                  </View>
                </View>
                {/* Price Tag di pojok kanan bawah gambar */}
                <View style={styles.dishPriceTag}>
                  <Text style={styles.dishPriceTagText}>{item.price}</Text>
                </View>
              </View>

              {/* Info Menu */}
              <View style={styles.dishInfo}>
                <Text style={styles.dishTitle}>{item.title}</Text>
                <Text style={styles.dishDesc} numberOfLines={2}>
                  {item.description}
                </Text>

                {/* Footer Baris Tag & Action Button */}
                <View style={styles.dishActionRow}>
                  <View style={styles.tagsContainer}>
                    {item.tags.map((tag, idx) => (
                      <View key={idx} style={styles.tagPill}>
                        <Text style={styles.tagPillText}>{tag}</Text>
                      </View>
                    ))}
                  </View>

                  {/* Quantity Stepper atau Add Button */}
                  {item.initialQuantity > 0 ? (
                    <View style={styles.stepperContainer}>
                      <Pressable style={styles.stepBtn}>
                        <Lucide name="minus" size={14} color="#292524" />
                      </Pressable>
                      <Text style={styles.stepNumber}>
                        {item.initialQuantity}
                      </Text>
                      <Pressable style={styles.stepBtnPrimary}>
                        <Lucide name="plus" size={14} color="#292524" />
                      </Pressable>
                    </View>
                  ) : (
                    <Pressable
                      style={styles.addDishButton}
                      onPress={() => openDetails(item)}
                    >
                      <Lucide name="plus" size={14} color="#292524" />
                      <Text style={styles.addDishButtonText}>ADD</Text>
                    </Pressable>
                  )}
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      {/* 7. Floating Order Cart Bar */}
      <View style={styles.cartFloatContainer}>
        <View style={styles.cartContent}>
          <View style={styles.cartLeft}>
            <View style={styles.cartCountBadge}>
              <Text style={styles.cartCountText}>2</Text>
            </View>
            <View>
              <Text style={styles.cartLabel}>YOUR ORDER</Text>
              <Text style={styles.cartTotal}>210,000 IDR</Text>
            </View>
          </View>

          <Pressable
            style={styles.cartButton}
            onPress={() =>
              openDetails({
                title: "Your Order Summary",
                price: "210,000 IDR",
                category: "Active Cart",
                description:
                  "1x Ricotta Hotcakes (115K) + 1x The Smashed Avo (95K). Total pesanan Anda siap untuk diproses di outlet Milk & Madu pilihan.",
                image: "https://placehold.co/600x400/png",
              })
            }
          >
            <Text style={styles.cartButtonText}>VIEW CART</Text>
            <Lucide name="arrow-right" size={16} color="#292524" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FCFBF8",
  },
  scrollContent: {
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 90, // ruang untuk floating cart bar
    gap: 16,
  },

  // 1. Header Bar
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 12,
    backgroundColor: "#FCFBF8",
  },
  brandSubtitle: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.8,
    color: "#8C5E13",
    textTransform: "uppercase",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#292524",
    marginTop: -2,
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#F4F0E8",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#E7E5E4",
  },

  // 2. Search Bar
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#EAE5DC",
    gap: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
    color: "#292524",
    padding: 0,
  },

  // 3. Category Chips
  categoriesList: {
    gap: 8,
  },
  categoryChip: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#EAE5DC",
  },
  categoryChipActive: {
    backgroundColor: "#FAF1DF",
    borderColor: "#C98616",
  },
  categoryText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#78716C",
  },
  categoryTextActive: {
    color: "#8C5E13",
    fontWeight: "700",
  },

  // 4. Brekky Set Card
  brekkyCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: "#EAE5DC",
    gap: 10,
  },
  brekkyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brekkyBadge: {
    backgroundColor: "#784E07",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  brekkyBadgeText: {
    fontSize: 10,
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: 0.5,
  },
  brekkyPrice: {
    fontSize: 14,
    fontWeight: "800",
    color: "#8C5E13",
  },
  brekkyTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#292524",
  },
  brekkyDesc: {
    fontSize: 12,
    lineHeight: 18,
    color: "#78716C",
  },
  brekkySteps: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FCFAF6",
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginTop: 4,
  },
  stepItem: {
    alignItems: "center",
    gap: 4,
    flex: 1,
  },
  stepIconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#FCE7BE",
    justifyContent: "center",
    alignItems: "center",
  },
  stepText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#57534E",
  },
  brekkyButton: {
    backgroundColor: "#E8A229",
    borderRadius: 20,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginTop: 6,
  },
  brekkyButtonText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#292524",
    letterSpacing: 0.5,
  },

  // 5. Section Header
  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 6,
  },
  sectionBadge: {
    fontSize: 11,
    fontWeight: "800",
    color: "#8C5E13",
    letterSpacing: 0.6,
  },
  sectionHeading: {
    fontSize: 17,
    fontWeight: "800",
    color: "#292524",
  },
  itemCountText: {
    fontSize: 12,
    color: "#78716C",
    fontWeight: "600",
  },

  // 6. Dish Cards
  dishList: {
    gap: 16,
  },
  dishCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#EAE5DC",
  },
  dishImageWrapper: {
    height: 180,
    position: "relative",
  },
  dishImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E7E5E4",
  },
  dishBadgesOverlay: {
    position: "absolute",
    top: 10,
    left: 10,
    flexDirection: "row",
    gap: 6,
  },
  dishBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  dishBadgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#44403C",
  },
  dishPriceTag: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  dishPriceTagText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#292524",
  },
  dishInfo: {
    padding: 14,
    gap: 6,
  },
  dishTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#292524",
  },
  dishDesc: {
    fontSize: 12,
    lineHeight: 18,
    color: "#78716C",
  },
  dishActionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  tagsContainer: {
    flexDirection: "row",
    gap: 6,
  },
  tagPill: {
    backgroundColor: "#F5F3EF",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  tagPillText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#78716C",
  },
  stepperContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FAF7F2",
    borderRadius: 16,
    padding: 3,
    borderWidth: 1,
    borderColor: "#EAE5DC",
    gap: 8,
  },
  stepBtn: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  stepBtnPrimary: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#E8A229",
    justifyContent: "center",
    alignItems: "center",
  },
  stepNumber: {
    fontSize: 12,
    fontWeight: "700",
    color: "#292524",
    minWidth: 14,
    textAlign: "center",
  },
  addDishButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8A229",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 4,
  },
  addDishButtonText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#292524",
  },

  // 7. Floating Order Cart
  cartFloatContainer: {
    position: "absolute",
    bottom: 12,
    left: 18,
    right: 18,
  },
  cartContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1C1917",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  cartLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cartCountBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#E8A229",
    justifyContent: "center",
    alignItems: "center",
  },
  cartCountText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#292524",
  },
  cartLabel: {
    fontSize: 9,
    fontWeight: "700",
    color: "#A8A29E",
    letterSpacing: 0.5,
  },
  cartTotal: {
    fontSize: 13,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  cartButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8A229",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  cartButtonText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#292524",
  },
});

export default MenuScreen;
