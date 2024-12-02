import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [showCatText, setShowCatText] = useState(false);
  const [showRabbitText, setShowRabbitText] = useState(false);

  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.centerText}>Najwa Lutfia Nisya</Text>

      {/* Dua kotak dengan tata letak horizontal */}
      <View style={styles.boxContainer}>
        {/* Kotak Kucing */}
        <TouchableOpacity onPress={() => setShowCatText(!showCatText)} style={styles.boxWrapper}>
          <View style={[styles.box, styles.box1]}>
            <Text style={styles.boxText}>🐱</Text> {/* Emoji Kucing */}
          </View>
          {showCatText && <Text style={styles.boxLabel}>Kucing</Text>} {/* Teks "Kucing" */}
        </TouchableOpacity>

        {/* Kotak Kelinci */}
        <TouchableOpacity onPress={() => setShowRabbitText(!showRabbitText)} style={styles.boxWrapper}>
          <View style={[styles.box, styles.box2]}>
            <Text style={styles.boxText}>🐰</Text> {/* Emoji Kelinci */}
          </View>
          {showRabbitText && <Text style={styles.boxLabel}>Kelinci</Text>} {/* Teks "Kelinci" */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', // Latar belakang abu-abu terang
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  centerText: {
    fontSize: 24, // Ukuran font 24
    color: '#4A90E2', // Warna biru
    fontWeight: 'bold', // Gaya teks tebal
    marginBottom: 30, // Jarak antara teks dan kotak
    textAlign: 'center', // Teks rata tengah
  },
  boxContainer: {
    flexDirection: 'row', // Tata letak horizontal untuk kotak
    justifyContent: 'space-around', // Jarak merata antara kotak
    alignItems: 'center',
    width: '80%', // Membatasi lebar area kotak
    flexWrap: 'wrap', // Menyusun elemen dalam baris yang berbeda jika terlalu banyak
    marginTop: 20, // Memberikan jarak antara teks dan kotak
  },
  boxWrapper: {
    alignItems: 'center', // Untuk memastikan kotak dan teks rata tengah
    marginBottom: 20, // Memberikan jarak antara kotak dan teks
  },
  box: {
    width: 100, // Lebar kotak
    height: 100, // Tinggi kotak
    borderRadius: 20, // Sudut membulat
    shadowColor: '#000', // Efek bayangan
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6, // Untuk bayangan di Android
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    backgroundColor: '#87CEEB', // Warna biru langit (Light Sky Blue)
  },
  box2: {
    backgroundColor: '#B2BEB5', // Warna hijau sage terang (Light Sage Green)
  },
  boxText: {
    fontSize: 50, // Ukuran font emoji
    color: '#FFFFFF', // Warna teks putih
    textShadowColor: '#000', // Bayangan hitam untuk kontras
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  boxLabel: {
    fontSize: 18, // Ukuran font untuk label
    color: '#000000', // Warna teks hitam
    textAlign: 'center', // Rata tengah
    marginTop: 10, // Memberikan jarak antara kotak dan teks label
  },
});
