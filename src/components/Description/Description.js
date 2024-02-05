import "./Description.scss";
import viewsIcon from "../../assets/images/icons/views.svg";
import likesIcon from "../../assets/images/icons/likes.svg";

export default function Description({ detail }) {
  function timeAgo(time) {
    const currentDate = new Date();
    const commentDate = new Date(time);

    const timeDifference = currentDate - commentDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} ${days === 1 ? "day" : "days"} ago`;
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else {
      return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
    }
  }

  return (
    <section className="details" key={detail.id}>
      <div className="details__title-wrap">
        <h1 className="details__title">{detail.title}</h1>
      </div>
      <div className="details__container">
        <div className="details__channel-date-wrap">
          <p className="details__channel">By {detail.channel}</p>
          <p className="details__date">{timeAgo(detail.timestamp)}</p>
        </div>
        <div className="details__views-likes-wrap">
          <div className="details__views-icon-wrap">
            <img
              className="details__views-icon"
              src={viewsIcon}
              alt="views icon"
            ></img>
            <p className="details__views">{detail.views}</p>
          </div>
          <div className="details__likes-icon-wrap">
            <img
              className="details__likes-icon"
              src={likesIcon}
              alt="likes icon"
            ></img>
            <p className="details__likes">{detail.likes}</p>
          </div>
        </div>
      </div>
      <div className="details__description-wrap">
        <p className="details__description">{detail.description}</p>
      </div>
    </section>
  );
}
