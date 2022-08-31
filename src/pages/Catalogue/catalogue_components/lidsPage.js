import React, { useContext, useEffect, useState } from "react";
import lids1 from "../../../images/Bottles/lid.png";
import Layout from "../../../shared_components/Layout";
import 'animate.css';
import "../catalogue.css";
import axios from "axios";
import Card from "./card";

function LidsPage() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/lid`)
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
        <section id="lidsPage">
          <div className="lidsPage">
            <h1 className="animate__animated animate__bounce title">Lid</h1>
            <div className="lid-top">
              <img src={lids1} alt="img" className="lidImg" />
            </div>
            <div className="lid-row">{allCard}</div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default LidsPage;
