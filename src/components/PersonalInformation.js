import "./css/PersonalInformation.css";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { IntlProvider, FormattedMessage } from "react-intl";
import React from "react";

function PersonalInformation() {
  const { theme } = useTheme();
  const { language, personalInformation_text } = useLanguage();
  return (
    <React.Fragment>
      <IntlProvider messages={personalInformation_text[language]}>
        <div className={`container informationContainer_${theme}`}>
          <blockquote className="blockquote information">
              <br />
            <p>
              <FormattedMessage id="name" />
            </p>
            <br />
            <p>
              <FormattedMessage id="surname" />
            </p>
            <br />
            <p>
              <FormattedMessage id="birthDate" />
            </p>
            <br />
            <p>
              <FormattedMessage id="education" />
            </p>
            <br />
            <p>
              <FormattedMessage id="backend_head" />
            </p>
            <p>
              <FormattedMessage id="backend_text" />
            </p>
            <br />
            <p>
              <FormattedMessage id="frontend_head" />
            </p>
            <p>
              <FormattedMessage id="frontend_text" />
            </p>
            <br />
            <p>
              <FormattedMessage id="database_head" />
            </p>
            <p>
              <FormattedMessage id="database_text" />
            </p>
            <br />
          </blockquote>
        </div>
      </IntlProvider>
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}

export default PersonalInformation;
