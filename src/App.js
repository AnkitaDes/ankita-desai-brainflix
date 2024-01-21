import { useState } from "react";
import "./App.scss";
import Header from "./components/Component/Header/Header";
import videosData from "./data/videos.json";
import videoDetailsData from "./data/video-details.json";
import CurrentVideo from "./components/Component/CurrentVideo/CurrentVideo";
import NextVideo from "./components/Component/NextVideo/NextVideo";
import Description from "./components/Component/Description/Description";
import Comments from "./components/Component/Comments/Comments";

export function App() {
  const [nextVideos, setNextVideos] = useState(videosData);
  //console.log(nextVideos);

  const [selectedVideo, setSelectedVideo] = useState(videoDetailsData[0]);
  console.log(selectedVideo);

  const handleSelectedVideo = (clickedId) => {
    const foundVideo = videoDetailsData.find((video) => clickedId === video.id);
    setSelectedVideo(foundVideo);
  };

  const sideVideos = nextVideos.filter(
    (video) => video.id !== selectedVideo.id
  );
  console.log(sideVideos);
  return (
    <>
      <Header />
      <CurrentVideo selectedVideo={selectedVideo} />
      <Description detail={selectedVideo} />
      <Comments selectedComments={selectedVideo} />
      <NextVideo videos={sideVideos} selectVideo={handleSelectedVideo} />
    </>
  );
}
