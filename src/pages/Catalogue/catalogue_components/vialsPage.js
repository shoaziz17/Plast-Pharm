import React, { useEffect, useState } from "react";
import Layout from "../../../shared_components/Layout";
import vial1 from "../../../images/Bottles/prob.png"
import axios from "axios";
import Card from "./card";
function VialsPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/vials`)
      .then(function (response) {
        setData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  const allCard = data.map((card) => <Card card={card} />)

  return (
    <>
      <Layout>
        <section id="vialsPage">
          <div className="vialsPage">
            <h1 className="animate__animated animate__bounce title">Vial</h1>
            <div className="vial-top">
              <img src={vial1} alt="img" />
            </div>
            <div className="vial-row">{allCard}</div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default VialsPage;
