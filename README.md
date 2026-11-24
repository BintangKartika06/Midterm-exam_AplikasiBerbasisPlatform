# Milk & Madu Mobile Companion
 
Prototipe aplikasi mobile lintas platform berbasis **React Native (Expo)** sebagai pendamping digital kafe dan restoran brunch **Milk & Madu** di Bali. Aplikasi ini dibuat untuk Ujian Tengah Semester (UTS) mata kuliah **Aplikasi Berbasis Platform**.
 
## Deskripsi Singkat
 
Milk & Madu Mobile Companion mengumpulkan informasi penting sebuah kafe dalam satu aplikasi: menu makanan dan minuman, acara dan promo mingguan, lokasi outlet, serta program poin loyalitas. Pengguna dapat berpindah antar menu utama lewat Bottom Tab, lalu membuka halaman detail dari setiap item lewat Stack Navigation.
 
**Target pengguna:** pelanggan dan calon pelanggan kafe, baik warga lokal maupun wisatawan, yang ingin melihat menu, promo, dan lokasi outlet sebelum berkunjung.
 
## Fitur dan Halaman
 
Aplikasi memiliki **6 screen**: 5 halaman pada Bottom Tab dan 1 halaman detail pada Stack.
 
| Screen | File | Navigasi | Fungsi |
|---|---|---|---|
| Home | `src/app/(tabs)/index.jsx` | Bottom Tab | Beranda berisi hero, Chef's Selection, kartu promo, dan jadwal musik |
| Menu | `src/app/(tabs)/menu.jsx` | Bottom Tab | Daftar hidangan, kolom pencarian, dan paket Brekky Set |
| What's On | `src/app/(tabs)/whatson.jsx` | Bottom Tab | Acara dan promo mingguan |
| Locations | `src/app/(tabs)/locations.jsx` | Bottom Tab | Daftar outlet, jam buka, dan fasilitas |
| Rewards | `src/app/(tabs)/rewards.jsx` | Bottom Tab | Poin member dan daftar hadiah yang dapat ditukar |
| Detail Menu | `src/app/details.jsx` | Stack | Detail item, menerima parameter dari semua tab |
 
### Alur Navigasi
 
- `src/app/_layout.jsx` berisi **Stack Navigation** (root) yang memuat grup `(tabs)` dan halaman `details`.
- `src/app/(tabs)/_layout.jsx` berisi **Bottom Tab Navigation** dengan 5 tab: Home, Menu, What's On, Locations, dan Rewards.
- Halaman Detail dibuka dari kelima tab lewat `router.push` dan menerima parameter `title`, `price`, `category`, `description`, dan `imageUri`.
## Teknologi
 
- [Expo](https://expo.dev) SDK 58 dan React Native 0.88
- React 19
- [Expo Router](https://docs.expo.dev/router/introduction/) untuk navigasi berbasis file (Bottom Tab dan Stack)
- `react-native-safe-area-context` dan `react-native-screens`
- Ikon: [Lucide](https://lucide.dev) lewat `@react-native-vector-icons/lucide`
## Struktur Folder
 
```
.
├── assets/                     # Ikon aplikasi, adaptive icon Android, favicon, splash
│   ├── android-icon-background.png
│   ├── android-icon-foreground.png
│   ├── android-icon-monochrome.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash-icon.png
├── src/
│   └── app/                    # Routing Expo Router (satu file = satu screen)
│       ├── _layout.jsx         # Root layout: Stack Navigation
│       ├── details.jsx         # Screen Detail Menu (Stack)
│       └── (tabs)/             # Grup Bottom Tab Navigation
│           ├── _layout.jsx     # Konfigurasi tab bar
│           ├── index.jsx       # Home
│           ├── menu.jsx        # Menu
│           ├── whatson.jsx     # What's On
│           ├── locations.jsx   # Locations
│           └── rewards.jsx     # Rewards
├── App.js                      # Bawaan template Expo (tidak dipakai, entry point: expo-router/entry)
├── index.js                    # Bawaan template Expo
├── app.json                    # Konfigurasi Expo
├── package.json                # Dependensi dan script
├── package-lock.json
├── .gitignore
├── LICENSE
└── README.md
```
 
## Cara Menjalankan
 
### Prasyarat
 
- [Node.js](https://nodejs.org) versi LTS beserta npm
- [Git](https://git-scm.com)
- Salah satu dari:
  - Aplikasi **Expo Go** di ponsel (Android/iOS), dengan ponsel dan komputer berada pada jaringan Wi-Fi yang sama, atau
  - **Android Studio** (Android Emulator) atau **Xcode** (iOS Simulator, hanya di macOS)
### Langkah
 
1. Clone repositori:
```bash
git clone https://github.com/BintangKartika06/Midterm-exam_AplikasiBerbasisPlatform.git
cd Midterm-exam_AplikasiBerbasisPlatform
```
 
2. Pasang dependensi:
```bash
npm install
```
 
3. Jalankan aplikasi:
```bash
npx expo start
```
 
4. Buka aplikasi:
   - **Expo Go:** scan QR code yang muncul di terminal dengan aplikasi Expo Go (Android) atau kamera (iOS).
   - **Android Emulator:** tekan `a` di terminal.
   - **iOS Simulator:** tekan `i` di terminal.
   - **Web:** tekan `w` di terminal.
Script lain yang tersedia di `package.json`:
 
```bash
npm run android   # expo start --android
npm run ios       # expo start --ios
npm run web       # expo start --web
```
 
### Jika terjadi masalah
 
- Aplikasi tidak muncul di Expo Go: pastikan ponsel dan komputer satu jaringan, atau jalankan `npx expo start --tunnel`.
- Tampilan tidak sesuai setelah mengubah kode: jalankan `npx expo start -c` untuk membersihkan cache.
## Aset dan Sumber
 
- Ikon: [Lucide](https://lucide.dev), lewat `@react-native-vector-icons/lucide`.
- Gambar: [Unsplash](https://unsplash.com) dan gambar placeholder dari [placehold.co](https://placehold.co).
- Font: tidak ada font tambahan, aplikasi memakai font bawaan sistem perangkat.


## Pengembang
 
- I Made Bintang Kartika Yasa (NIM 240040054), Institut Teknologi dan Bisnis STIKOM Bali
## Lisensi
 
Proyek ini menggunakan lisensi MIT (lihat berkas [LICENSE](LICENSE)).
 
