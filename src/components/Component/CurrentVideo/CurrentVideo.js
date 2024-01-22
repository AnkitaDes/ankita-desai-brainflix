import "./CurrentVideo.scss";
function CurrentVideo({ selectedVideo }) {
  return (
    <div key={selectedVideo.id} className="video">
      <video
        className="video__img"
        controls
        poster={selectedVideo.image}
        src={selectedVideo.video}
      ></video>
      <div className="video__controls"></div>
    </div>
  );
}

export default CurrentVideo;
