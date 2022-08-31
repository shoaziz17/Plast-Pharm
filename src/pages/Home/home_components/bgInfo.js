import React from "react";
import "../home.css";
import xlBottle from "../../../images/Bottles/xl bottle.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
function BgInfo() {
  AOS.init();
  return (
    <>
      <section id="bgInfo">
        <div className="bgInfo">
          <div className="xl-text">
            <h1>Pharm Plast</h1>
          </div>
          <div className="bg-content">
            <div data-aos="zoom-in-right" className="bg-left">
              <img src={xlBottle} alt="xlBottle" />
            </div>
            <div data-aos="zoom-in-left" data-aos-easing="linear"
              data-aos-duration="500" className="bg-right">
              <h1>About our products</h1>
              <div className="bg-right-boxes">
                <div className="box">
                  <h2>Proven professionals in their field</h2>
                  <p>
                    The main field of activity of OOO "PHARM PLAST HOLDING" is
                    high-quality plastic products (medicines, drops, capsules)
                    of the pharmaceutical industry. We appreciate in this
                    material that our products ensure the tightness
                  </p>
                </div>
                <div className="box">
                  <h2>Proven professionals in their field</h2>
                  <p>
                    The main field of activity of OOO "PHARM PLAST HOLDING" is
                    high-quality plastic products (medicines, drops, capsules)
                    of the pharmaceutical industry. We appreciate in this
                    material that our products ensure the tightness
                  </p>
                </div>
                <div className="box">
                  <h2>Proven professionals in their field</h2>
                  <p>
                    The main field of activity of OOO "PHARM PLAST HOLDING" is
                    high-quality plastic products (medicines, drops, capsules)
                    of the pharmaceutical industry. We appreciate in this
                    material that our products ensure the tightness
                  </p>
                </div>
                <div className="box">
                  <h2>Proven professionals in their field</h2>
                  <p>
                    The main field of activity of OOO "PHARM PLAST HOLDING" is
                    high-quality plastic products (medicines, drops, capsules)
                    of the pharmaceutical industry. We appreciate in this
                    material that our products ensure the tightness
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BgInfo;
