import "./css/Navbar.css";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { IntlProvider, FormattedMessage } from "react-intl";
import React from "react";

function Navbar() {
  const { theme, setTheme } = useTheme();
  const { language, header_text, setLanguage } = useLanguage();


  return (
    <React.Fragment>
      <IntlProvider messages={header_text[language]}>
        <nav className={`navbar navbar-${theme} bg-${theme} fixed-top`}>
          <div className="container-fluid container">
            <a className="navbar-brand" href="/">
              <FormattedMessage id="navbar_header" />
            </a>            
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              style={{
                backgroundColor: theme == "light" ? "#fff" : "#212529",
                color: theme == "light" ? "#212529" : "#fff",
              }}
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <FormattedMessage id="side_bar_header" />
                </h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a
                      className={`nav-link active side_bar_button_${theme}`}
                      aria-current="page"
                      href="/"
                    >
                      <FormattedMessage id="side_bar_home_button" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link side_bar_button_${theme}`}
                      href="/contact"
                    >
                      <FormattedMessage id="side_bar_contact_button" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link side_bar_button_${theme}`}
                      href="/projects"
                    >
                      <FormattedMessage id="side_bar_projects_button" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link side_bar_button_${theme} `}
                      onClick={() => {
                        language === "en"
                          ? setLanguage("tr")
                          : setLanguage("en");
                      }}
                    >
                      <FormattedMessage id="side_bar_language_button" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link side_bar_button_${theme}`}
                      onClick={() => {
                        theme === "light"
                          ? setTheme("dark")
                          : setTheme("light");
                      }}
                    >
                      <FormattedMessage id="side_bar_theme_button" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </IntlProvider>
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}

export default Navbar;
