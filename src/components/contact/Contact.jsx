import { EmailOutlined, WhatsApp } from "@mui/icons-material";
import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contactWrapper">
      <div className="contactContent">
        <h2 className="contactTitle">Contact</h2>
        <div className="contactFlex">
            <a href="mailto:adeshinaobafemi09@gmail.com" className="contactLink">
          <div className="contactFlex2">
            <EmailOutlined className="contactEmail" />
            <p className="contactEmail-text">Email</p>
          </div>
            </a>
          <a href="wa.me/2348100075254" className="contactLink">
          <div className="contactFlex2">
            <WhatsApp className="contactWhatsapp" />
            <p className="contactWhatsapp-text">WhatsApp</p>
          </div>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
