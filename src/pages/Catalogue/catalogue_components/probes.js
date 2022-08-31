import React, { useEffect, useState } from "react";
import Carousel from "nuka-carousel/lib/carousel";
import prob from "../../../images/Bottles/prob.png";
import { Link } from "react-router-dom";
import axios from "axios";
function Probes() {
  const [probes, setProbes] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/probes')
      .then(function (response) {
        setProbes(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  const probeImg = probes.map((probe) => {
    return (
      <>
        <img src={probe.img} alt="img" />
        <h1>Lid {probe.id}</h1>
      </>
    );
  })
  return (
    <>
      <section id="probes">
        <div className="probes-wrapper">
          <div className="probe-card">
            <div className="probe-card-left">
              <p>Product</p>
              <h1>Probe</h1>
              <Link to={"/probes"}>
                <button>Show all products</button>
              </Link>
            </div>
            <div className="probe-card-right">
              <img src={prob} alt="probe" />
            </div>
          </div>
          <div className="probe-carousel">
            <Carousel wrapAround={true} slidesToShow={4} autoplay={true}>
              {probeImg}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}

export default Probes;
