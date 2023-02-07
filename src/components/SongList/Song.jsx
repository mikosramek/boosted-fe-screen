import { StyleSheet, Text, View } from "react-native";

export const Song = ({ song }) => {
  console.log(song);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{song.title}</Text>
      <Text style={styles.artist}>{song.artist}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  title: {
    fontSize: 24,
  },
  artist: {
    fontSize: 18,
    color: "#555",
  },
});
