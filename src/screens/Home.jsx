import { StyleSheet, View } from "react-native";
import { useMusic } from "~/hooks/useMusic";
import { Player } from "~/components/Player";
import { Controls } from "~/components/Controls";
import { SongList } from "~/components/SongList";

export const Home = () => {
  const { currentSong, songList } = useMusic();

  return (
    <View style={styles.container}>
      <View style={styles.songListContainer}>
        <SongList songs={songList} />
      </View>
      <View style={styles.footerContainer}>
        <Player song={currentSong} />
        <Controls />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    marginTop: 50,
  },
  songListContainer: {
    marginBottom: 178,
  },
  footerContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
