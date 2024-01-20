import { useState } from "react";
import "./App.scss";
import Header from "./components/Component/Header/Header";
import videosData from "./data/videos.json";
import videoDetailsData from "./data/video-details.json";
import CurrentVideo from "./components/Component/CurrentVideo/CurrentVideo";
import NextVideo from "./components/Component/NextVideo/NextVideo";
import Description from "./components/Component/Description/Description";

export function App() {
  const [nextVideos, setNextVideos] = useState(videosData);
  //console.log(nextVideos);

  const [selectedVideo, setSelectedVideo] = useState(videoDetailsData[0]);
  //console.log(selectedVideo);

  const handleSelectedVideo = (clickedId) => {
    const foundVideo = videoDetailsData.find((video) => clickedId === video.id);
    setSelectedVideo(foundVideo);
  };

  const sideVideos = nextVideos.filter(
    (video) => video.id !== selectedVideo.Id
  );
  //console.log(sideVideos);
  return (
    <>
      <Header />
      <CurrentVideo selectedVideo={selectedVideo} />
      <Description detail={selectedVideo} />
      <NextVideo videos={sideVideos} selectVideo={handleSelectedVideo} />
    </>
  );

  // const foundVideo = videoDetailsData.find(())

  // const mainVideoId = currentVideo.id;
  // console.log(currentVideo.id);

  // const mainVideoData = videoData.filter((video) => video.id === mainVideoId);
  // console.log(mainVideoData);
}
