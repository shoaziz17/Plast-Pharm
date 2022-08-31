import React from "react";
import { HiPhone, HiOutlineMail, HiLocationMarker } from "react-icons/hi";
function ContactTop() {
  return (
    <>
      <section id="contactTop">
        <div className="contacts">
          <div className="inner">
            <div className="icon">
              <HiPhone className="innerIcon"/>
            </div>
            <div className="text">
              <p>Phone number</p>
              <h1>+998 93 501 11 12</h1>
            </div>
          </div>

          <div className="inner">
            <div className="icon">
              <HiOutlineMail className="innerIcon" />
            </div>
            <div className="text">
              <p>E-mail</p>
              <h1>info@gmail.home</h1>
            </div>
          </div>

          <div className="inner">
            <div className="icon">
              <HiLocationMarker className="innerIcon" />
            </div>
            <div className="text">
              <p>Address:</p>
              <h1>Tashkent city, Yakkasaray district, Kichik Beshyagach street 124D</h1>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default ContactTop;
