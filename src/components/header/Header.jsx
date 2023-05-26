import React, { useState, useEffect } from "react";
import "./Header.css";
import { CampaignOutlined, CancelOutlined, Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import logoImg from "./assets/logoPortfolio.png";
import { headerData } from "./headerData/HeaderData";

export default function Header({ setDisplay, display, count, minute, hour }) {
  //States
  const [timeDisplay, setTimeDisplay] = useState(true);
  const [linkId, setLinkId] = useState("")
 
  //Handlers
  function handleMenu() {
    setDisplay((prev) => !prev);
  }
  function handleMenuCancel() {
    setDisplay(false);
  }
  const handleLinks= (id) => {
    setLinkId(id)
 }

  useEffect(() => {
    const handleTime = () => {
      setTimeDisplay((prev) => !prev);
    };

    const interval = setInterval(handleTime, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [timeDisplay]);
  return (
    <div className="headerWrapper">
      <div className="headerFlex">
        <Link to="/michado-portfolio" className="headerLogo-div">
          <img src={logoImg} alt="logo" className="headerLogo-img" />
          <h1 className="headerLogo">Michado</h1>
        </Link>
        <div
          className="headerTime"
          style={{ opacity: timeDisplay ? "1" : "0", transition: "all 0.5s" }}
        >
          <CampaignOutlined className="headerCampaign-icon" />
          <span>Spent time: </span>
          <span id="headerTime">
            {hour}h : {minute}m : {count}s
          </span>
        </div>
        <div className="headerFlex-1">
          {display ? (
            <CancelOutlined className="cancel" onClick={handleMenuCancel} />
          ) : (
            <Menu
              className="headerMenu-icon"
              id="headerMenu-icon"
              onClick={handleMenu}
            />
          )}
          <div className="menuContent">
            {
              headerData.map((each) => {
                return(
                  <div key={each.id}>
            <Link to={`${each.path}`}>
              <div className="menuContent-text">
                <MenuItem className="menuItems"  style={{color: linkId===each.id? "#3242aa" : "#ccc"}} onClick={() => handleLinks(each.id)}>{each.link}</MenuItem>
              </div>
            </Link>
            </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
