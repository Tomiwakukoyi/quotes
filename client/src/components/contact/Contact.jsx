import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your email..." />
          <button>JOIN US</button>
        </div>
        <div className="icons"></div>
      </div>
    </div>
  );
};

export default Contact;
