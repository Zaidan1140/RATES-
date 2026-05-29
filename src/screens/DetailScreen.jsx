import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function DetailScreen({ route }) {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* POSTER */}
      <Image source={{ uri: movie.image }} style={styles.image} />

      {/* CONTENT */}
      <View style={styles.content}>
        <Text style={styles.title}>{movie.title}</Text>

        <Text style={styles.meta}>
          ⭐ {movie.rating} | 🎭 {movie.genre}
        </Text>

        <Text style={styles.section}>Synopsis</Text>
        <Text style={styles.synopsis}>{movie.synopsis}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
  },

  image: {
    width: "100%",
    height: 300,
  },

  content: {
    padding: 16,
  },

  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },

  meta: {
    color: "#94a3b8",
    marginBottom: 15,
  },

  section: {
    color: "#6366f1",
    fontSize: 16,
    marginBottom: 5,
  },

  synopsis: {
    color: "#e2e8f0",
    lineHeight: 22,
  },
});
