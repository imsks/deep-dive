import React from 'react';

const OurCrashCourses = () => {
  return (
    <section className="pricing">
      <div className="pricing__heading">
        <h1 className="heading-primary--main">Our Crash Courses</h1>
      </div>
      <div className="pricing__content">
        <div className="pricing__content__item">
          <h1 className="heading-secondary--sub">For 9th-10th Students</h1>

          <h1 className="heading-secondary--main pricing__content__item__price">
            Crash Price - 55,000 ₹
          </h1>
        </div>
        <div className="pricing__content__item">
          <h1 className="heading-secondary--sub">For 11th(NEET) Students</h1>

          <h1 className="heading-secondary--main pricing__content__item__price">
            Crash Price - 45,000 ₹
          </h1>
        </div>
        <div className="pricing__content__item">
          <h1 className="heading-secondary--sub">For 12th(IIT) Students</h1>

          <h1 className="heading-secondary--main pricing__content__item__price">
            Crash Price - 45,000 ₹
          </h1>
        </div>
      </div>
    </section>
  );
};

export default OurCrashCourses;
