import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const genres = [
  "Action",
  "Horror",
  "Sci-Fi",
  "Drama",
  "Adventure",
  "Romance",
  "Comedy",
  "Thriller",
];

export default function GenreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 Movie Genres</Text>

      <FlatList
        data={genres}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // biar grid keren
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    padding: 16,
  },

  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    flex: 1,
    margin: 10,
    height: 100,
    backgroundColor: "#1e293b",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
