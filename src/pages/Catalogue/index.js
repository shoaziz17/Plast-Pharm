import React from "react";
import Layout from "../../shared_components/Layout";
import "./catalogue.css";
import Lids from "./catalogue_components/lids";
import Probes from "./catalogue_components/probes";
import ProductCatalogue from "./catalogue_components/productCatalogue";
import Vials from "./catalogue_components/vials";
function Catalogue() {
  return (
    <>
      <Layout>
        <ProductCatalogue />
        <Lids />
        <Probes />
        <Vials />
      </Layout>
    </>
  );
}

export default Catalogue;
