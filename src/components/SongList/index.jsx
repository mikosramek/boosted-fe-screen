import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Song } from "./Song";

export const SongList = ({ songs, playSong, songIndex }) => {
  return (
    <View>
      <FlatList
        data={songs}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <TouchableOpacity onPress={() => playSong(index)}>
              <Song song={item} active={songIndex === index} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderBottomColor: "#000f",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
