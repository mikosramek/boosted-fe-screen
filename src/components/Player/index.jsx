import { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export const Player = ({ song }) => {
  const windowWidth = Dimensions.get("window").width;

  const indicatorStylesComputed = useMemo(() => {
    const progressPercent = song.elapsed / song.duration;
    return [
      styles.progressBarIndicator,
      { transform: [{ translateX: progressPercent * (windowWidth - 37) }] },
    ];
  }, [song, windowWidth]);

  return (
    <View style={styles.playerContainer}>
      <Text>
        <Text style={styles.boldText}>{song.title}</Text> by {song.artist}
      </Text>
      <View style={styles.timeline}>
        <View style={styles.progressBarBacking}>
          <View style={indicatorStylesComputed} />
        </View>
        <View style={styles.durationContainer}>
          <Text>{song.elapsed}</Text>
          <Text>{song.duration}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  playerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  boldText: {
    fontWeight: "bold",
  },
  timeline: {
    paddingVertical: 10,
  },
  progressBarBacking: {
    position: "relative",
    backgroundColor: "#bbb",
    height: 10,
    borderRadius: 10,
  },
  progressBarIndicator: {
    position: "absolute",
    height: 14,
    width: 14,
    backgroundColor: "white",
    top: -2,
    left: -4,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  durationContainer: {
    paddingTop: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
