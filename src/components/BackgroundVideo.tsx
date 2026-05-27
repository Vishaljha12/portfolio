import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface BackgroundVideoProps {
  flip?: boolean;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ flip = false }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const src = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';
    const video = videoRef.current;

    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${flip ? 'scale-y-[-1]' : ''}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
      />
      <div className={`absolute inset-0 ${flip ? 'bg-black/60' : 'bg-black/20'}`} />
      {!flip && (
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      )}
    </div>
  );
};
