import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Catalogue from "./pages/Catalogue";
import LidsPage from "./pages/Catalogue/catalogue_components/lidsPage";
import ProbesPage from "./pages/Catalogue/catalogue_components/probesPage";
import VialsPage from "./pages/Catalogue/catalogue_components/vialsPage";
import Login from "./pages/Login";
import AuthProvider from "./utilities/authContext";
import CreatePage from "./pages/CrUp/create";
import Buyed from "./pages/Buyed";
import Error from "./shared_components/JS/error";
import Update from "./pages/CrUp/update";
import ProductProvider from "./utilities/productContext";
import LidDetail from "./pages/Catalogue/catalogue_components/lidDetail";

function App() {


  return (
    <>
      <AuthProvider>
        <ProductProvider> 
          <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/about"} element={<About />} />
              <Route path={"/contact"} element={<Contact />} />
              <Route path={"/gallery"} element={<Gallery />} />
              <Route path={"/catalogue"} element={<Catalogue />} />
              <Route path={"/lids"} element={<LidsPage />} />
              <Route path={"/probes"} element={<ProbesPage />} />
              <Route path={"/vials"} element={<VialsPage />} />
              <Route path={"/login"} element={<Login />} />
              <Route path={"/detail/:id"} element={<LidDetail />} />
              <Route path={"/create"} element={<CreatePage />} />
              <Route path={"/buyed"} element={<Buyed />} />
              <Route path={"/error"} element={<Error />} />
              <Route path={"/update/:id"} element={<Update />} />
            </Routes>
          </BrowserRouter>
        </ProductProvider>
      </AuthProvider>
    </>
  );
}

export default App;
