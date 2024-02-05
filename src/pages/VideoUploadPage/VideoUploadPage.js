import "./VideoUploadPage.scss";
import upload from "../../assets/images/Upload-video-preview.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function VideoUploadPage() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const titleValue = event.target.elements.title.value;
    const descriptionValue = event.target.elements.description.value;

    const formData = new FormData();
    formData.append("title", titleValue);
    formData.append("description", descriptionValue);

    try {
      await axios.post("http://localhost:8083/videos/upload", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Your upload was successful!");
      event.target.reset();
      navigate("/");
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  return (
    <main className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <form className="upload__form" onSubmit={handleSubmit}>
        <div className="upload__img-details-wrap">
          <div className="upload__subtitle-img-wrap">
            <p className="upload__subtitle">VIDEO THUMBNAIL</p>
            <div className="upload__img-wrap">
              <img className="upload__img" src={upload} alt="" />
            </div>
          </div>
          <div className="upload__details-wrap">
            <label className="upload__details-title">TITLE YOUR VIDEO</label>
            <input
              type="text"
              name="title"
              placeholder="Add a title to your video"
              className="upload__title-input"
              required
            />
            <label className="upload__details-description">
              TITLE ADD A VIDEO DESCRIPTION
            </label>
            <input
              type="text"
              name="description"
              placeholder="Add a description to your video"
              className="upload__details-input"
              required
            />
          </div>
        </div>
        <div className="upload__cancel-btn-wrap">
          <Link to="/" className="upload__link">
            <p className="upload__cancel-tabdesk">CANCEL</p>
          </Link>
          <div className="upload__btn-wrap">
            <button className="upload__btn" type="submit">
              PUBLISH
              <span className="upload__btn-icon-wrap"></span>
            </button>
          </div>
          <Link to="/" className="upload__link">
            <p className="upload__cancel-mobile">CANCEL</p>
          </Link>
        </div>
      </form>
    </main>
  );
}
