import React from "react";

function Iframe() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11986.662605110028!2d69.28349799240938!3d41.31613665812619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41f23%3A0x81095e06b654b845!2z0J_QsNGA0Log0JDQvNC40YDQsCDQotC10LzRg9GA0LA!5e0!3m2!1sru!2s!4v1660628397165!5m2!1sru!2s"
        width={800}
        height={470}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

export default Iframe;
