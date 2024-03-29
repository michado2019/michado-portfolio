import { ContactMail, EmailOutlined, WhatsApp } from "@mui/icons-material";
import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contactWrapper">
      <div className="contactContent">
      <div className='titlesDiv'>
        <ContactMail className="contactTitle-avatar"/>
        <h2 className="contactTitle">Contact</h2>
      </div>
        <h2 className="contactTalk">Can we talk?</h2>
        <div className="contactFlex">
          <a
            href="mailto:adeshinaobafemi09@gmail.com"
            className="contactLink"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contactFlex2">
            <div className="contactFlex2-1">
              <EmailOutlined className="contactEmail" />
              <p className="contactEmail-text">Email</p>
            </div>
            </div>
          </a>
          <a
            href="https://wa.me/2348100075254"
            className="contactLink"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contactFlex2">
            <div className="contactFlex2-1">
              <WhatsApp className="contactWhatsapp" />
              <p className="contactWhatsapp-text">WhatsApp</p>
            </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
