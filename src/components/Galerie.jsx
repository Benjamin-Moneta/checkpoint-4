import React, { useState } from "react";
import "./Galerie.css";
import { images } from "../Helpers/CarouselData";

function Galerie() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div className="left"></div>
        <div className="center"></div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default Galerie;
