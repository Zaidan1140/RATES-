import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function MovieCard({ title, image, rating, genre }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>
          ⭐ {rating} | {genre}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  info: {
    padding: 12,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: 13,
    marginTop: 4,
  },
});
