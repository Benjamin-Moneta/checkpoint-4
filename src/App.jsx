import React from "react";
import "./App.css";
import Contact from "./components/Contact";
import Accueil from "./components/Accueil";
import Galerie from "./components/Galerie";
import Ressources from "./components/Ressources";
import NavMenu from "./components/NavMenu";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          <Route path='/' exact component={Accueil} />
          <Route path='/galerie'component={Galerie} />
          <Route path='/ressources'component={Ressources} />
          <Route path='/contact'component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
