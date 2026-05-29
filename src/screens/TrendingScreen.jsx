import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import movieData from "../Data/movie";

export default function TrendingScreen() {
  const trending = movieData.filter((m) => m.trending);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🔥 Trending Movies</Text>

      <FlatList
        data={trending}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.meta}>
                ⭐ {item.rating} | {item.genre}
              </Text>
              <Text style={styles.synopsis}>{item.synopsis}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#020617", padding: 16 },
  header: { color: "#fff", fontSize: 24, fontWeight: "bold" },

  card: {
    backgroundColor: "#1e293b",
    borderRadius: 20,
    marginVertical: 10,
    overflow: "hidden",
  },

  image: { width: "100%", height: 200 },

  info: { padding: 12 },

  title: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  meta: { color: "#94a3b8", marginVertical: 5 },
  synopsis: { color: "#cbd5f5", fontSize: 13 },
});
