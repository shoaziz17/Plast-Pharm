import React from "react";
import "../home.css";
import double from "../../../images/Bottles/double.png"
import logo3 from "../../../images/Logos/logo3.png"
import "animate.css";
import { Link } from "react-router-dom";
function HeaderHome() {
  return (
    <>
      <section id="header">
        <div className="header-head">
          <div className="header-head__text">
            <div className="text__logo">
              <img
                src={logo3}
                alt="logo3"
                className="animate__animated animate__zoomInDown"
              />
            </div>
            <div className="text__content animate__animated animate__zoomInDown">
              <h1>
                Production of medical vials and caps for the pharmaceutical
                industry
              </h1>
              <p>Production of capsules for the food industry</p>
            </div>
            <div className="text__links">
              <Link to="/catalogue">Go to catalogue</Link>
              <Link to={"/gallery"}>
                Manufacture
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="header-head__img">
            <div className="imgs">
              <img src={double} alt="ing" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeaderHome;
