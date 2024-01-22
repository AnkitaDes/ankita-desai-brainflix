import "./Header.scss";
import logo from "../../../assets/images/logos/BrainFlix-logo.svg";
import avatar from "../../../assets/images/Mohan-muruge.jpg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo-wrap">
        <img src={logo} alt="logo" className="header__logo" />
      </div>
      <div className="header__search-bar">
        <input type="text" placeholder="Search" className="header__input" />
        <span className="header__search-icon-wrap"></span>
        <div className="header__avatar-wrap">
          <img className="header__avatar" src={avatar} alt="avatar-pic" />
        </div>
      </div>
      <div className="header__btn-wrap">
        <button className="header__btn">
          UPLOAD
          <span className="header__btn-icon-wrap"></span>
        </button>
      </div>
    </header>
  );
}
