import React from "react";
import ContactBreadcrumb from "../../components/contact/ContactBreadcrumb";
import ContactMap from "../../components/contact/ContactMap";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactForm from "../../components/contact/ContactForm";

const ContactPage = () => (
  <div className="app-content">
    <ContactBreadcrumb />
    <ContactMap />
    <ContactInfo />
    <ContactForm />
  </div>
);

export default ContactPage;