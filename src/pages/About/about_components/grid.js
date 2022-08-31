import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
function Grid() {
  AOS.init();
  const [image, setImage] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:3000/workers')
      .then(function (response) {
        setImage(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  const aboutImg = image.map((img) => {
    return (
      <>
        <img data-aos="zoom-in-down" data-aos-easing="linear"
          data-aos-duration="500" src={img.img} alt="img" />
      </>
    );
  });

  return (
    <>
      <section id="grid">
        <div className="gridCard">{aboutImg}</div>
        <div className="grid-text">
          <p>
            As for the responsibility for the health and safety of our employees
            at work, PHARM PLAST HOLDING LLC follows all precautions, and also
            promotes efficient and effective working methods that have been
            clearly explained to our teams. Being a respected Asian manufacturer
            of high-quality plastic products (medicines, drops, capsules) of the
            pharmaceutical industry and PET preforms and caps in the assortment.
            PHARM PLAST HOLDING LLC is an ambitious partner of international and
            global companies with current innovative development plans.
          </p>
        </div>
      </section>
    </>
  );
}

export default Grid;
