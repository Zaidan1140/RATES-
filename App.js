import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <Text style={styles.header}>RATES 🎬</Text>

      {/* CATEGORY GRID (UPGRADED) */}
      <View style={styles.grid}>
        <TouchableOpacity style={styles.box} activeOpacity={0.8}>
          <Text style={styles.icon}>🎭</Text>
          <Text style={styles.boxText}>Genre</Text>
          <Text style={styles.boxSub}>Browse categories</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} activeOpacity={0.8}>
          <Text style={styles.icon}>⭐</Text>
          <Text style={styles.boxText}>Top Rated</Text>
          <Text style={styles.boxSub}>Best of all time</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} activeOpacity={0.8}>
          <Text style={styles.icon}>🔥</Text>
          <Text style={styles.boxText}>Trending</Text>
          <Text style={styles.boxSub}>Hot right now</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} activeOpacity={0.8}>
          <Text style={styles.icon}>❤️</Text>
          <Text style={styles.boxText}>Favorites</Text>
          <Text style={styles.boxSub}>Your picks</Text>
        </TouchableOpacity>
      </View>

      {/* SECTION TITLE */}
      <Text style={styles.sectionTitle}>Now Showing</Text>

      {/* SEARCH BAR */}
      <TextInput
        placeholder="Search movies..."
        placeholderTextColor="#aaa"
        style={styles.search}
      />

      {/* MOVIE LIST */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Movie 1 */}
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
            }}
            style={styles.image}
          />
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Avengers: Endgame</Text>
            <Text style={styles.cardSubtitle}>⭐ 8.4 | Action, Sci-Fi</Text>
          </View>
        </View>

        {/* Movie 2 */}
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
            }}
            style={styles.image}
          />
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>The Dark Knight</Text>
            <Text style={styles.cardSubtitle}>⭐ 9.0 | Crime, Drama</Text>
          </View>
        </View>

        {/* Movie 3 */}
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
            }}
            style={styles.image}
          />
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Interstellar</Text>
            <Text style={styles.cardSubtitle}>⭐ 8.6 | Sci-Fi, Adventure</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#0f172a",
  },

  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  box: {
    width: "48%",
    height: 110,
    backgroundColor: "#1e293b",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    borderRadius: 22,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },

  icon: {
    fontSize: 26,
    marginBottom: 6,
  },

  boxText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  boxSub: {
    color: "#94a3b8",
    fontSize: 11,
    marginTop: 2,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#fff",
  },

  search: {
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 20,
    padding: 12,
    marginBottom: 15,
    color: "#fff",
  },

  card: {
    marginBottom: 18,
    backgroundColor: "#1e293b",
    borderRadius: 20,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 180,
  },

  cardInfo: {
    padding: 12,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },

  cardSubtitle: {
    fontSize: 13,
    color: "#94a3b8",
    marginTop: 4,
  },
});
