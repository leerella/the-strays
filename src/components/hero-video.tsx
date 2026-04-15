"use client";

import { useRef, useState } from "react";

const videos = [
  "/media/hero1.mp4",
  "/media/hero2.mp4",
];

export default function HeroVideo() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handleEnded() {
    setIndex((prev) => (prev + 1) % videos.length);
  }

  return (
    <video
      ref={videoRef}
      key={index}
      autoPlay
      muted
      playsInline
      onEnded={handleEnded}
      poster="/media/poster.png"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    >
      <source src={videos[index]} type="video/mp4" />
    </video>
  );
}
