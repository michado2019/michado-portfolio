import React from "react";
import "./Main.css";
import avatarImg from "./assets/mainAvatar.jpg";
import About from "../about/About";
import Projects from "../projects/Projects";
export default function Main() {
  return (
    <div className="mainWrapper" id="top">
      <div className="mainContents">
        <div className="container">
          <p className="hello">Hello 👋 </p>
          <p className="name1">Mike</p>
          <p className="name2">Adeshina</p>
          <div className="animation">
            <div className="first">
            </div>
            <div className="second">
              <div>Web Developer</div>
            </div>
            <div className="third">
              <div>Phones Engineer</div>
            </div>
          </div>
        </div>
        <div className="main2">
          <img src={avatarImg} alt="img" className="mainAvatar-img" />
        </div>
        <div className="main2">
          <div className="main2Btn-flex_col">
            <a
              href="https://drive.google.com/file/d/1rXNLzAJh4HwAThWbymC2w9vBTbpeVlS1/view?usp=share_link"
              className="main2-btns"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
            <a
              href="https://wa.me/08100075254"
              className="main2-btns"
              target="_blank"
              rel="noreferrer"
            >
              Whatsapp
            </a>
            <a
              href="mailto: adeshinaobafemi09@gmail.com"
              className="main2-btns"
              id="main2-btn"
              target="_blank"
              rel="noreferrer"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
      <About />
      <Projects />
    </div>
  );
}
