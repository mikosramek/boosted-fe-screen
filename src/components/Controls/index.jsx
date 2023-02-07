import { View, Text, StyleSheet } from "react-native";
import { Foundation } from "@expo/vector-icons";

export const Controls = () => {
  return (
    <View style={styles.controlsContainer}>
      <View style={styles.mainControlsContainer}>
        <Foundation name="previous" size={28} color="#222" />
        <View style={styles.playPauseButton}>
          <Foundation name="play" size={32} color="#000" />
        </View>
        <Foundation name="next" size={28} color="#222" />
      </View>
      <View style={styles.subControlContainer}>
        <Foundation name="shuffle" size={24} color="#666" />
        <Foundation name="loop" size={24} color="#666" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  controlsContainer: {
    position: "relative",
    paddingHorizontal: 15,
    paddingBottom: 15,
    backgroundColor: "#fff",
  },
  mainControlsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  subControlContainer: {
    position: "absolute",
    bottom: 25,
    left: 40,
    right: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  playPauseButton: {
    marginHorizontal: 25,
    borderColor: "#222",
    borderWidth: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    width: 64,
    height: 64,
  },
});
