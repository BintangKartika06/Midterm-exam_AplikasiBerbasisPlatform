import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Lucide from "@react-native-vector-icons/lucide";

const WhatsOnScreen = () => {
  const router = useRouter();

  // Helper untuk membuka halaman Details
  const openEventDetails = (event) => {
    router.push({
      pathname: "/details",
      params: {
        title: event.title,
        price: event.priceTag,
        category: event.category,
        description: event.description,
        imageUri: event.image,
      },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 1. Header Bar */}
      <View style={styles.header}>
        <View>
          <Text style={styles.brandSubtitle}>MILK & MADU</Text>
          <Text style={styles.headerTitle}>What's On</Text>
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
        {/* 2. Top Title Section */}
        <View style={styles.topSection}>
          <Text style={styles.pageHeading}>What's On This Week</Text>
          <Text style={styles.pageSubheading}>
            Good vibes, live acoustics, sunset sessions & weekly deals across all
            5 Bali hubs.
          </Text>
        </View>

        {/* 3. Event Card 1: 2-for-1 Pizza Nights */}
        <Pressable
          style={styles.eventCard}
          onPress={() =>
            openEventDetails({
              title: "2-for-1 Pizza Nights",
              price: "Promo Buy 1 Get 1",
              category: "Island Famous Deal",
              description:
                "Double the pizza, same price! Hand-stretched artisan sourdough pizza straight from the wood-fired stone oven. Available across all 5 venues every Tuesday and Sunday from 4:00 PM.",
              image: "https://placehold.co/600x400/png",
            })
          }
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: "https://placehold.co/600x400/png" }}
              style={styles.eventImage}
              resizeMode="cover"
            />
            {/* Badges di atas gambar */}
            <View style={styles.imageOverlayTop}>
              <View style={styles.badgeGold}>
                <Text style={styles.badgeGoldText}>TUESDAYS & SUNDAYS</Text>
              </View>
              <View style={styles.badgeWhite}>
                <Text style={styles.badgeWhiteText}>FROM 4:00 PM</Text>
              </View>
            </View>

            {/* Title Overlay di bawah gambar */}
            <View style={styles.imageOverlayBottom}>
              <Text style={styles.imageDealBadge}>ISLAND FAMOUS DEAL</Text>
              <Text style={styles.imageEventTitle}>2-for-1 Pizza Nights</Text>
            </View>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.eventDesc}>
              Double the pizza, same price! Hand-stretched artisan sourdough
              pizza straight from the wood-fired stone oven. Available across all
              5 venues.
            </Text>

            {/* Tag Lokasi */}
            <View style={styles.venueTagRow}>
              {["Berawa", "Beach Rd (Canggu)", "Seminyak", "Ubud", "Uluwatu"].map(
                (loc, i) => (
                  <View key={i} style={styles.venuePill}>
                    <Text style={styles.venuePillText}>{loc}</Text>
                  </View>
                )
              )}
            </View>

            {/* Footer Aksi */}
            <View style={styles.cardFooter}>
              <View style={styles.crowdIndicator}>
                <View style={styles.greenDot} />
                <Text style={styles.crowdText}>High Energy / Fast Filling</Text>
              </View>

              <Pressable
                style={styles.primaryButton}
                onPress={() => router.push("/locations")}
              >
                <Text style={styles.primaryButtonText}>RESERVE PIZZA NIGHT</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>

        {/* 4. Event Card 2: 241 Sunset Sessions */}
        <Pressable
          style={styles.eventCard}
          onPress={() =>
            openEventDetails({
              title: "241 Sunset Sessions",
              price: "Happy Hour 2-for-1",
              category: "Surf Club Vibe",
              description:
                "Your tropical surf club in Bali. Sip on 2-for-1 signature cocktails, island spritzes, and ice-cold beers while the sun dips low and live sunset DJ sets fill the air.",
              image: "https://placehold.co/600x400/png",
            })
          }
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: "https://placehold.co/600x400/png" }}
              style={styles.eventImage}
              resizeMode="cover"
            />
            <View style={styles.imageOverlayTop}>
              <View style={styles.badgeBrown}>
                <Text style={styles.badgeBrownText}>DAILY FROM 5:00 PM</Text>
              </View>
              <View style={styles.badgeWhite}>
                <Text style={styles.badgeWhiteText}>SUNSET GOLDEN HOUR</Text>
              </View>
            </View>

            <View style={styles.imageOverlayBottom}>
              <Text style={styles.imageDealBadge}>SURF CLUB VIBE</Text>
              <Text style={styles.imageEventTitle}>241 Sunset Sessions</Text>
            </View>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.eventDesc}>
              Your tropical surf club in Bali. Sip on 2-for-1 signature
              cocktails, island spritzes, and ice-cold beers while the sun dips
              low and live sunset DJ sets fill the air.
            </Text>

            {/* Feature Pills */}
            <View style={styles.featurePillsRow}>
              <View style={styles.featurePill}>
                <Lucide name="sparkles" size={14} color="#8C5E13" />
                <Text style={styles.featurePillText}>2-for-1 Cocktails</Text>
              </View>
              <View style={styles.featurePill}>
                <Lucide name="music" size={14} color="#8C5E13" />
                <Text style={styles.featurePillText}>Chilled DJ Tunes</Text>
              </View>
            </View>

            {/* Footer Aksi */}
            <View style={styles.cardFooter}>
              <View style={styles.locationMeta}>
                <Lucide name="store" size={14} color="#78716C" />
                <Text style={styles.locationMetaText}>All Bali Outlets</Text>
              </View>

              <Pressable
                style={styles.primaryButton}
                onPress={() => router.push("/locations")}
              >
                <Text style={styles.primaryButtonText}>BOOK SUNSET TABLE</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>

        {/* 5. Event Card 3: Live & Local Music Night */}
        <View style={styles.musicCard}>
          <View style={styles.musicHeader}>
            <View style={styles.musicTitleRow}>
              <View style={styles.musicIconCircle}>
                <Lucide name="music" size={18} color="#C98616" />
              </View>
              <View>
                <Text style={styles.musicGenreText}>ACOUSTIC & SOUL</Text>
                <Text style={styles.musicMainTitle}>
                  Live & Local Music Night
                </Text>
              </View>
            </View>
            <View style={styles.freeBadge}>
              <Text style={styles.freeBadgeText}>FREE ENTRY</Text>
            </View>
          </View>

          <Text style={styles.musicDesc}>
            Local Balinese talent strumming acoustic classics and warm soulful
            melodies to accompany your brunch and sunset dinner.
          </Text>

          {/* Box Jadwal per Venue */}
          <View style={styles.scheduleBox}>
            <View style={styles.scheduleVenue}>
              <Text style={styles.venueScheduleTitle}>
                Berawa, Beach Road & Uluwatu
              </Text>
              <Text style={styles.venueScheduleTime}>
                Tue & Fri: 6 PM – 9 PM{"\n"}Sat & Sun: 11 AM – 2 PM & 6 PM – 9 PM
              </Text>
            </View>

            <View style={styles.scheduleDivider} />

            <View style={styles.scheduleVenue}>
              <Text style={styles.venueScheduleTitle}>Ubud Jungle Garden</Text>
              <Text style={styles.venueScheduleTime}>
                Tue & Fri: 6 PM – 9 PM{"\n"}Weekend: 11 AM – 2 PM & 6 PM – 9 PM
              </Text>
            </View>
          </View>

          {/* Footer Lineup Link */}
          <View style={styles.musicFooter}>
            <View style={styles.familyRow}>
              <Lucide name="users" size={14} color="#78716C" />
              <Text style={styles.familyText}>All Ages Welcome</Text>
            </View>
            <Pressable
              onPress={() =>
                openEventDetails({
                  title: "Live & Local Music Lineup",
                  price: "Free Admission",
                  category: "Acoustic & Soul",
                  description:
                    "Jadwal lengkap musisi lokal Bali minggu ini di seluruh cabang Milk & Madu. Nikmati alunan akustik syahdu dan sunset dinner setiap hari Selasa, Jumat, dan akhir pekan.",
                  image: "https://placehold.co/600x400/png",
                })
              }
            >
              <Text style={styles.lineupLinkText}>See This Week's Lineup</Text>
            </Pressable>
          </View>
        </View>

        {/* 6. Event Card 4: Kids Parties & Pizza Workshops */}
        <Pressable
          style={styles.eventCard}
          onPress={() =>
            openEventDetails({
              title: "Kids Parties & Pizza Workshops",
              price: "Family Package",
              category: "Family & Kids Club",
              description:
                "Swap cocktails for mocktails! Book your next kids birthday party with pizza-making workshops, face painting, dedicated open playgrounds, and artisan cakes.",
              image: "https://placehold.co/600x400/png",
            })
          }
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: "https://placehold.co/600x400/png" }}
              style={styles.eventImage}
              resizeMode="cover"
            />
            <View style={styles.imageOverlayTop}>
              <View style={styles.badgeWhite}>
                <Text style={styles.badgeWhiteText}>FAMILY & KIDS CLUB</Text>
              </View>
            </View>

            <View style={styles.imageOverlayBottom}>
              <Text style={styles.imageDealBadge}>PLAYGROUND & CRAFTS</Text>
              <Text style={styles.imageEventTitle}>
                Kids Parties & Pizza Workshops
              </Text>
            </View>
          </View>

          <View style={styles.cardContent}>
            <Text style={styles.eventDesc}>
              Swap cocktails for mocktails! Book your next kids birthday party
              with pizza-making workshops, face painting, dedicated open
              playgrounds, and artisan cakes.
            </Text>

            <View style={styles.featurePillsRow}>
              <View style={styles.featurePill}>
                <Lucide name="utensils" size={14} color="#8C5E13" />
                <Text style={styles.featurePillText}>Pizza Masterclass</Text>
              </View>
              <View style={styles.featurePill}>
                <Lucide name="sparkles" size={14} color="#8C5E13" />
                <Text style={styles.featurePillText}>Playground Access</Text>
              </View>
            </View>

            <View style={styles.cardFooter}>
              <Text style={styles.customPartyText}>Custom party packages</Text>
              <Pressable
                style={styles.primaryButton}
                onPress={() => router.push("/locations")}
              >
                <Text style={styles.primaryButtonText}>INQUIRE PARTY</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
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

  // 2. Top Title
  topSection: {
    gap: 4,
  },
  pageHeading: {
    fontSize: 22,
    fontWeight: "800",
    color: "#292524",
  },
  pageSubheading: {
    fontSize: 12,
    lineHeight: 18,
    color: "#78716C",
  },

  // 3 & 4. Event Cards
  eventCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#EAE5DC",
  },
  imageContainer: {
    height: 180,
    position: "relative",
    justifyContent: "space-between",
    padding: 12,
  },
  eventImage: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#E7E5E4",
  },
  imageOverlayTop: {
    flexDirection: "row",
    gap: 6,
  },
  badgeGold: {
    backgroundColor: "#E8A229",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeGoldText: {
    fontSize: 10,
    fontWeight: "800",
    color: "#292524",
  },
  badgeBrown: {
    backgroundColor: "#784E07",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeBrownText: {
    fontSize: 10,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  badgeWhite: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeWhiteText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#44403C",
  },
  imageOverlayBottom: {
    backgroundColor: "rgba(24, 21, 18, 0.7)",
    padding: 10,
    borderRadius: 12,
    gap: 2,
  },
  imageDealBadge: {
    fontSize: 10,
    fontWeight: "800",
    color: "#F6C15B",
    letterSpacing: 0.5,
  },
  imageEventTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  cardContent: {
    padding: 14,
    gap: 12,
  },
  eventDesc: {
    fontSize: 12,
    lineHeight: 18,
    color: "#78716C",
  },
  venueTagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  venuePill: {
    backgroundColor: "#F5F3EF",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  venuePillText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#78716C",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  crowdIndicator: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  greenDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#16A34A",
  },
  crowdText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#57534E",
  },
  primaryButton: {
    backgroundColor: "#E8A229",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 18,
  },
  primaryButtonText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#292524",
    letterSpacing: 0.4,
  },
  featurePillsRow: {
    flexDirection: "row",
    gap: 8,
  },
  featurePill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FDF8F0",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 6,
  },
  featurePillText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#8C5E13",
  },
  locationMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  locationMetaText: {
    fontSize: 11,
    color: "#78716C",
    fontWeight: "500",
  },
  customPartyText: {
    fontSize: 11,
    color: "#78716C",
    fontWeight: "500",
  },

  // 5. Music Card
  musicCard: {
    backgroundColor: "#EEF3ED",
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: "#D9E3D8",
    gap: 12,
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
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  musicGenreText: {
    fontSize: 10,
    fontWeight: "800",
    color: "#3F6212",
    letterSpacing: 0.5,
  },
  musicMainTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#292524",
  },
  freeBadge: {
    backgroundColor: "#365314",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  freeBadgeText: {
    fontSize: 10,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  musicDesc: {
    fontSize: 12,
    lineHeight: 18,
    color: "#4A5568",
  },
  scheduleBox: {
    backgroundColor: "#FAF6EF",
    padding: 12,
    borderRadius: 14,
    gap: 8,
  },
  scheduleVenue: {
    gap: 2,
  },
  venueScheduleTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#292524",
  },
  venueScheduleTime: {
    fontSize: 11,
    lineHeight: 16,
    color: "#78716C",
  },
  scheduleDivider: {
    height: 1,
    backgroundColor: "#EAE5DC",
    marginVertical: 2,
  },
  musicFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 2,
  },
  familyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  familyText: {
    fontSize: 11,
    color: "#57534E",
    fontWeight: "500",
  },
  lineupLinkText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#292524",
    textDecorationLine: "underline",
  },
});

export default WhatsOnScreen;
