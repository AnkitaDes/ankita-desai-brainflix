import "./CurrentVideo.scss";
function CurrentVideo({ selectedVideo }) {
  return (
    <div key={selectedVideo.id} className="video">
      <video
        className="video__img"
        controls
        poster={selectedVideo.image}
      ></video>
    </div>
  );
}

export default CurrentVideo;
