import "./CurrentVideo.scss";
export default function CurrentVideo({ selectedVideo }) {
  return (
    <section key={selectedVideo.id} className="video">
      <div className="video__wrapper">
        <video
          className="video__img"
          controls
          poster={selectedVideo.image}
          src={selectedVideo.video}
        ></video>
        <div className="video__controls"></div>
      </div>
    </section>
  );
}
