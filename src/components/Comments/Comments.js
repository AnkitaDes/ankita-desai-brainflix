import "./Comments.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";
function Comments({ selectedComments }) {
  console.log(selectedComments);
  const comments = selectedComments?.comments || [];

  return (
    <div className="comments">
      <p className="comments__num">{comments.length} Comments</p>
      <form className="comments__form">
        <h2 className="comments__title">JOIN THE CONVERSATION</h2>
      </form>
      <div className="comments__avatar-input-wrap">
        <div className="comments__avatar-wrap">
          <img className="comments__avatar" src={avatar} alt="avatar-pic" />
        </div>
        <div className="comments__input-btn-wrap">
          <div className="comments__input-wrap">
            <input
              type="text"
              placeholder="Add a new comment"
              className="comments__input"
            />
          </div>
          <div className="comments__btn-wrap">
            <button className="comments__btn">
              COMMENT
              <span className="comments__btn-icon-wrap"></span>
            </button>
          </div>
        </div>
      </div>
      <div className="comments__list">
        {comments.map((comment) => (
          <div key={comment.id} className="comments__container">
            <div className="comments__circle"></div>
            <div className="comments__name-comments-wrap">
              <p className="comments__name">{comment.name}</p>
              <p className="comments__comment">{comment.comment}</p>
            </div>
            <p className="comments__date">
              {new Date(comment.timestamp).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
