"use client"

import pauseSvg from "@/assets/pause.svg";
import { Box, Slider } from "@mui/material";
import Image from "next/image";
import { useRef, useState } from "react";
import audioBtnSvg from "../../assets/audiobtn.svg";

export default function Audio({ audio }) {
  // console.log(audio)
  const [play, setPlay] = useState(false);
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0)

  const togglePlay = () => {
    if (play) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!play);
  };

  const timeUpdate = (e) => {
    const music = audioRef.current;

    const upcomingProgress = Math.floor(
      (music.currentTime / music.duration) * 100
    );
    setProgress(upcomingProgress);
  };

  const progressUpdate = (e) => {
    const music = audioRef.current;
    setProgress(e.target.value);
    music.currentTime = (music.duration * e.target.value) / 100;
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src={audio}
        onTimeUpdate={timeUpdate}
        controls
        className="w-0 h-0"
      />
      <div className="flex items-center gap-2">
        <Image
          src={play ? pauseSvg : audioBtnSvg}
          alt="audiobtn"
          width={40}
          height={40}
          className="cursor-pointer"
          onClick={togglePlay}
        />
        {play && (
          <Box sx={{ width: 150, marginLeft: 1, marginTop: 1 }} className="flex items-center gap-2">
            <Slider
              aria-label="Temperature"
              value={progress}
              color="success"
              onChange={progressUpdate}
            />
            <span className="text-[#BDBDBD]">00:{Math.round(audioRef.current.duration)}</span>
          </Box>
        )}

      </div>
    </div>
  )
}