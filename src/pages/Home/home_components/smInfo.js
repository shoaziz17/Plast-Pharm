import React from "react";
import "../home.css";
import logo2 from "../../../images/Logos/logo2.png";
import { Link } from "react-router-dom";
function SmInfo() {
  return (
    <>
      <section id="smInfo">
        <div className="smInfo">
          <div className="smLogo">
            <img src={logo2} alt="logo2" />
          </div>
          <div className="para-link">
            <div className="paragraph">
              <p>
                Founded in 2015 in Uzbekistan, PHARM PLAST HOLDING LLC is
                located in the very center of the Syrdarya region, which has the
                highest production dynamics among 12 regions of Uzbekistan.
                Currently, the company serves more than 200 companies from more
                than 10 countries, although initially PHARM PLAST HOLDING LLC
                was founded as a manufacturer of plastic medical products. In
                February 2021, the third production line for PET preforms was
                launched, which allows diversifying the product range with an
                annual production volume of 300 million PET preforms, 150 000
                000 two-component and 350 000 000 one-component closures.
              </p>
            </div>
            <div className="links">
              <Link to={"/about"}>
                More about us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="blue"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
              <a href="#">
                Export
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="blue"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SmInfo;
