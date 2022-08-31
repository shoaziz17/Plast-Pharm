import React, { useEffect, useState } from "react";
import Carousel from "nuka-carousel/lib/carousel";
import vialBottle from "../../../images/Bottles/bottle.png";
import { Link } from "react-router-dom";
import axios from "axios";

function Vials() {
  const [vials, setVials] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/vials')
      .then(function (response) {
        setVials(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  const vialImg = vials.map((vial) => {
    return (
      <>
        <img src={vial.img} alt="img" />
        <h1>Lid {vial.id}</h1>
      </>
    );
  })
  return (
    <>
      <section id="vials">
        <div className="vials-wrapper">
          <div className="vial-card">
            <div className="vial-card-left">
              <p>Product</p>
              <h1>Vial</h1>
              <Link to={"/vials"}>
                <button>Show all products</button>
              </Link>
            </div>
            <div className="vial-card-right">
              <img src={vialBottle} alt="vial" />
            </div>
          </div>
          <div className="vial-carousel">
            <Carousel wrapAround={true} slidesToShow={4} autoplay={true}>
              {vialImg}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}

export default Vials;
