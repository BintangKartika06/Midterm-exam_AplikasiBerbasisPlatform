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

const RewardsScreen = () => {
  const router = useRouter();

  // Data reward sederhana
  const rewardList = [
    {
      id: "1",
      title: "Free Artisan Barista Coffee",
      points: "100 Pts",
      description:
        "Tukarkan 100 poin loyalty Anda untuk menikmati 1 cangkir kopi barista pilihan (Hot/Iced Latte, Cappuccino, Flat White) di seluruh outlet Milk & Madu.",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "2",
      title: "Free Madu Ricotta Hotcakes",
      points: "250 Pts",
      description:
        "Tukarkan 250 poin loyalty untuk 1 porsi signature Madu Ricotta Hotcakes hangat lengkap dengan madu murni dan honeycomb butter.",
      image:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "3",
      title: "Voucher Potongan 50K IDR",
      points: "300 Pts",
      description:
        "Potongan langsung senilai Rp 50.000 untuk total tagihan dine-in atau takeaway Anda tanpa batas minimum transaksi.",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
    },
  ];

  // Helper untuk membuka halaman Details
  const openRewardDetails = (item) => {
    router.push({
      pathname: "/details",
      params: {
        title: item.title,
        price: item.points,
        category: "Madu Loyalty Reward",
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
          <Text style={styles.headerTitle}>Rewards</Text>
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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* 2. Kartu Member & Poin */}
        <View style={styles.memberCard}>
          <View style={styles.memberCardTop}>
            <View>
              <Text style={styles.memberTier}>MADU CLUB MEMBER</Text>
              <Text style={styles.memberName}>Bintang Kartika</Text>
            </View>
            <View style={styles.pointIconCircle}>
              <Lucide name="gift" size={22} color="#FFFFFF" />
            </View>
          </View>

          <View style={styles.pointSection}>
            <Text style={styles.pointLabel}>Poin Anda Saat Ini</Text>
            <Text style={styles.pointNumber}>350 Pts</Text>
            <Text style={styles.pointValue}>Setara diskon Rp 35.000</Text>
          </View>
        </View>

        {/* 3. Section Header Reward */}
        <View style={styles.sectionHeaderRow}>
          <View>
            <Text style={styles.sectionBadge}>REDEEM POINTS</Text>
            <Text style={styles.sectionHeading}>Tukarkan Reward</Text>
          </View>
          <Text style={styles.rewardCount}>{rewardList.length} Voucher</Text>
        </View>

        {/* 4. List Voucher Reward Sederhana */}
        <View style={styles.rewardList}>
          {rewardList.map((item) => (
            <Pressable
              key={item.id}
              style={styles.rewardCard}
              onPress={() => openRewardDetails(item)}
            >
              <View style={styles.rewardLeft}>
                <View style={styles.rewardIconBox}>
                  <Lucide name="ticket" size={22} color="#8C5E13" />
                </View>
                <View style={styles.rewardTextInfo}>
                  <Text style={styles.rewardTitle}>{item.title}</Text>
                  <Text style={styles.rewardPoints}>{item.points}</Text>
                </View>
              </View>

              <Pressable
                style={styles.redeemButton}
                onPress={() => openRewardDetails(item)}
              >
                <Text style={styles.redeemButtonText}>Tukar</Text>
              </Pressable>
            </Pressable>
          ))}
        </View>

        {/* 5. Cara Mendapatkan Poin */}
        <View style={styles.infoCard}>
          <View style={styles.infoTitleRow}>
            <Lucide name="sparkles" size={16} color="#8C5E13" />
            <Text style={styles.infoTitle}>Cara Kumpulkan Poin</Text>
          </View>
          <Text style={styles.infoDesc}>
            Dapatkan 10 poin untuk setiap pembelanjaan Rp 10.000 di seluruh
            outlet Milk & Madu Bali. Tunjukkan akun aplikasi saat memesan di kasir.
          </Text>
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

  // 2. Member Card
  memberCard: {
    backgroundColor: "#292524",
    borderRadius: 20,
    padding: 18,
    gap: 16,
  },
  memberCardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  memberTier: {
    fontSize: 11,
    fontWeight: "800",
    color: "#E8A229",
    letterSpacing: 0.6,
  },
  memberName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
    marginTop: 2,
  },
  pointIconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#3E3835",
    justifyContent: "center",
    alignItems: "center",
  },
  pointSection: {
    backgroundColor: "#3A3430",
    borderRadius: 14,
    padding: 14,
    gap: 2,
  },
  pointLabel: {
    fontSize: 11,
    color: "#A8A29E",
    fontWeight: "500",
  },
  pointNumber: {
    fontSize: 28,
    fontWeight: "800",
    color: "#E8A229",
  },
  pointValue: {
    fontSize: 11,
    color: "#D6D3D1",
  },

  // 3. Section Header
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
  rewardCount: {
    fontSize: 12,
    fontWeight: "600",
    color: "#78716C",
  },

  // 4. Reward List
  rewardList: {
    gap: 10,
  },
  rewardCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EAE5DC",
  },
  rewardLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
    marginRight: 10,
  },
  rewardIconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#FDF8F0",
    justifyContent: "center",
    alignItems: "center",
  },
  rewardTextInfo: {
    flex: 1,
    gap: 2,
  },
  rewardTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#292524",
  },
  rewardPoints: {
    fontSize: 12,
    fontWeight: "800",
    color: "#8C5E13",
  },
  redeemButton: {
    backgroundColor: "#E8A229",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  redeemButtonText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#292524",
  },

  // 5. Info Card
  infoCard: {
    backgroundColor: "#FAF6EF",
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: "#F4EFE6",
    gap: 6,
  },
  infoTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  infoTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#8C5E13",
  },
  infoDesc: {
    fontSize: 11,
    lineHeight: 16,
    color: "#78716C",
  },
});

export default RewardsScreen;
