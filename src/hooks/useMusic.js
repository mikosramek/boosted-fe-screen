import { useEffect, useMemo, useRef, useState } from "react";

import { songs } from "../data/songlist.json";

export const useMusic = () => {
  const [songIndex, setSongIndex] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  const songList = useMemo(() => {
    return songs.map(({ title, artist }) => ({
      title,
      artist,
    }));
  }, [songs]);

  const currentSong = { ...songs[songIndex], elapsed };

  const songInterval = useRef(null);
  useEffect(() => {
    // songInterval.current = setInterval(() => {
    //   setElapsed((t) => t + 1);
    // }, 1000);
    return () => {
      if (songInterval.current) clearInterval(songInterval.current);
    };
  }, []);

  return {
    currentSong,
    songList,
  };
};
