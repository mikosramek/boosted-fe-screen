import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";

export const Song = ({ song, active }) => {
  const computedTitleStyles = useMemo(() => {
    return [styles.title, { color: active ? "#9fd18b" : "#000" }];
  }, [active]);

  return (
    <View style={styles.container}>
      <Text style={computedTitleStyles}>{song.title}</Text>
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
