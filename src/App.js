import { useState } from "react";
import "./App.scss";
import Header from "./components/Component/Header/Header";
import videoData from "./data/videos.json";
import videoDetailsData from "./data/video-details.json";
import CurrentVideo from "./components/Component/CurrentVideo/CurrentVideo";

export function App() {
  const [currentVideo, setCurrentVideo] = useState(videoDetailsData);
  console.log(currentVideo);

  return (
    <>
      <Header />
      <CurrentVideo video={currentVideo} />
    </>
  );
}
