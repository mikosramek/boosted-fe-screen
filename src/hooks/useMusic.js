import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { shuffle } from "~/utils/general";

import { songs } from "../data/songlist.json";

export const useMusic = () => {
  const [songIndex, setSongIndex] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const songInterval = useRef(null);

  const [isPlaying, togglePlaying] = useReducer((val) => !val, false);
  const [isLooping, toggleLooping] = useReducer((val) => !val, false);
  const [isShuffled, toggleShuffle] = useReducer((val) => !val, false);

  const songList = useMemo(() => {
    setElapsed(0);
    setSongIndex(0);
    if (!isShuffled) {
      return songs;
    } else {
      return shuffle([...songs]);
    }
  }, [songs, isShuffled]);

  const songCopy = useMemo(() => {
    return songList.map(({ title, artist }) => ({
      title,
      artist,
    }));
  }, [songList]);

  const playSong = useCallback(
    (index) => {
      setSongIndex(index);
      setElapsed(0);
      if (!isPlaying) togglePlaying();
    },
    [isPlaying]
  );

  const currentSong = { ...songList[songIndex], elapsed };

  useEffect(() => {
    if (isPlaying) {
      songInterval.current = setInterval(() => {
        setElapsed((t) => t + 1);
      }, 1000);
    } else {
      if (songInterval.current) clearInterval(songInterval.current);
    }
    return () => {
      if (songInterval.current) clearInterval(songInterval.current);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (elapsed > currentSong.duration) {
      if (isLooping) {
        setElapsed(0);
      } else {
        nextSong();
      }
    }
  }, [elapsed, currentSong]);

  const nextSong = () => {
    setSongIndex((previous) => {
      if (songIndex >= songs.length - 1) {
        return 0;
      }
      return previous + 1;
    });
    setElapsed(0);
  };

  const previousSong = () => {
    const wasPlaying = isPlaying;
    if (isPlaying) {
      togglePlaying();
    }
    if (elapsed < 1) {
      setSongIndex((previous) => {
        if (songIndex <= 0) {
          return songs.length - 1;
        }
        return previous - 1;
      });
    }
    setElapsed(0);
    if (wasPlaying) {
      setTimeout(() => {
        togglePlaying();
      }, 200);
    }
  };

  return {
    currentSong,
    songIndex,
    songCopy,
    controls: {
      togglePlaying,
      toggleLooping,
      toggleShuffle,
      nextSong,
      previousSong,
      playSong,
    },
    status: {
      isPlaying,
      isLooping,
      isShuffled,
    },
  };
};
