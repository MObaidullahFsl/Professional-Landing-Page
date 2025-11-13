import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import React, { useState } from "react";
import { loading, fail, success, wsimg, phone } from "../assets/constants";
import "../styles/contact.css";
function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(1);

    try {
      const res = await fetch("api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setStatus(2);
    } catch (err) {
      setStatus(3);
    }
  };

  function renderStatus() {
    switch (status) {
      case 1:
        return <img src={loading} className="loading" alt="Loading" />;
      case 2:
        return <img src={success} className="success" alt="Success" />;
      case 3:
        return <img src={fail} className="fail" alt="Fail" />;
      default:
        return <div></div>;
    }
  }

  return (
    <>
      <section className="mainContact">
      
        <div className="contactUsTitle">Make Appointment</div>
        {/*<div className="contactUsHook">Get in touch</div>*/}

        <div className="contactUsLine">
          We'd love to hear from you. Please fill out this form.
        </div>
        <form onSubmit={handleSubmit} className="contactInputs">
          <div className="names">
            <div className="firstName">
              <label htmlFor="firstName" className="fnLabel">
                First Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="fnInput"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                required
                minLength={2}
              />
            </div>

            <div className="lastName">
              <label htmlFor="lastName" className="lnLabel">
                Last Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="lnInput"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                required
                minLength={2}
              />
            </div>
          </div>

          <div className="email">
            <label htmlFor="email" className="emailLabel">
              Email <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="emailInput"
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="phone">
            <label htmlFor="phone" className="phoneLabel">
              Phone Number <span style={{ color: "red" }}>*</span>
            </label>

            <PhoneInput
              country={"ae"}
              value={formData.phone}
              onChange={(value) => setFormData({ ...formData, phone: value })}
              inputClass="myPhoneInput"
              buttonClass="myPhoneButton"
              containerClass="myPhoneContainer"
              dropdownClass="myPhoneDropdown"
              inputProps={{
                name: "phone",
                required: true,
              }}
            />
          </div>

          <div className="message">
            <label htmlFor="message" className="messageLabel">
              Message <span style={{ color: "red" }}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              className="messageInput"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              minLength={10}
            />
          </div>

          <div className="policy">
            <input
              type="checkbox"
              className="policyBox"
              id="policyCheck"
              name="policyCheck"
              required
            />
            <label htmlFor="policyCheck" className="policyMessage">
              Kindly accept our friendly privacy policy
            </label>
          </div>
          <div className="wrapper">
            <button className="button-3" role="button" type="submit">
              Send Message
            </button>
            <div className="statusBar">
              <div>{renderStatus()}</div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Contact;
