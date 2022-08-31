import React from "react";
import "../Home/home.css";
import Layout from "../../shared_components/Layout";
import HeaderHome from "./home_components/header-home";
import SmInfo from "./home_components/smInfo";
import Cards from "./home_components/cards";
import BgInfo from "./home_components/bgInfo";
import Carousel from "./home_components/carousel";

function Home() {
  return (
    <>
      <Layout>
        <HeaderHome />
        <SmInfo />
        <Cards />
        <BgInfo />
        <Carousel />
      </Layout>
    </>
  );
}

export default Home;
