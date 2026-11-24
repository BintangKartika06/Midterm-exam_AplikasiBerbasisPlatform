import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Lucide from "@react-native-vector-icons/lucide";

const LocationsScreen = () => {
  const router = useRouter();

  // Data Outlet
  const outlets = [
    {
      id: "1",
      name: "Milk & Madu Berawa",
      tagline: "Original Flagship",
      status: "• Open Now • Busy",
      distance: "1.2 km away",
      address: "Jl. Pantai Berawa No.52, Tibubeneng",
      hours: "7:00 AM – 10:00 PM",
      promoNote: "241 Pizza Tue/Sun",
      facilities: ["Kids Area & Play", "Live Music", "Pet Friendly", "Free Wi-Fi"],
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "2",
      name: "Milk & Madu Beach Road",
      tagline: "Batu Bolong Surf Vibe",
      status: "• Open Now",
      distance: "2.4 km away",
      address: "Jl. Pantai Batu Bolong No.92, Canggu",
      hours: "7:00 AM – 10:00 PM",
      promoNote: "Sunset Sessions",
      facilities: ["Near Batu Bolong", "Live Music", "241 Cocktails", "Free Wi-Fi"],
      image:
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&auto=format&fit=crop&q=80",
    },
  ];

  // Helper untuk membuka halaman Detail Outlet
  const openOutletDetails = (outlet) => {
    router.push({
      pathname: "/details",
      params: {
        title: outlet.name,
        price: "Table Reservation",
        category: outlet.tagline,
        description: `Pemesanan meja di ${outlet.name} (${outlet.address}). Buka setiap hari pukul ${outlet.hours}. Spesial: ${outlet.promoNote}. Fasilitas lengkap meliputi: ${outlet.facilities.join(", ")}.`,
        imageUri: outlet.image,
      },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 1. Header Bar */}
      <View style={styles.header}>
        <View>
          <Text style={styles.brandSubtitle}>MILK & MADU</Text>
          <Text style={styles.headerTitle}>Locations</Text>
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
        {/* 2. Switcher View Bar */}
        <View style={styles.switcherContainer}>
          <View style={styles.switchPill}>
            <Lucide name="list" size={16} color="#292524" />
            <Text style={styles.switchPillText}>List View</Text>
          </View>
        </View>

        {/* 3. Daftar Outlet (Berawa & Beach Road) */}
        <View style={styles.outletList}>
          {outlets.map((outlet) => (
            <View key={outlet.id} style={styles.outletCard}>
              {/* Gambar Banner Outlet */}
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: outlet.image }}
                  style={styles.outletImage}
                  resizeMode="cover"
                />
                <View style={styles.imageInnerOverlay}>
                  {/* Badges Status di Atas */}
                  <View style={styles.imageBadgesRow}>
                    <View style={styles.taglineBadge}>
                      <Text style={styles.taglineBadgeText}>
                        {outlet.tagline.toUpperCase()}
                      </Text>
                    </View>
                    <View style={styles.statusBadge}>
                      <Text style={styles.statusBadgeText}>{outlet.status}</Text>
                    </View>
                  </View>

                  {/* Jarak di Pojok Kanan Bawah */}
                  <View style={styles.distanceBadge}>
                    <Lucide name="navigation" size={12} color="#784E07" />
                    <Text style={styles.distanceBadgeText}>
                      {outlet.distance}
                    </Text>
                  </View>
                </View>
              </View>

              {/* Konten Info Outlet */}
              <View style={styles.cardContent}>
                {/* Title & Icon Chat */}
                <View style={styles.titleRow}>
                  <Text style={styles.outletTitle}>{outlet.name}</Text>
                  <View style={styles.chatIconBox}>
                    <Lucide name="message-square" size={16} color="#78716C" />
                  </View>
                </View>

                {/* Alamat */}
                <View style={styles.addressRow}>
                  <Lucide name="map-pin" size={14} color="#78716C" />
                  <Text style={styles.addressText}>{outlet.address}</Text>
                </View>

                {/* Jam Buka & Note Promo */}
                <View style={styles.hoursCard}>
                  <View style={styles.hoursLeft}>
                    <Lucide name="clock" size={14} color="#8C5E13" />
                    <Text style={styles.hoursText}>
                      Open Daily: {outlet.hours}
                    </Text>
                  </View>
                  <Text style={styles.promoNoteText}>{outlet.promoNote}</Text>
                </View>

                {/* Fasilitas Pills */}
                <View style={styles.facilitiesRow}>
                  {outlet.facilities.map((fac, idx) => (
                    <View key={idx} style={styles.facilityPill}>
                      <Text style={styles.facilityPillText}>{fac}</Text>
                    </View>
                  ))}
                </View>

                {/* Tombol Aksi: Directions, Book Table, Call */}
                <View style={styles.actionsRow}>
                  <Pressable
                    style={styles.actionBtnSecondary}
                    onPress={() => openOutletDetails(outlet)}
                  >
                    <Lucide name="navigation" size={14} color="#292524" />
                    <Text style={styles.actionBtnSecondaryText}>Directions</Text>
                  </Pressable>

                  <Pressable
                    style={styles.actionBtnPrimary}
                    onPress={() => openOutletDetails(outlet)}
                  >
                    <Lucide name="calendar" size={14} color="#292524" />
                    <Text style={styles.actionBtnPrimaryText}>Book Table</Text>
                  </Pressable>

                  <Pressable
                    style={styles.actionBtnSecondary}
                    onPress={() => openOutletDetails(outlet)}
                  >
                    <Lucide name="phone" size={14} color="#292524" />
                    <Text style={styles.actionBtnSecondaryText}>Call</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* 4. Bottom Banner "Where Strangers Become Regulars" */}
        <View style={styles.bottomBanner}>
          <View style={styles.bannerBadgeRow}>
            <Lucide name="sun" size={16} color="#C98616" />
            <Text style={styles.bannerBadgeText}>YOUR ISLAND CLUB</Text>
          </View>

          <Text style={styles.bannerTitle}>
            Where Strangers Become Regulars
          </Text>
          <Text style={styles.bannerDesc}>
            Planning a birthday, private brunch gathering, or pizza-making
            workshop? All venues cater custom group events with tailored menus.
          </Text>

          <View style={styles.bannerButtonsRow}>
            <Pressable
              style={styles.bannerPrimaryBtn}
              onPress={() =>
                openOutletDetails({
                  name: "Private Events & Gatherings",
                  tagline: "Island Club Catering",
                  address: "All Milk & Madu Bali Locations",
                  hours: "Available Daily by Reservation",
                  promoNote: "Tailored Food & Beverage Menus",
                  facilities: [
                    "Private Dining",
                    "Custom Pizza Workshop",
                    "Dedicated Sound System",
                  ],
                  image:
                    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&auto=format&fit=crop&q=80",
                })
              }
            >
              <Text style={styles.bannerPrimaryBtnText}>
                Inquire for Events
              </Text>
            </Pressable>

            <Pressable
              style={styles.bannerSecondaryBtn}
              onPress={() => router.push("/menu")}
            >
              <Text style={styles.bannerSecondaryBtnText}>View Menu</Text>
            </Pressable>
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
    paddingBottom: 28,
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

  // 2. Switcher View
  switcherContainer: {
    alignItems: "center",
  },
  switchPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#EAE5DC",
    gap: 8,
  },
  switchPillText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#292524",
  },

  // 3. Outlet List & Cards
  outletList: {
    gap: 16,
  },
  outletCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#EAE5DC",
  },
  imageContainer: {
    height: 190,
    width: "100%",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#292524",
  },
  outletImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  imageInnerOverlay: {
    flex: 1,
    justifyContent: "space-between",
    padding: 12,
  },
  imageBadgesRow: {
    flexDirection: "row",
    gap: 6,
  },
  taglineBadge: {
    backgroundColor: "#E8A229",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  taglineBadgeText: {
    fontSize: 10,
    fontWeight: "800",
    color: "#292524",
    letterSpacing: 0.5,
  },
  statusBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  statusBadgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#44403C",
  },
  distanceBadge: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    gap: 4,
  },
  distanceBadgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#44403C",
  },

  // Card Content
  cardContent: {
    padding: 16,
    gap: 10,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  outletTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#292524",
  },
  chatIconBox: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F4F0E8",
    justifyContent: "center",
    alignItems: "center",
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  addressText: {
    fontSize: 12,
    color: "#78716C",
  },
  hoursCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FCFAF6",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#F4EFE6",
  },
  hoursLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  hoursText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#57534E",
  },
  promoNoteText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#8C5E13",
  },
  facilitiesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 2,
  },
  facilityPill: {
    backgroundColor: "#FDF8F0",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#F7ECD6",
  },
  facilityPillText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#8C5E13",
  },

  // Actions Row
  actionsRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 6,
  },
  actionBtnSecondary: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F0E8",
    paddingVertical: 10,
    borderRadius: 20,
    gap: 6,
  },
  actionBtnSecondaryText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#292524",
  },
  actionBtnPrimary: {
    flex: 1.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8A229",
    paddingVertical: 10,
    borderRadius: 20,
    gap: 6,
  },
  actionBtnPrimaryText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#292524",
  },

  // 4. Bottom Banner
  bottomBanner: {
    backgroundColor: "#FCFAF6",
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: "#EAE5DC",
    gap: 8,
    marginTop: 4,
  },
  bannerBadgeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  bannerBadgeText: {
    fontSize: 10,
    fontWeight: "800",
    color: "#8C5E13",
    letterSpacing: 0.6,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#292524",
  },
  bannerDesc: {
    fontSize: 11,
    lineHeight: 17,
    color: "#78716C",
  },
  bannerButtonsRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 6,
  },
  bannerPrimaryBtn: {
    flex: 1.2,
    backgroundColor: "#E8A229",
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerPrimaryBtnText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#292524",
  },
  bannerSecondaryBtn: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EAE5DC",
  },
  bannerSecondaryBtnText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#292524",
  },
});

export default LocationsScreen;
