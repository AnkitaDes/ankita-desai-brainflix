function Description({ detail }) {
  console.log(detail);
  return (
    <div key={detail.id}>
      <h2>{detail.title}</h2>
      <p>{detail.channel}</p>
      <p>{detail.views}</p>
      <p>{detail.likes}</p>
      <p>{detail.timestamp}</p>

      <p>{detail.description}</p>
    </div>
  );
}

export default Description;
