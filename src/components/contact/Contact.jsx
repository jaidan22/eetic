import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="ctct-head">
        <span class="heading">CONTACT US</span>
        <span className="desc">Lorem ipsum dolor sit amet consectetur.</span>
      </div>
      <form action="post">
        <div className="left">
          <input type="text" required placeholder="Your Name *" />
          <input type="email" required placeholder="Your Email *" />
          <input type="tel" required placeholder="Your Phone *" />
        </div>
        <div className="right">
          <textarea name="message" id="message" placeholder="Your Message *" />
        </div>
        <button type="submit">MESSAGE</button>
      </form>
    </div>
  );
};

export default Contact;
