import React, { useEffect, useState } from "react";
import "../home.css";
import pph from "../../../images/Logos/pph.png";
import { Link } from "react-router-dom";
import axios from "axios";
function Cards() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/card')
      .then(function (response) {
        setCards(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  const cardItems = cards.map((card) => {
    return (
      <div className="card">
        <div className="top">
          <div className="top-left">
            <p>Product</p>
            <h1 id="title">{card.title}</h1>
          </div>
          <div className="top-right">
            <img src={pph} alt="pph-logo" />
          </div>
        </div>
        <div className="middle">
          <img src={card.imgURL} alt="bottle" />
        </div>
        <div className="bottom">
          <Link id="anchor" to={"/catalogue"}>
            <a>Go to catalogue</a>
          </Link>
        </div>
      </div>
    );
  })

  return (
    <>
      <section id="cards">
        <div className="card-content">
          {cardItems}
        </div>
      </section>
    </>
  );
}

export default Cards;
