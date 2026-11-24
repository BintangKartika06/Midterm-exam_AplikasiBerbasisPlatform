import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Lucide from "@react-native-vector-icons/lucide";

const HomeScreen = () => {
  const router = useRouter();

  // Data makanan Chef's Selection
  const chefsSelection = [
    {
      id: "1",
      title: "Madu Ricotta Hotcakes",
      price: "95K IDR",
      category: "Chef's Selection",
      description:
        "Stacked fluffy hotcakes, fresh honeycomb butter, wild forest berries, organic maple syrup, and whipped ricotta cheese.",
      image:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&auto=format&fit=crop&q=80",
      tag: "Vegetarian",
      rating: "4.9 (420+)",
    },
    {
      id: "2",
      title: "Smashed Avo Toast",
      price: "85K IDR",
      category: "Chef's Selection",
      description:
        "Creamy Bali avocado, pasture-raised poached eggs, feta crumbs, dukkah spice, and micro herbs on toasted sourdough.",
      image:
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop&q=80",
      tag: "House Bread",
      rating: "4.8 (310+)",
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
        {/* 1. Header Bar */}
        <View style={styles.header}>
          <View>
            <Text style={styles.brandSubtitle}>MILK & MADU</Text>
            <Text style={styles.headerTitle}>Home</Text>
          </View>

          <View style={styles.headerActions}>
            <Pressable style={styles.iconButton}>
              <Lucide name="bell" size={20} color="#292524" />
            </Pressable>
            <Image
              source={{
                uri: "https://placehold.co/600x400/png",
              }}
              style={styles.avatar}
            />
          </View>
        </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* 2. Greeting Section */}
        <View style={styles.greetingSection}>
          <Text style={styles.greetingTitle}>Good Morning in Bali 🔆</Text>
          <Text style={styles.greetingSubtitle}>
            Sunny 29°C • Tropical breeze in the air
          </Text>
        </View>

        {/* 3. Hero Card */}
        <View style={styles.heroCard}>
          <View style={styles.heroImageContainer}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000&auto=format&fit=crop&q=80",
              }}
              style={styles.heroImage}
              resizeMode="cover"
            />

            {/* Content Overlay di atas Gambar */}
            <View style={styles.heroContentOverlay}>
              {/* Tombol Favorit */}
              <Pressable style={styles.favoriteButton}>
                <Lucide name="heart" size={18} color="#0f0f0f" />
              </Pressable>

              {/* Overlay Konten Hero */}
              <View style={styles.heroOverlay}>
                <Text style={styles.heroBadge}>AUTHENTIC ISLAND VIBES</Text>
                <Text style={styles.heroTitle}>Home of Bali's Best Brunch</Text>
                <Text style={styles.heroSubtitle}>
                  Where strangers become regulars since 2014
                </Text>
              </View>
            </View>
          </View>

          {/* Call to Actions Buttons di bawah Hero */}
          <View style={styles.ctaContainer}>
            <Pressable
              style={styles.ctaPrimary}
              onPress={() => router.push("/locations")}
            >
              <Lucide name="calendar" size={18} color="#292524" />
              <Text style={styles.ctaPrimaryText}>BOOK A TABLE</Text>
            </Pressable>

            <Pressable
              style={styles.ctaSecondary}
              onPress={() => router.push("/menu")}
            >
              <Lucide name="shopping-bag" size={18} color="#292524" />
              <Text style={styles.ctaSecondaryText}>ORDER AHEAD</Text>
            </Pressable>
          </View>
        </View>

        {/* 4. Chef's Selection */}
        <View style={styles.sectionHeaderRow}>
          <View>
            <Text style={styles.sectionBadge}>CHEF'S SELECTION</Text>
            <Text style={styles.sectionHeading}>Made Fresh Every Morning</Text>
          </View>
          <Pressable
            style={styles.fullMenuLink}
            onPress={() => router.push("/menu")}
          >
            <Text style={styles.fullMenuText}>Full Menu</Text>
            <Lucide name="chevron-right" size={14} color="#8C5E13" />
          </Pressable>
        </View>

        {/* Horizontal Food List */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        >
          {chefsSelection.map((item) => (
            <Pressable
              key={item.id}
              style={styles.foodCard}
              onPress={() =>
                router.push({
                  pathname: "/details",
                  params: {
                    title: item.title,
                    price: item.price,
                    category: item.category,
                    description: item.description,
                    imageUri: item.image,
                  },
                })
              }
            >
              {/* Gambar Menu */}
              <View style={styles.foodImageWrapper}>
                <Image source={{ uri: item.image }} style={styles.foodImage} />
                <View style={styles.priceBadge}>
                  <Text style={styles.priceBadgeText}>{item.price}</Text>
                </View>
                <View style={styles.plusButton}>
                  <Lucide name="plus" size={16} color="#292524" />
                </View>
              </View>

              {/* Info Menu */}
              <View style={styles.foodInfo}>
                <Text style={styles.foodTitle} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.foodDesc} numberOfLines={2}>
                  {item.description}
                </Text>

                {/* Footer Tag & Rating */}
                <View style={styles.foodMetaRow}>
                  <View style={styles.tagBadge}>
                    <Lucide name="leaf" size={12} color="#44403C" />
                    <Text style={styles.tagText}>{item.tag}</Text>
                  </View>
                  <View style={styles.ratingBadge}>
                    <Lucide name="star" size={12} color="#EAB308" />
                    <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>

        {/* 5. Club & Promo Cards (2 Kolom) */}
        <View style={styles.promoGrid}>
          {/* Card 1: Sunset Sessions */}
          <View style={styles.promoCard}>
            <View style={[styles.promoIconBox, { backgroundColor: "#FCE7E7" }]}>
              <Lucide name="gift" size={20} color="#E11D48" />
            </View>
            <Text style={styles.promoBadge}>241 SUNSET CLUB</Text>
            <Text style={styles.promoTitle}>Sunset Sessions</Text>
            <Text style={styles.promoText}>
              2-for-1 cocktails while the tropical sun goes down.
            </Text>
            <Pressable
              style={styles.promoLink}
              onPress={() => router.push("/whatson")}
            >
              <Text style={styles.promoLinkText}>Explore Vibes</Text>
              <Lucide name="arrow-right" size={14} color="#8C5E13" />
            </Pressable>
          </View>

          {/* Card 2: Kids & Playgrounds */}
          <View style={styles.promoCard}>
            <View style={[styles.promoIconBox, { backgroundColor: "#E6F4EA" }]}>
              <Lucide name="users" size={20} color="#16A34A" />
            </View>
            <Text style={styles.promoBadge}>LITTLE MADU CLUB</Text>
            <Text style={styles.promoTitle}>Kids & Playgrounds</Text>
            <Text style={styles.promoText}>
              Pizza workshops, craft areas & spacious garden lawns.
            </Text>
            <Pressable
              style={styles.promoLink}
              onPress={() => router.push("/whatson")}
            >
              <Text style={styles.promoLinkText}>Book Party</Text>
              <Lucide name="arrow-right" size={14} color="#8C5E13" />
            </Pressable>
          </View>
        </View>

        {/* 6. Live & Local Music */}
        <View style={styles.musicCard}>
          <View style={styles.musicHeader}>
            <View style={styles.musicTitleRow}>
              <View style={styles.musicIconCircle}>
                <Lucide name="music" size={18} color="#C98616" />
              </View>
              <View>
                <Text style={styles.musicTitle}>Live & Local Music</Text>
                <Text style={styles.musicSubtitle}>
                  This week's sundown lineup
                </Text>
              </View>
            </View>
            <View style={styles.freeBadge}>
              <Text style={styles.freeBadgeText}>Free Entry</Text>
            </View>
          </View>

          {/* Lineup Schedule */}
          <View style={styles.scheduleList}>
            <View style={styles.scheduleRow}>
              <View style={styles.scheduleLeft}>
                <View style={[styles.dot, { backgroundColor: "#EAB308" }]} />
                <Text style={styles.scheduleName}>Tuesday 241 Session</Text>
              </View>
              <Text style={styles.scheduleTime}>6:00 PM – 9:00 PM</Text>
            </View>

            <View style={styles.scheduleRow}>
              <View style={styles.scheduleLeft}>
                <View style={[styles.dot, { backgroundColor: "#16A34A" }]} />
                <Text style={styles.scheduleName}>Friday Sunset Acoustic</Text>
              </View>
              <Text style={styles.scheduleTime}>6:00 PM – 9:00 PM</Text>
            </View>

            <View style={styles.scheduleRow}>
              <View style={styles.scheduleLeft}>
                <View style={[styles.dot, { backgroundColor: "#EAB308" }]} />
                <Text style={styles.scheduleName}>Sunday Sunny Grooves</Text>
              </View>
              <Text style={styles.scheduleTime}>11:00 AM & 6:00 PM</Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
    paddingBottom: 24,
    gap: 18,
  },

  // 1. Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 12,
    backgroundColor: "#FCFBF8",
    zIndex: 10,
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

  // 2. Greeting
  greetingSection: {
    gap: 2,
  },
  greetingTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#292524",
  },
  greetingSubtitle: {
    fontSize: 13,
    color: "#78716C",
  },

  // 3. Hero Card
  heroCard: {
    borderRadius: 24,
    backgroundColor: "#292524",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  heroImageContainer: {
    height: 250,
    width: "100%",
    position: "relative",
    overflow: "hidden",
  },
  heroImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
  heroContentOverlay: {
    flex: 1,
    justifyContent: "space-between",
    padding: 16,
  },
  favoriteButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
  },
  heroOverlay: {
    backgroundColor: "rgba(24, 21, 18, 0.65)",
    padding: 14,
    borderRadius: 16,
    gap: 2,
  },
  heroBadge: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.6,
    color: "#F6C15B",
  },
  heroTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  heroSubtitle: {
    fontSize: 11,
    color: "#E7E5E4",
  },
  ctaContainer: {
    flexDirection: "row",
    padding: 14,
    gap: 12,
    backgroundColor: "#FFFFFF",
  },
  ctaPrimary: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#E8A229",
    borderRadius: 25,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  ctaPrimaryText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#292524",
    letterSpacing: 0.5,
  },
  ctaSecondary: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#F9F6F0",
    borderRadius: 25,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: "#EAE5DC",
  },
  ctaSecondaryText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#292524",
    letterSpacing: 0.5,
  },

  // 4. Chef's Selection
  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 4,
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
  fullMenuLink: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    paddingBottom: 2,
  },
  fullMenuText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#8C5E13",
  },
  horizontalList: {
    gap: 14,
    paddingRight: 8,
  },
  foodCard: {
    width: 230,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#EAE5DC",
  },
  foodImageWrapper: {
    height: 140,
    position: "relative",
  },
  foodImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E7E5E4",
  },
  priceBadge: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  priceBadgeText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#292524",
  },
  plusButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#E8A229",
    justifyContent: "center",
    alignItems: "center",
  },
  foodInfo: {
    padding: 12,
    gap: 6,
  },
  foodTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#292524",
  },
  foodDesc: {
    fontSize: 11,
    lineHeight: 16,
    color: "#78716C",
  },
  foodMetaRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
  },
  tagBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  tagText: {
    fontSize: 11,
    color: "#57534E",
    fontWeight: "500",
  },
  ratingBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 11,
    color: "#78716C",
    fontWeight: "600",
  },

  // 5. Promo Grid
  promoGrid: {
    flexDirection: "row",
    gap: 12,
  },
  promoCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: "#EAE5DC",
    gap: 6,
  },
  promoIconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  promoBadge: {
    fontSize: 10,
    fontWeight: "800",
    color: "#8C5E13",
    letterSpacing: 0.5,
  },
  promoTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#292524",
  },
  promoText: {
    fontSize: 11,
    lineHeight: 16,
    color: "#78716C",
  },
  promoLink: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 6,
  },
  promoLinkText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#8C5E13",
  },

  // 6. Live Music
  musicCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: "#EAE5DC",
    gap: 14,
  },
  musicHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  musicTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  musicIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FDF1DC",
    justifyContent: "center",
    alignItems: "center",
  },
  musicTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#292524",
  },
  musicSubtitle: {
    fontSize: 11,
    color: "#78716C",
  },
  freeBadge: {
    backgroundColor: "#F4EFE6",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  freeBadgeText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#57534E",
  },
  scheduleList: {
    gap: 8,
  },
  scheduleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FAF6EF",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  scheduleLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },
  scheduleName: {
    fontSize: 12,
    fontWeight: "600",
    color: "#292524",
  },
  scheduleTime: {
    fontSize: 11,
    fontWeight: "600",
    color: "#78716C",
  },
});

export default HomeScreen;
