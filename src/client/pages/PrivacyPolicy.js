import React from "react";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <section className="privacypolicy">
      <Helmet>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Privacy policies at Virgin Tutor, on how we use your data to find you right match"
        />
        <meta
          name="keywords"
          content="virgin tutor privacy policy, virgin tutor data privacy, vt privacy policy, virgin tutor private data policy"
        />
      </Helmet>
      <div className="privacypolicy__section">
        <div className="privacypolicy__section__heading">
          <h1 className="heading-primary--main">Our Privacy Policies</h1>
        </div>
        <div className="privacypolicy__section__content">
          <p className="privacypolicy__section__content__paragraph">
            At Virgin Tutor, accessible from virgintutor.web.app, one of our
            main priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by Virgin Tutor and how we use it.
          </p>

          <p className="privacypolicy__section__content__paragraph">
            At Virgin Tutor, accessible from virgintutor.web.app, one of our
            main priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by Virgin Tutor and how we use it. Communicate with you,
            either directly or through one of our partners, including for
            customer service, to provide you with updates and other information
            relating to the webste, and for marketing and promotional purposes
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
