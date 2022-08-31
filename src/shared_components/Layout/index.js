import React from "react";
import Header from "../JS/header";
import Footer from "../JS/footer";

function Layout(props) {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
}

export default Layout;
