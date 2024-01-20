function CurrentVideo({ video }) {
  return (
    <div key={video.id} className="current__video">
      <video controls poster={video.image}></video>
    </div>
  );
}

export default CurrentVideo;
