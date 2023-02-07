import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Song } from "./Song";

export const SongList = ({ songs }) => {
  console.log(songs);
  return (
    <View>
      <FlatList
        data={songs}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <TouchableOpacity>
              <Song song={item} />
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
