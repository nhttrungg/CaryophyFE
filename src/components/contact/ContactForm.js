import React from "react";

const ContactForm = () => (
  <div className="u-s-p-b-60">
    <div className="section__content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-area u-h-100">
              <div className="contact-area__heading">
                <h2>Get In Touch</h2>
              </div>
              <form className="contact-f" method="post" action="index.html">
                <div className="row">
                  <div className="col-lg-6 col-md-6 u-h-100">
                    <div className="u-s-m-b-30">
                      <label htmlFor="c-name"></label>
                      <input
                        className="input-text input-text--border-radius input-text--primary-style"
                        type="text"
                        id="c-name"
                        placeholder="Name (Required)"
                        required
                      />
                    </div>
                    <div className="u-s-m-b-30">
                      <label htmlFor="c-email"></label>
                      <input
                        className="input-text input-text--border-radius input-text--primary-style"
                        type="text"
                        id="c-email"
                        placeholder="Email (Required)"
                        required
                      />
                    </div>
                    <div className="u-s-m-b-30">
                      <label htmlFor="c-subject"></label>
                      <input
                        className="input-text input-text--border-radius input-text--primary-style"
                        type="text"
                        id="c-subject"
                        placeholder="Subject (Required)"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 u-h-100">
                    <div className="u-s-m-b-30">
                      <label htmlFor="c-message"></label>
                      <textarea
                        className="text-area text-area--border-radius text-area--primary-style"
                        id="c-message"
                        placeholder="Compose a Message (Required)"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button className="btn btn--e-brand-b-2" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactForm;