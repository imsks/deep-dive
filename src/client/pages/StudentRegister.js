import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { studentRef } from '../database/Firestore';

class StudentRegister extends Component {
  state = {
    name: '',
    contact: '',
    location: '',
    standard: '',
    subjects: '',
    messageOnSubmit: null,
    buttonText: 'Send us',
    error: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      buttonText: 'Sending...',
    });

    let timeStamp = new Date();

    const data = {
      name: this.state.name,
      contact: this.state.contact,
      standard: this.state.standard,
      subjects: this.state.subjects,
      location: this.state.location,
      time: timeStamp.toDateString() + '  ' + timeStamp.toLocaleTimeString(),
    };

    studentRef
      .add(data)
      .then((result) => {
        this.setState({
          name: '',
          contact: '',
          location: '',
          messageOnSubmit: 'Congrats! We will talk to you soon.',
          buttonText: 'Sent!',
        });
        setTimeout(() => {
          this.setState({
            messageOnSubmit: null,
          });
        }, 5000);
      })
      .catch((err) => {
        this.setState({
          error: 'Error submitting. Call us',
        });
      });
  };

  handleFormData = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSelectData = (e) => {
    this.setState({
      standard: document.getElementById('standard').selectedOptions[0].value,
      subjects: document.getElementById('subjects').selectedOptions[0].value,
    });
  };

  render() {
    console.log(this.state.messageOnSubmit);
    return (
      <div>
        <Helmet>
          <title>Student Registration</title>
          <meta
            name="description"
            content="Get yourself a tuition and host a self-reliant student."
          />
          <meta
            name="keywords"
            content="virgin tutor student, virgin tutor student register,  virgin tutor student registration, find a tutor in lakhimpur, find a tutor in lakhimpur kheri"
          />
        </Helmet>
        {this.state.messageOnSubmit == null ? (
          <main className="student_registration">
            <h1 className="heading-secondary--main tutor_registration__heading">
              Ready to prepare online?
            </h1>
            <section className="student_registration__section">
              <div className="student_registration__section__content">
                <div className="help-steps__items">
                  <h1 className="heading-secondary--main help-steps__items__heading">
                    How will we help you?
                  </h1>
                  <div className="help-steps__items__item">
                    <h1 className="help-steps__items__item__heading">STEP 1</h1>
                    <p className="help-steps__items__item__content">
                      Register yourself by filling out the form on this page.
                    </p>
                  </div>
                  <div className="help-steps__items__item">
                    <h1 className="help-steps__items__item__heading">STEP 2</h1>
                    <p className="help-steps__items__item__content">
                      We'll call you and provide details of your joining in next batch.
                    </p>
                  </div>
                  <div className="help-steps__items__item">
                    <h1 className="help-steps__items__item__heading">STEP 3</h1>
                    <p className="help-steps__items__item__content">
                      You take the demo for 3 days and then decide if you want to continue with us.
                    </p>
                  </div>
                  <div className="help-steps__items__item">
                    <h1 className="help-steps__items__item__heading">STEP 4</h1>
                    <p className="help-steps__items__item__content">
                      Once sure that we're worth it, you pay availing our wide range of offers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="student_registration__section__form form">
                <h1 className="heading-secondary--main help-steps__items__heading">Register now</h1>
                <form action="#" onSubmit={this.handleSubmit} autoComplete="off">
                  <div className="form__group">
                    <label className="form__label">What is your name?</label>
                    <input
                      type="text"
                      className="form__input"
                      id="name"
                      value={this.state.name}
                      onChange={this.handleFormData}
                      required
                    />
                  </div>
                  <div className="form__group">
                    <label className="form__label">What's your contact no?</label>
                    <input
                      type="tel"
                      className="form__input"
                      id="contact"
                      value={this.state.contact}
                      onChange={this.handleFormData}
                      required
                    />
                  </div>
                  <div className="form__group">
                    <label className="form__label">Where do you live?</label>
                    <input
                      type="text"
                      className="form__input"
                      id="location"
                      value={this.state.location}
                      onChange={this.handleFormData}
                      required
                    />
                  </div>
                  <div className="form__group">
                    <label className="form__label">In which class you're studying currently?</label>
                    <select className="form__select" id="standard" onChange={this.handleSelectData}>
                      <option value="student-standard">Select standard:</option>
                      <option value="1st">Nursery</option>
                      <option value="1st">KG</option>
                      <option value="1st">1st</option>
                      <option value="2nd">2nd</option>
                      <option value="3rd">3rd</option>
                      <option value="4th">4th</option>
                      <option value="5th">5th</option>
                      <option value="6th">6th</option>
                      <option value="7th">7th</option>
                      <option value="8th">8th</option>
                      <option value="9th">9th</option>
                      <option value="10th">10th</option>
                      <option value="11th">11th</option>
                      <option value="12th">12th</option>
                    </select>
                  </div>
                  <div className="form__group">
                    <label className="form__label">In which subject you want help?</label>
                    <select className="form__select" id="subjects" onChange={this.handleSelectData}>
                      <option value="student-subjects">Select Subjects:</option>
                      <option value="All Subjects">All Subjects</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Physics">Physics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Maths">Maths</option>
                      <option value="English">English</option>
                    </select>
                  </div>
                  <div className="form__group">
                    <input
                      type="submit"
                      className="form__submit btn btn-md"
                      value={this.state.buttonText}
                    />
                  </div>
                </form>
                <span className="form__submit__message">{this.state.messageOnSubmit}</span>
                <span className="form__submit__message">{this.state.error}</span>
              </div>
            </section>
          </main>
        ) : (
          <div className="form__submit__section">
            <h3 className="form__submit__message">{this.state.messageOnSubmit}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default {
  component: StudentRegister,
};
