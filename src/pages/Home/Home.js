import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import NextVideo from "../../components/NextVideo/NextVideo";
import Description from "../../components/Description/Description";
import Comments from "../../components/Comments/Comments";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Home() {
  const apiKey = "9755b879-c57d-4204-b1a1-6d3e0427929b";

  const [nextVideos, setNextVideos] = useState([]);
  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        `https://project-2-api.herokuapp.com/videos/?api_key=${apiKey}`
      );
      const videosData = response.data;
      console.log(videosData);
      setNextVideos(videosData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const [selectedVideo, setSelectedVideo] = useState({});
  const { videoId } = useParams();

  const fetchVideo = async () => {
    try {
      const response = await axios.get(
        `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${apiKey}`
      );
      const videoDetailsData = response.data;
      console.log(videoDetailsData.id);
      setSelectedVideo(videoDetailsData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchVideo();
  }, [videoId]);

  const handleSelectedVideo = (clickedId) => {
    const foundVideo = nextVideos.find((video) => clickedId === video.id);
    setSelectedVideo(foundVideo);
  };

  const sideVideos = nextVideos.filter(
    (video) => video.id !== selectedVideo.id
  );
  console.log(sideVideos);
  return (
    <div className="home">
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
