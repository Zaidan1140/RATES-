import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

// IMPORT
import movieData from "../Data/movie";
import MovieCard from "../components/MovieCard";

export default function HomeScreen() {
  const navigation = useNavigation(); // 🔥 WAJIB

  const [search, setSearch] = useState("");

  const filteredMovie = movieData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>RATES 🎬</Text>

      {/* CATEGORY */}
      <View style={styles.grid}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate("Genre")} // 🔥 KE GENRE
        >
          <Text style={styles.boxText}>Genre</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxText}>Top Rated</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate("Trending")} // 🔥 KE TRENDING
        >
          <Text style={styles.boxText}>Trending</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxText}>Favorites</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Now Showing</Text>

      {/* SEARCH */}
      <TextInput
        placeholder="Search movies..."
        placeholderTextColor="#aaa"
        style={styles.search}
        value={search}
        onChangeText={setSearch}
      />

      {/* LIST */}
      <FlatList
        data={filteredMovie}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MovieCard
            title={item.title}
            image={item.image}
            rating={item.rating}
            genre={item.genre}
            onPress={() => navigation.navigate("Detail", { movie: item })}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    padding: 16,
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  box: {
    width: "48%",
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 15,
    marginBottom: 10,
    alignItems: "center",
  },

  boxText: {
    color: "#fff",
    fontWeight: "bold",
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    marginVertical: 10,
  },

  search: {
    backgroundColor: "#1e293b",
    color: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});
