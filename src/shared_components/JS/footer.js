import React from "react";
import "../Styles/footer.css";
import logo from "../../images/Logos/logo.png";
import map from "../../images/Logos/map.png";
import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <>
      <footer>
        <div className="main-foot">
          <div className="foot-logo">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>
          <div className="foot-links">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/catalogue">
                <li>Cotalogue</li>
              </Link>
              <Link to="/about">
                <li>About us</li>
              </Link>
              <Link to="/gallery">
                <li>Gallery</li>
              </Link>
              <Link to="/contact">
                <li>Contacts</li>
              </Link>
            </ul>
            <ul>
              <li>Product</li>
              <Link to={"/vials"}>
                <li>Vials</li>
              </Link>
              <Link to={"/lids"}>
                <li>Lids</li>
              </Link>
              <Link to={"/probes"}>
                <li>Probes</li>
              </Link>
            </ul>
          </div>
          <div className="foot-map">
            <a
              href="https://www.google.com/maps/@41.3202859,69.2996615,15z"
              target={"_blank"}
            >
              <img src={map} alt="map" />
            </a>
            <h1>Address:</h1>
            <p>
              Tashkent city, Yakkasaray district, Kichik Beshyagach street 124D
            </p>
          </div>
          <div className="foot-info">
            <div className="contactUs">
              <p>Contact us:</p>
              <h1>+998 93 501 11 12</h1>
            </div>
            <div className="email">
              <p>Email:</p>
              <h1>info@ppholding.uz</h1>
            </div>
            <div className="socials">
              <a href="https://www.facebook.com/" target={"_blank"}>
                <BsInstagram />
              </a>
              <a href="https://www.instagram.com/" target={"_blank"}>
                <BsFacebook />
              </a>
              <a href="https://www.twitter.com/" target={"_blank"}>
                <BsTwitter />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
