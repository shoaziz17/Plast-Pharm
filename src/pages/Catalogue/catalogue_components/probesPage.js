import axios from "axios";
import React, { useEffect, useState } from "react";
import probe1 from "../../../images/Bottles/prob.png";
import Layout from "../../../shared_components/Layout";
import Card from "./card";
function ProbesPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/probes`)
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
        <section id="probesPage">
          <div className="probesPage">
            <h1 className="animate__animated animate__bounce title">Probes</h1>
            <div className="probe-top">
              <img src={probe1} alt="img" />
            </div>
            <div className="probe-row">{allCard}</div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default ProbesPage;
