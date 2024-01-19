function CurrentVideo({ video }) {
  return (
    <div className="current__video">
      <video controls poster={video[0].image}></video>
    </div>
  );
}

export default CurrentVideo;
