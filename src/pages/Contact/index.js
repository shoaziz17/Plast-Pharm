import React from "react";
import Layout from "../../shared_components/Layout";
import "./contact.css";
import ContactTop from "./contact_components/contactTop";
import Registration from "./contact_components/registration";

function Contact() {
  return (
    <>
      <Layout>
        <section id="contact">
          <h1 className="secHead">Contacts</h1>
          <ContactTop />
          <Registration />
        </section>
      </Layout>
    </>
  );
}

export default Contact;
