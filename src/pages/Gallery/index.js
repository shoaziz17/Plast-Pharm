import React from "react";
import Layout from "../../shared_components/Layout";
import "./gallery.css";
import GalleryGrid from "./gallery_components/galleryGrid";
function Gallery() {
  return (
    <>
      <Layout>
        <GalleryGrid />
      </Layout>
    </>
  );
}

export default Gallery;
