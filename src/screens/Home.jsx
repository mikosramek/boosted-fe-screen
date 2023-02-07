import { useMusic } from "~/hooks/useMusic";
import { Player } from "~/components/Player";
import { Controls } from "~/components/Controls";
import { Layout } from "~/components/Layout";

export const Home = () => {
  const { currentSong } = useMusic();

  console.log(currentSong);

  return (
    <Layout>
      {/* list of songs */}
      <Player song={currentSong} />
      <Controls />
    </Layout>
  );
};
