import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Foundation } from "@expo/vector-icons";

export const Controls = ({ controls, status }) => {
  return (
    <View style={styles.controlsContainer}>
      <View style={styles.mainControlsContainer}>
        <TouchableOpacity onPress={controls.previousSong}>
          <Foundation name="previous" size={28} color="#222" />
        </TouchableOpacity>
        <TouchableOpacity onPress={controls.togglePlaying}>
          <View style={styles.playPauseButton}>
            <Foundation
              name={status.isPlaying ? "pause" : "play"}
              size={32}
              color="#000"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={controls.nextSong}>
          <Foundation name="next" size={28} color="#222" />
        </TouchableOpacity>
      </View>
      <View style={styles.subControlContainer}>
        <TouchableOpacity onPress={controls.toggleShuffle}>
          <Foundation
            name="shuffle"
            size={24}
            color={status.isShuffled ? "#9fd18b" : "#666"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={controls.toggleLooping}>
          <Foundation
            name="loop"
            size={24}
            color={status.isLooping ? "#9fd18b" : "#666"}
          />
        </TouchableOpacity>
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
