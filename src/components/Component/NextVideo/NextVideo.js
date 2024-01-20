import "./NextVideo.scss";
function NextVideo({ videos, onVideoSelect }) {
  return (
    <div className="next-video">
      <p className="next-video__header">NEXT VIDEOS</p>
      <ul className="next-video__list">
        {videos.map((video) => (
          <li
            className="next-video__item"
            key={video.id}
            onClick={() => onVideoSelect(video)}
          >
            <img
              className="next-video__img"
              src={video.image}
              alt={video.title}
            />
            <div className="video__wrap">
              <p className="next-video__title">{video.title}</p>
              <p className="next-video__channel">{video.channel}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NextVideo;
