import "./Description.scss";
import viewsIcon from "../../../assets/images/icons/views.svg";
import likesIcon from "../../../assets/images/icons/likes.svg";

function Description({ detail }) {
  console.log(detail);
  const timestampDate = new Date(detail.timestamp);
  return (
    <div className="details" key={detail.id}>
      <div className="details__title-wrap">
        <h1 className="details__title">{detail.title}</h1>
      </div>
      <div className="details__container">
        <div className="details__channel-date-wrap">
          <p className="details__channel">By {detail.channel}</p>
          <p className="details__date">{timestampDate.toLocaleDateString()}</p>
        </div>
        <div className="details__views-likes-wrap">
          <div className="details__views-icon-wrap">
            <img className="details__views-icon" src={viewsIcon}></img>
            <p className="details__views">{detail.views}</p>
          </div>
          <div className="details__likes-icon-wrap">
            <img className="details__likes-icon" src={likesIcon}></img>
            <p className="details__likes">{detail.likes}</p>
          </div>
        </div>
      </div>
      <div className="details__description-wrap">
        <p className="details__description">{detail.description}</p>
      </div>
    </div>
  );
}

export default Description;
