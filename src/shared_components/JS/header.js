import React, { useContext, useState } from "react";
import Navbar from "./navbar";
import logo from "../../images/Logos/logo.png";
import "../Styles/header.css";
import { Link } from "react-router-dom";
import { HiMenu, HiOutlineX, HiOutlineShoppingCart } from "react-icons/hi";
import { ProductContext } from "../../utilities/productContext";
function Header() {
  const [isOpen, setIsOpen] = useState(true);
  const { cardItem } = useContext(ProductContext);
  function change() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }
  return (
    <>
      <header className="desktop">
        <div className="main-head">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="nav">
            <Navbar />
          </div>
          <div className="languages">
            <Link to={'/error'}>
              <button className="russ">Ru</button>
            </Link>
            <button className="eng">En</button>
          </div>
          <div className="call">
            <p>Contact us:</p>
            <h1>+99893 501 11 12</h1>
          </div>
          <div className="shop">
            <Link to={'/buyed'}>
              <button>
                <HiOutlineShoppingCart className="shopIcon" />
                {cardItem.length > 0 ? <span>{cardItem.length}</span> : null}
              </button>
            </Link>
          </div>
        </div>
      </header>

      <header className="mobile">
        <div
          style={{ height: isOpen ? "50px" : "600px" }}
          className="main-head"
        >
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
            {isOpen ? (
              <HiMenu onClick={change} className="burgerIcon" />
            ) : (
              <HiOutlineX onClick={change} className="cancelIcon" />
            )}
          </div>

          <div
            style={{ display: isOpen ? "none" : "block" }}
            className="nav animate__animated animate__fadeInDown"
          >
            <Navbar />
          </div>
          <div
            style={{ display: isOpen ? "none" : "block" }}
            className="languages animate__animated animate__fadeInDown"
          >
            <Link to={'/error'}>
              <button className="russ">Ru</button>
            </Link>
            <button className="eng">En</button>
          </div>
          <div
            style={{ display: isOpen ? "none" : "block" }}
            className="call animate__animated animate__fadeInDown"
          >
            <p>Contact us:</p>
            <h1>+99893 501 11 12</h1>
          </div>
          <div className="shop">
            <Link to={'/buyed'}>
              <button>
                <HiOutlineShoppingCart className="shopIcon" />
                {cardItem.length > 0 ? <span>{cardItem.length}</span> : null}
              </button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
