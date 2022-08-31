import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../utilities/authContext";
import "../Styles/navbar.css";

function Navbar() {
  const { currentUser, logOut, admin } = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogOut = () => {
    logOut();
    navigate('/login');
  }

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/catalogue">Catalogue</Link>
        <Link to="/about">About us</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
        {admin ? <Link to='/create'>Create</Link> : null}
        {currentUser != null ? <button onClick={onLogOut} className="logout">Log Out</button> : <Link to="/login" className="loginBtn">Log In</Link>}
      </nav>
    </>
  );
}

export default Navbar;
