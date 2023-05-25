import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SmallScreenNavbar from "./components/smallScreenNavbar/SmallScreenNavbar";
import TechWriting from "./components/techWriting/TechWriting";
import Contact from "./components/contact/Contact";
import { KeyboardDoubleArrowUp } from "@mui/icons-material";

function App() {
  //use state
  const [display, setDisplay] = useState(false);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [count, setCount] = useState(0);

  //useEffect
  useEffect(() => {
    // Function to set time
    const time = () => {
      if (count < 59) {
        setCount((prev) => prev + 1);
      } else {
        setCount(0);
        setMinute((prev) => prev + 1);
      }
      if (minute === 59) {
        setHour((prev) => prev + 1);
        setMinute(0)
      }
    };

    // Timer to set time every 1 seconds
    const timer = setInterval(time, 1000);

    // Cleanup function to clear the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, [count, minute]); // As count and minute change the effect is run
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header setDisplay={setDisplay} display={display} />
        <div className="appTime">
          {hour}h : {minute}m : {count}s
        </div>
        <SmallScreenNavbar display={display} setDisplay={setDisplay} />
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
        <div>
          <Skills />
        </div>
        <div>
          <TechWriting />
        </div>
        <div>
          <Contact />
        </div>
        <a href="#top" className="footerArrow-div">
          <KeyboardDoubleArrowUp className="footerArrow" />
        </a>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
