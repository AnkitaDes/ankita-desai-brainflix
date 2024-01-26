import "./Header.scss";
import logo from "../../assets/images/logos/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <Link to="/">
              <div className="header__logo-wrap">
                <img src={logo} alt="logo" className="header__logo" />
              </div>
            </Link>
          </li>
          <li className="header__item">
            <div className="header__search-bar">
              <input
                type="text"
                placeholder="Search"
                className="header__input"
              />
              <span className="header__search-icon-wrap"></span>
              <div className="header__avatar-wrap">
                <img className="header__avatar" src={avatar} alt="avatar-pic" />
              </div>
            </div>
          </li>
          <li className="header__item">
            <Link to="/videouploadpage">
              <div className="header__btn-wrap">
                <button className="header__btn">
                  UPLOAD
                  <span className="header__btn-icon-wrap"></span>
                </button>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
