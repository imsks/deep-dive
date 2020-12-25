import React from 'react';
import OurFoundationCourses from '../components/OurFoundationCourses';
import OurCrashCourses from '../components/OurCrashCourses';

const Homepage = () => {
  return (
    <section className="virgintutor__main">
      <div className="virgintutor__main__section">
        <div className="virgintutor__main__section__head">
          <img
            src="/assets/images/landing-header.png"
            className="virgintutor__main__section__head__image"
            alt="vergin tutor landing header"
          />
          <h1 className="virgintutor__main__section__head__title heading-primary--main">
            Prepare your exams without moving out of your room.
          </h1>
          <p className="virgintutor__main__section__head__subtitle heading-secondary--sub">
            We help you create an online learning experience in this pandemic time for your exam
            preparations.
          </p>
          <a href="#courses">
            <button className="btn btn-lg virgintutor__main__section__head__button" type="button">
              Start your learning
            </button>
          </a>
        </div>

        <div className="virgintutor__main__section__components" id="courses">
          <div className="virgintutor__main__section__components__student">
            <div className="virgintutor__main__section__components__student__image">
              <img
                src="assets/images/student.png"
                alt="tutor_image"
                className="virgintutor__main__section__components__student__image__item"
              />
            </div>
            <div className="virgintutor__main__section__components__student__content">
              <h1 className="heading-secondary--main virgintutor__main__section__components__student__content__heading">
                Having issues with your exam preparations?
              </h1>
              <p className="heading-secondary--sub virgintutor__main__section__components__student__content__subheading">
                Join one of our batches and get taught by teachers from IITs and IIMs. Joining is as
                simple as playing music.
              </p>

              <a
                href="/register"
                className="virgintutor__main__section__components__student__content__link"
              >
                <button
                  className="btn btn-md virgintutor__main__section__components__student__content__button"
                  type="button"
                >
                  Join A Batch
                </button>
              </a>
            </div>
          </div>
        </div>

        <OurCrashCourses />

        <OurFoundationCourses />
      </div>
    </section>
  );
};

export default {
  component: Homepage,
};
