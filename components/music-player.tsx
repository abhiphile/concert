// components/AudioPlayer.tsx

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { TrackPreviousIcon, PlayIcon, PauseIcon, TrackNextIcon } from '@radix-ui/react-icons';

interface Track {
  url: string;
  title: string;
  tags: string[];
  albumArt: string;
}

interface AudioPlayerProps {
  tracks: Track[];
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ tracks }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrack, isPlaying]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
  };

  const playPrevTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length);
  };

  return (
    <div
  className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg relative"
  style={{ backgroundImage: `url(${currentTrack.albumArt})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50 blur-lg"></div>
  <audio
    ref={audioRef}
    src={currentTrack.url}
    onEnded={playNextTrack}
    onPlay={() => setIsPlaying(true)}
    onPause={() => setIsPlaying(false)}
    className="hidden"
  />
  <div className="relative z-10 flex flex-col items-center space-y-4">
    <h2 className="text-xl text-white mb-4">{currentTrack.title}</h2>
    <div className="flex items-center space-x-4">
      <Button onClick={playPrevTrack} className="bg-black hover:bg-gray-600 p-2 rounded-full">
        <TrackPreviousIcon className="w-6 h-6 text-white" />
      </Button>
      <Button onClick={togglePlayPause} className="bg-black hover:bg-gray-600 p-2 rounded-50">
        {isPlaying ? <PauseIcon className="w-6 h-6 text-white" /> : <PlayIcon className="w-6 h-6 text-white" />}
      </Button>
      <Button onClick={playNextTrack} className="bg-black hover:bg-gray-600 p-2 rounded-full">
        <TrackNextIcon className="w-6 h-6 text-white" />
      </Button>
    </div>
  </div>
</div>

  );
};

export default AudioPlayer;
