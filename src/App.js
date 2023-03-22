import React, { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SmallScreenNavbar from "./components/smallScreenNavbar/SmallScreenNavbar";

function App() {

  //use state
  const [display, setDisplay] = useState(false);
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header setDisplay={setDisplay} display={display} />
        <SmallScreenNavbar display={display} />
        <Switch>
          <Route exact path="/michado-portfolio" component={Main} />
        <Route path="*" component={PageNotFound} />
        </Switch>
        <Route />
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
