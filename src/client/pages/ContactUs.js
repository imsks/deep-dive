import React from "react";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  return (
    <section className="contactus">
      <Helmet>
        <title>Contact us</title>
        <meta
          name="description"
          content="Directly connect with the team who built Virgin Tutor."
        />
        <meta
          name="keywords"
          content="virgin tutor contact us, virgin tutor contact number, virgin tutor customer care, virgin tutor email, virgin tutor phone no, contact at virgin tutor"
        />
      </Helmet>
      <div className="contactus__section">
        <h1 className="heading-primary--main contactus__section__heading">
          Ready to contact.
        </h1>
        <div className="contactus__section__card">
          <a
            href="tel:+916387599719"
            className="contactus__section__card__link"
          >
            <button className="btn btn-lg contactus__section__card__button">
              Call us
            </button>
          </a>
        </div>

        <div className="contactus__section__card">
          <a
            href="mailto: sachinkshukla007@gmail.com"
            className="contactus__section__card__link"
          >
            <button className="btn btn-lg contactus__section__card__button">
              Send a mail
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
