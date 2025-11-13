import React from "react";
import list from "../data/services.json";
import { useNavigate } from "react-router-dom";
import FadeIn from "../components/FadeIn";
import {
  email,
  fbimg,
  igimg,
  inimg,
  phone,
  wsimg,
  ytimg,
} from "../assets/constants";
import "../styles/contactlist.css";

function ContactList() {
  const navigate = useNavigate();
  return (
    <>
      <section className="contactUsList">
        <div className="contactUsTitle List">Contact Us</div>
        <div className="contactUsLine">
          <b> You can reach us in the following ways:</b>
        </div>
        <div className="contactListText">
          <FadeIn>
            <div className="titleabt cul">
              <div className="wsNo cul">
                <img src={wsimg} alt="" />
                <div> WhatsApp: </div>
              </div>
              <a
                href="https://wa.me/971504614711?text=Hello%20I%20want%20to%20get%20treatment"
                target="_blank"
                rel="noopener noreferrer"
                className="clickable"
              >
                +971504614711
              </a>
              {/* <div
                className="clickable"
                onClick={() =>
                  window.open(
                    "https://wa.me/971504614711?text=Hello%20I%20want%20to%20get%20treatment",
                    "_blank",
                  )
                }
              >
                +971504614711
              </div> */}
            </div>

            <div className="titleabt cul">
              <div className="wsNo cul">
                <img src={phone} alt="" />
                <div> Phone: </div>
              </div>
              <a href="tel:+971504614711" className="clickable">
                +971504614711
              </a>

              {/* <div
                className="clickable"
                onClick={() => (window.location.href = "tel:+971504614711")}
              >
                +971504614711
              </div> */}
            </div>

            <div className="titleabt cul">
              <div className="wsNo cul">
                <img src={email} alt="" />
                <div> Email: </div>
              </div>
              <div
                className="clickable"
                onClick={() =>
                  (window.location.href = "mailto:Javaria.zahra@gmail.com")
                }
              >
                Javaria.zahra@gmail.com
              </div>
            </div>
          </FadeIn>
        </div>
        <div className="culFollow">
          <div className="contactUsLine">
            <b>Follow our pages!</b>
          </div>
          <div className="footerLinks">
            <div className="">
              <a href="https://www.instagram.com/javariazahra/"></a>
              <img src={igimg} alt="ig" className="instagram footerimg" />
            </div>

            <div
              className="
                    "
            >
              <a href="https://www.youtube.com/@javariazahra_psychologist">
                <img src={ytimg} alt="yt" className="youtube footerimg" />
              </a>
            </div>

            <div className="">
              <a href="https://www.linkedin.com/in/javaria-zahra-gold-medalist-10914475/">
                <img src={inimg} alt="ws" className="whatsapp footerimg" />
              </a>
            </div>
            <div className="">
              <a href="https://www.facebook.com/p/Javaria-Zahra-100094043812669/">
                <img src={fbimg} alt="fb" className="facebook footerimg" />
              </a>
            </div>
          </div>
        </div>
        <div className="culBtn">
          <div className="contactUsLine">
            <b>Alternatively, book an appointment.</b>
          </div>
          <div className="culButton">
            <button className="button-64" role="button">
              <span
                className="text"
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Book Appointment
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactList;
