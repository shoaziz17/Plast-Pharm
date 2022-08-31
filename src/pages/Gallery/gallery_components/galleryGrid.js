import React from "react";
import img1 from "../../../images/Gallery/1.jpg";
import img2 from "../../../images/Gallery/2.jpg";
import img3 from "../../../images/Gallery/3.jpg";
import img4 from "../../../images/Gallery/4.jpg";
import img5 from "../../../images/Gallery/5.jpg";
import img6 from "../../../images/Gallery/6.jpg";
import img7 from "../../../images/Gallery/7.jpg";
import img8 from "../../../images/Gallery/8.jpg";
import logo from "../../../images/Logos/logo.png"


function GalleryGrid() {
  return (
    <>
      <section id="glGrid">
        <div className="glText">
          <h1>Gallery</h1>
          <img src={logo} alt="logo-img" />
        </div>
        <div className="glGrid">
          <div className="grid-item">
            <img src={img1} alt="img" />
          </div>
          <div className="grid-item">
            <img src={img2} alt="img" />
          </div>
          <div className="grid-item">
            <img src={img3} alt="img" />
          </div>
          <div className="grid-item">
            <img src={img4} alt="img" />
          </div>
          <div className="grid-item">
            <img src={img5} alt="img  " />
          </div>  
          <div className="grid-item">
            <img src={img6} alt="img  " />
          </div>
          <div className="grid-item">
            <img src={img7} alt="img  " />
          </div>
          <div className="grid-item">
            <img src={img8} alt="img  " />
          </div>
        </div>
      </section>
    </>
  );
}

export default GalleryGrid;
