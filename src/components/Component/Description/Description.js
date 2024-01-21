function Description({ detail }) {
  console.log(detail);
  const timestampDate = new Date(detail.timestamp);
  return (
    <div key={detail.id}>
      <h2>{detail.title}</h2>
      <p>{detail.channel}</p>
      <p>{timestampDate.toLocaleDateString()}</p>
      <p>{detail.views}</p>
      <p>{detail.likes}</p>
      <p>{detail.description}</p>
    </div>
  );
}

export default Description;
