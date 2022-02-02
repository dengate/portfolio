import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { IntlProvider, FormattedMessage } from "react-intl";
import "./css/Projects.css";
import picture1 from "./pictures/ths1.png";
import picture2 from "./pictures/ths2.png";
import picture3 from "./pictures/ths3.png";

function Projects() {
  const { theme } = useTheme();
  const { language, projects_text } = useLanguage();
  return (
    <React.Fragment>
      <div className={`container photoContainer_${theme}`}>
        <div
          id="carouselExampleIndicators"
          className="carousel slide photoCarousel"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner" style={{ borderRadius: "20px" }}>
            <div className="carousel-item active">
              <img
                src={picture1}
                className="d-block w-100 carouselimage"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={picture2}
                className="d-block w-100 carouselimage"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={picture3}
                className="d-block w-100 carouselimage"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <br />
        <br />
        <IntlProvider messages={projects_text[language]}>
          <p>
            <FormattedMessage id="name" />
          </p>
          <br />
          <p>
            <FormattedMessage id="year" />
          </p>
          <br />
          <p>
            <FormattedMessage id="language" />
          </p>
          <br />
          <br />
          <p>
            <FormattedMessage id="description" />
          </p>
          <br />
          <p>
              <a href="http://ths.somee.com/"><FormattedMessage id="link" /></a>            
          </p>
        </IntlProvider>
      </div>
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}

export default Projects;
