import picture1 from "./pictures/1.jpeg";
import picture2 from "./pictures/2.jpeg";
import picture3 from "./pictures/3.jpeg";
import "./css/PhotoContainer.css";
import { useTheme } from "../context/ThemeContext";
import React from "react";

function PhotoContainer() {
  const { theme } = useTheme();
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
                className="d-block w-100 carouselImage"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={picture2}
                className="d-block w-100 carouselImage"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={picture3}
                className="d-block w-100 carouselImage"
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
      </div>
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}

export default PhotoContainer;
