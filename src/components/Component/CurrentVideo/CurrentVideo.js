function CurrentVideo({ selectedVideo }) {
  return (
    <div key={selectedVideo.id}>
      <video className="video" controls poster={selectedVideo.image}></video>
    </div>
  );
}

export default CurrentVideo;
