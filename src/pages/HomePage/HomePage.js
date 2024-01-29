import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import NextVideo from "../../components/NextVideo/NextVideo";
import Description from "../../components/Description/Description";
import Comments from "../../components/Comments/Comments";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./HomePage.scss";

export default function HomePage() {
  const apiKey = "9755b879-c57d-4204-b1a1-6d3e0427929b";
  const [nextVideos, setNextVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});
  const { videoId } = useParams();

  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        `https://project-2-api.herokuapp.com/videos/?api_key=${apiKey}`
      );
      setNextVideos(response.data);
      fetchVideoDetails(response.data[0].id);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const fetchVideoDetails = async (id) => {
    try {
      const response = await axios.get(
        `https://project-2-api.herokuapp.com/videos/${id}?api_key=${apiKey}`
      );
      setSelectedVideo(response.data);
    } catch (error) {
      console.error("Error fetching video details:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    fetchVideoDetails(videoId);
  }, [videoId]);

  const sideVideos = nextVideos.filter(
    (video) => video.id !== selectedVideo.id
  );

  return (
    <main className="home">
      <CurrentVideo
        className="home__current-video"
        selectedVideo={selectedVideo}
      />
      <div className="home__description-next-container">
        <div className="app__description-comments-wrap">
          <Description className="app__description" detail={selectedVideo} />
          <Comments
            className="home__comments"
            selectedComments={selectedVideo}
          />
        </div>
        <NextVideo className="home__next-video" videos={sideVideos} />
      </div>
    </main>
  );
}
