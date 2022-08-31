import React from "react";
import 'animate.css';
import logo from "../../../images/Logos/logo.png";
import CountUp from 'react-countup';
function AboutUs() {
  return (
    <>
      <section id="aboutUs">
        <div className="aboutUs">
          <div className="about">
            <div className="about-logo">
              <h1>About us</h1>
              <img src={logo} alt="logo" className="animate__animated animate__swing" />
            </div>
            <div className="about-text">
              <p className="textBold">
                LLC “PHARM PLAST HOLDING" is a dynamically developing modern
                manufacturer of high-quality plastic products (medicines, drops,
                capsules) in the pharmaceutical industry, as well as a
                manufacturer of PET preforms and caps for the preparation of PET
                bottles in the assortment.
              </p>
              <p className="textLight">
                Founded in 2015 in Uzbekistan, PHARM PLAST HOLDING LLC is
                located in the very center of the Syrdarya region, which has the
                highest production dynamics among the 12 regions of Uzbekistan.
                Currently, the company serves more than 200 companies from more
                than 10 countries, although initially PHARM PLAST HOLDING LLC
                was founded as a manufacturer of plastic medical products. PHARM
                PLAST HOLDING LLC expanded its business in the production of PET
                preforms, caps and handles in a wide range for filling
                carbonated and regular water and beverages in 2020 to provide
                its customers with high-quality products, continuous improvement
                of the production process and undoubtedly an individual approach
                to each client. We are proud to say that the principle of
                openness and honesty of our company is obvious to both customers
                and our employees. We encourage our team to achieve the optimal
                combination of skills, innovation and production capabilities,
                and as a result, the fact-based, exceptional solutions that we
                provide to our customers. Assuming full responsibility for the
                personal and professional development of our employees, we will
                continue to implement these profitable solutions. The values of
                our company reflect the desire for quality, as well as a modern
                approach to interaction, search for solutions, open and honest
                communication. As a team, we strive to ensure quality at all
                levels: from the first contact with the customer to ensuring the
                delivery of the product in strict accordance with the
                requirements. We understand the importance of absolute
                reliability, which is why we maintain our production processes
                and facilities at the highest level in accordance with ISO 9001
                standards.
              </p>
            </div>
            <div className="about-numbers animate__animated animate__jello">
              <div className="nums ">
                <h1>
                  <CountUp
                    end={385}
                    duration={2.75}
                    enableScrollSpy={true}
                    useEasing={true}
                  /> mln
                </h1>
                <p>Vials</p>
              </div>
              <div className="nums">
                <h1>
                  <CountUp
                    end={400}
                    duration={2.75}
                    enableScrollSpy={true}
                    useEasing={true}
                  /> mln
                </h1>
                <p>Probes</p>
              </div>
              <div className="nums">
                <h1>
                  <CountUp
                    end={455}
                    duration={2.75}
                    enableScrollSpy={true}
                    useEasing={true}
                  /> mln
                </h1>
                <p>Lid</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
