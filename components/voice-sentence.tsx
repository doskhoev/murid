"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const STOP_EVENT = "murid:voice-sentence-stop";

type VoiceSentenceProps = {
  audioSrc: string;
  children: ReactNode;
};

export function VoiceSentence({ audioSrc, children }: VoiceSentenceProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onEnded = () => setPlaying(false);
    el.addEventListener("ended", onEnded);
    return () => el.removeEventListener("ended", onEnded);
  }, [audioSrc]);

  useEffect(() => {
    const onStopOthers = () => {
      const el = audioRef.current;
      if (!el || el.paused) return;
      el.pause();
      el.currentTime = 0;
      setPlaying(false);
    };
    window.addEventListener(STOP_EVENT, onStopOthers);
    return () => window.removeEventListener(STOP_EVENT, onStopOthers);
  }, []);

  const onClick = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;

    if (playing) {
      el.pause();
      el.currentTime = 0;
      setPlaying(false);
      return;
    }

    window.dispatchEvent(new Event(STOP_EVENT));
    void el.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    );
  }, [playing]);

  return (
    <>
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="none"
        className="sr-only"
        aria-hidden
      />
      <button
        type="button"
        className="voice-sentence"
        data-playing={playing ? "true" : "false"}
        aria-pressed={playing}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
