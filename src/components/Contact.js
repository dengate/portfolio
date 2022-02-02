import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { IntlProvider, FormattedMessage } from "react-intl";
import "./css/Contact.css";

function Contact() {
  const { theme } = useTheme();
  const { language, contact_text } = useLanguage();
  return (
    <React.Fragment>
        <br/>
            <br/>
      <IntlProvider messages={contact_text[language]}>
        <div className={`container contactContainer_${theme}`}>
          <blockquote className="blockquote information">
          <br/>
            <br/>
            <p>
              <FormattedMessage id="email" />
            </p>
            <br/>
            <br/>
            <p>
              <FormattedMessage id="gmail" />
            </p>
            <br/>
            <br/>
            <p>
              <FormattedMessage id="gsm" />
            </p>
            <br/>
            <br/>
            <p>
              <FormattedMessage id="linkedin" />
            </p>
            <br/>
            <br/>
          </blockquote>
        </div>
      </IntlProvider>
      <br />
      <br />
      <br />
      <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
    </React.Fragment>
  );
}

export default Contact;
