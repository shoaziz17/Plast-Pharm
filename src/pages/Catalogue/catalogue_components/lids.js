import React, { useEffect, useState } from "react";
import lid from "../../../images/Bottles/lid.png";
import Carousel from "nuka-carousel/lib/carousel";
import { Link } from "react-router-dom";
import axios from "axios";
function Lids() {
  const [lids, setLids] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/lid')
      .then(function (response) {
        setLids(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  const lidImg = lids.map((lid) => {
    return (
      <>
        <img src={lid.img} alt="img" />
        <h1>Lid {lid.id}</h1>
      </>
    );
  })

  return (
    <>
      <section id="lids">
        <div className="lids-wrapper">
          <div className="lid-card">
            <div className="lid-card-left">
              <p>Product</p>
              <h1>Lid</h1>
              <Link to={'/lids'}>
                <button>Show all products</button>
              </Link>
            </div>
            <div className="lid-card-right">
              <img src={lid} alt="lid" />
            </div>
          </div>
          <div className="lid-carousel">
            <Carousel wrapAround={true} slidesToShow={4} autoplay={true}>
              {lidImg}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}

export default Lids;
