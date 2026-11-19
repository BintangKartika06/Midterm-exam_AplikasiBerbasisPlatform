import React from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
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
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&auto=format&fit=crop&q=80",
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
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&auto=format&fit=crop&q=80",
      tag: "House Bread",
      rating: "4.8 (310+)",
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
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
                uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
              }}
              style={styles.avatar}
            />
          </View>
        </View>

        {/* 2. Greeting Section */}
        <View style={styles.greetingSection}>
          <Text style={styles.greetingTitle}>Good Morning in Bali 🔆</Text>
          <Text style={styles.greetingSubtitle}>
            Sunny 29°C • Tropical breeze in the air
          </Text>
        </View>

        {/* 3. Hero Card */}
        <View style={styles.heroCard}>
          <ImageBackground
            source={{
              uri: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
            }}
            style={styles.heroImage}
            imageStyle={{ borderRadius: 24 }}
          >
            {/* Tombol Favorit */}
            <Pressable style={styles.favoriteButton}>
              <Lucide name="heart" size={18} color="#292524" />
            </Pressable>

            {/* Overlay Konten Hero */}
            <View style={styles.heroOverlay}>
              <Text style={styles.heroBadge}>AUTHENTIC ISLAND VIBES</Text>
              <Text style={styles.heroTitle}>Home of Bali's Best Brunch</Text>
              <Text style={styles.heroSubtitle}>
                Where strangers become regulars since 2014
              </Text>
            </View>
          </ImageBackground>

          {/* CTA Buttons di bawah Hero */}
          <View style={styles.ctaContainer}>
            <Pressable
              style={styles.ctaPrimary}
              onPress={() => router.push("/tabs/locations")}
            >
              <Lucide name="calendar" size={18} color="#292524" />
              <Text style={styles.ctaPrimaryText}>BOOK A TABLE</Text>
            </Pressable>

            <Pressable
              style={styles.ctaSecondary}
              onPress={() => router.push("/tabs/menu")}
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
            onPress={() => router.push("/tabs/menu")}
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
              onPress={() => router.push("/tabs/whatson")}
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
              onPress={() => router.push("/tabs/whatson")}
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


export default HomeScreen;
