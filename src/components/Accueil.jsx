import React from "react";
import "./Accueil.css";

function Accueil() {
  return (
    <div>
      <h1 class="titlepage">Le Light Painting</h1>
      <img
        className="romainM"
        src="../../img/romainmillet.jpg"
        alt="Romain Millet"
      />
      <div className="sectionHP">
        <h2 className="titleHP">À propos de lui...</h2>
        <p className="biographie">
          Rom Light Painting, ou bien Romain Millet, je suis photographe
          spécialisé en light painting résidant à Lyon. Je suis né en 1982 à
          Avignon, j'ai habité différentes villes du sud-est de la France avant
          de m'installer à Lyon, en 2005. <br />
          J'ai toujours aimé faire des photos, immorataliser des instants, mais
          en 2009 je découvre cet art photographique en achetant mon premier
          "vrai" reflex, dans l'idée d'accrocher mon propre tirage de coucher de
          soleil ou de voie lactée au dessus de mon lit. <br />
          Cette idée m'amena à approfondir des connaissances, notamment à
          travers des magazines et le web. C'est là, en admirant et apprenant
          divers techniques photographiques, que je tombe sur des clichés de
          light painting réalisés par Cenci Goepel et Jens Warnecke, un couple
          de photographes, plus connus sous le pseudonyme Lightmark.
        </p>
      </div>
      <div className="sectionBP">
        <h2 className="titleBP">Qu'est ce que le Light Painting ?</h2>
        <p className="biolight">
          Littéralement, le "Light Painting" revient à peindre une photo avec de
          la lumière. Concrètement, cette technique de photographique moderne
          consiste à réaliser des effets d'éclairages et dessins lumières.{" "}
          <br />
          Pour réaliser ces clichés, on se place dans un environnement sombre ou
          ne répresentant pas de sources de lumières trop puissantes, on réalise
          ensuite les photos en réglant l'appareil photo en exposition longue.
          <br />
          Le terme "Light Painting" recouvre un ensemble de variantes et de
          techniques qui permettent de réaliser des photos dont l'aspect est
          largement déterminé par le jeu de lumières produit pendant le temps
          d'exposition. Par exemple, dans le cas des trainées lumineuses, on
          parle de "Light Painting" car cet exercice s'apparente au graffiti
          avec bombe aérosol.
        </p>
      </div>
    </div>
  );
}

export default Accueil;
