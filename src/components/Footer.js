import React from "react";
import "./css/Footer.css";
import {useTheme} from '../context/ThemeContext';



function Footer() {
    const {theme} = useTheme();
  return (
    <React.Fragment>
      <footer className={`bg-${theme} text-center text-white`}>
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-primary btn-floating m-1 footerbtn"
              style={{ backgroundColor: "#3b5998" }}
              href="/"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-primary btn-floating m-1 footerbtn"
              style={{ backgroundColor: "#55acee" }}
              href="https://twitter.com/herguner_ahmet"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-primary btn-floating m-1 footerbtn"
              style={{ backgroundColor: "#dd4b39" }}
              href="hergunerahmetemin@gmail.com"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              className="btn btn-primary btn-floating m-1 footerbtn"
              style={{ backgroundColor: "rgb(211 16 16)" }}
              href="https://www.youtube.com/channel/UCV3wBTqbRfS5LLoIDvRyLYg"
              role="button"
            >
              <i class="fab fa-youtube"></i>
            </a>

            <a
              className="btn btn-primary btn-floating m-1 footerbtn"
              style={{ backgroundColor: "#0082ca" }}
              href="https://tr.linkedin.com/in/ahmet-emin-hergüner-3b87a5212"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="btn btn-primary btn-floating m-1 footerbtn"
              style={{ backgroundColor: "#333333" }}
              href="https://github.com/dengate"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:
          <a className="text-white" href="https://localhost:3000/">
            hergunerportfolio.com
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
