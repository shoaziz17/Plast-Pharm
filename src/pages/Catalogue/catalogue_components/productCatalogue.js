import React from "react";
import grBottles from "../../../images/Bottles/group.png";
function ProductCatalogue() {
  return (
    <>
      <section id="productCatalogue">
        <div className="prosuctCatalogue-wrapper">
          <h1 className="pr-text">Product Catalogue</h1>
          <div className="bottle-row">
            <img src={grBottles} alt="img" />
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductCatalogue;
