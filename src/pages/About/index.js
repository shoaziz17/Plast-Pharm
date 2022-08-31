import React from "react";
import Layout from "../../shared_components/Layout";
import "./about.css";
import AboutUs from "./about_components/aboutUs";
import Certificate from "./about_components/certificate";
import Grid from "./about_components/grid";
function About() {
  return (
    <>
      <Layout>
        <AboutUs />
        <Grid />
        <Certificate />
      </Layout>
    </>
  );
}

export default About;
