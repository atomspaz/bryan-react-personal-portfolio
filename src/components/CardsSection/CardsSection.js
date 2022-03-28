import React from "react";
import profilePhoto from "../../static/img/profilePhoto.jpg";
// FONT AWESOME
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const CardsSection = () => {
  return (
    <section className="card-container" id="about-me">
      <div className="card">
        <div className="profile-sidebar">
          <img src={profilePhoto} alt="" className="profile-img img" />
          <ul className="social-list">
            <li className="social-item">
              <a
                href="https://www.facebook.com/bryan.loh.33/"
                className="social-link"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://www.linkedin.com/in/bryan-loh-01775b150/"
                className="social-link"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://github.com/atomspaz"
                className="social-link"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithubSquare />
              </a>
            </li>
          </ul>
        </div>

        <div className="profile-main">
          <h2 className="profile-name">Bryan Loh</h2>
          <p className="profile-position">React Developer</p>
          <p className="profile-body">
            Hi! My name is Bryan Loh. I'm a front-end web developer specializing
            in <strong>ReactJS</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
