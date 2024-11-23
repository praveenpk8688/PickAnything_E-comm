import React from "react";
// import "../Components/Css/BigDiscounts.css";
import { Link } from "react-router-dom";
import Navbar from "../Components/Header/Navbar.jsx";
import AutoPlay from "../Components/Header/Slider.jsx";
import Colorcards from "../Components/Mainsection/Colorcards.jsx";
import BigDiscounts from "../Components/Mainsection/BigDiscounts.jsx";
import NewArrivels from "../Components/Mainsection/NewArrivels.jsx";
import Bestsales from "../Components/Mainsection/Bestsales.jsx";
import Footer from "../Components/Footer/Footer.jsx";

function Home() {
  return (
    <>
      <section className="home">
        <section className="navBar_main">{/* <Navbar /> */}</section>
        <section className="hero_slick">
          <AutoPlay />
        </section>
        <section className="colorCards_main">
          <Colorcards />
        </section>
        <section className="Bigdisco">
          <BigDiscounts />
        </section>
        <section className="NewARrivels">
          <NewArrivels />
        </section>
        <section>
          <Bestsales />
        </section>
        <section>
          <Footer />
        </section>
      </section>
    </>
  );
}

export default Home;
