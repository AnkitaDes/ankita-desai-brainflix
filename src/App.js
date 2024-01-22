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
    <div className="app">
      <Header className="app__header" />
      <CurrentVideo
        className="app__current-video"
        selectedVideo={selectedVideo}
      />
      <div className="app__description-next-container">
        <div className="app__description-comments-wrap">
          <Description className="app__description" detail={selectedVideo} />
          <Comments
            className="app__comments"
            selectedComments={selectedVideo}
          />
        </div>
        <NextVideo
          className="app__next-video"
          videos={sideVideos}
          selectVideo={handleSelectedVideo}
        />
      </div>
    </div>
  );
}
