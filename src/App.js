import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SmallScreenNavbar from "./components/smallScreenNavbar/SmallScreenNavbar";
import TechWriting from "./components/techWriting/TechWriting";
import Contact from "./components/contact/Contact";
import { KeyboardDoubleArrowUp } from "@mui/icons-material";
import About from "./components/about/About";

function App() {
  //use state
  const [display, setDisplay] = useState(false);
  const [count, setCount] = useState(() => {
    //State for count
    const savedCount = localStorage.getItem("count");
    const parsedSavedCount = parseInt(savedCount);
    return parsedSavedCount ? parsedSavedCount : 0;
  });
  const [minute, setMinute] = useState(() => {
    //State for minute
    const savedMinute = localStorage.getItem("minute");
    const parsedSavedMinute = parseInt(savedMinute);
    return parsedSavedMinute ? parsedSavedMinute : 0;
  });
  const [hour, setHour] = useState(() => {
    //State for hour
    const savedHour = localStorage.getItem("hour");
    const parsedSavedHour = parseInt(savedHour);
    return parsedSavedHour ? parsedSavedHour : 0;
  });

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
      if (minute === 60) {
        setHour((prev) => prev + 1);
        setMinute(0);
      }

      //LocalStorage for count, minute, and hour
      localStorage.setItem("count", count);
      localStorage.setItem("minute", minute);
      localStorage.setItem("hour", hour);
    };

    // Timer to set time every 1 seconds
    const timer = setInterval(time, 1000);

    // Cleanup function to clear the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, [count, minute, hour]); // As count and minute change the effect is run
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header
          setDisplay={setDisplay}
          display={display}
          count={count}
          minute={minute}
          hour={hour}
        />
        <SmallScreenNavbar display={display} setDisplay={setDisplay} />
        <Switch>
          <Route exact path="/michado-portfolio" component={Main} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route path="*" component={PageNotFound} />
        </Switch>
        <Route />
        <Skills />
        <TechWriting />
        <Contact />
        <a href="#top" className="footerArrow-div">
          <KeyboardDoubleArrowUp className="footerArrow" />
        </a>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
