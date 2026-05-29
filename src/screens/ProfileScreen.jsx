import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://i.pravatar.cc/300",
        }}
        style={styles.avatar}
      />

      <Text style={styles.name}>Zaidan 🎬</Text>
      <Text style={styles.subtitle}>Movie Enthusiast</Text>

      <View style={styles.stats}>
        <View>
          <Text style={styles.num}>120</Text>
          <Text style={styles.label}>Watched</Text>
        </View>
        <View>
          <Text style={styles.num}>45</Text>
          <Text style={styles.label}>Favorites</Text>
        </View>
        <View>
          <Text style={styles.num}>10</Text>
          <Text style={styles.label}>Reviews</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: { width: 120, height: 120, borderRadius: 60 },
  name: { color: "#fff", fontSize: 22, fontWeight: "bold", marginTop: 10 },
  subtitle: { color: "#94a3b8", marginBottom: 20 },

  stats: {
    flexDirection: "row",
    gap: 40,
  },

  num: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  label: { color: "#94a3b8" },
});
