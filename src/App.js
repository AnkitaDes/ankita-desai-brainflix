import { useState } from "react";
import "./App.scss";
import Header from "./components/Component/Header/Header";
import videoData from "./data/videos.json";
import videoDetailsData from "./data/video-details.json";
import CurrentVideo from "./components/Component/CurrentVideo/CurrentVideo";
import NextVideo from "./components/Component/NextVideo/NextVideo";

export function App() {
  const [currentVideo, setCurrentVideo] = useState(videoDetailsData);
  console.log(currentVideo);

  const [nextVideo, setNextVideo] = useState(videoData);
  console.log(nextVideo);

  const handleVideoSelect = (selectedVideo) => {
    setCurrentVideo(selectedVideo);
  };

  return (
    <>
      <Header />
      <CurrentVideo video={currentVideo} />
      <NextVideo videos={nextVideo} onVideoSelect={handleVideoSelect} />
    </>
  );
}
