import { Link } from "react-router-dom";
import "./NextVideo.scss";
function NextVideo({ videos }) {
  return (
    <section className="next-video">
      <p className="next-video__header">NEXT VIDEOS</p>
      <ul className="next-video__list">
        {videos.map((video) => (
          <Link
            to={`/videos/${video.id}`}
            className="next-video__link"
            key={video.id}
          >
            <li className="next-video__item">
              <div className="next-video__img-container">
                <img
                  className="next-video__img"
                  src={video.image}
                  alt={video.title}
                />
              </div>
              <div className="video__wrap">
                <p className="next-video__title">{video.title}</p>
                <p className="next-video__channel">{video.channel}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}

export default NextVideo;
