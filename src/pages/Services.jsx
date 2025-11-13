import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/service.css";
import {
  si1,
  si2,
  si3,
  si4,
  si5,
  si6,
  si7,
  si8,
  card4,
  vid2,
  th2,
} from "../assets/constants";
import FadeIn from "../components/FadeIn";
import expertiseList from "../data/services.json";

const Services = () => {
  const serviceId = useParams().id;

  const service = expertiseList[serviceId - 1];

  const images = [si1, si2, si3, si4, si5, si6, si7, si8];

  const navigate = useNavigate();

  function createRands(count, max) {
    let arr = [];
    while (arr.length < count) {
      let r = Math.floor(Math.random() * max);
      if (!arr.includes(r)) {
        arr.push(r);
      }
    }
    return arr;
  }

  const randoms = createRands(3, 8);
  function createListFromText(text) {
    return text
      .split(". ")
      .filter((sentence) => sentence.trim() !== "")
      .map((sentence, index) => (
        <FadeIn>
          <li key={index}>
            {sentence.trim()}
            {sentence.endsWith(".") ? "" : "."}
          </li>
        </FadeIn>
      ));
  }

  return (
    <>
      {/* <section className="MediaIntroSlide">
        <div className="introContent">
          <div className="hook"></div>

          <div className="intro">Services</div>

          <div className="degrees">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            reprehenderit atque inventore
          </div>
        </div>
      </section> */}

      <section className="introSlide media">
        <video src={vid2} poster={th2} autoPlay muted loop playsInline></video>

        <div className="gradient"> </div>
        <div className="introContent">

          <div className="hook">Al Zahra Psychologists</div>

          <div className="intro">{service.name}</div>

          
          
        </div>
      </section>

      <section className="SrvContent">
        {/* <h1> {service.name} </h1> */}
        <div className="srvc">
          <section className="cases srv">
            <div className="medAch srv">
              <div className="medAchHolder">
                <h3 className="normalHeading srv">Case Procedure</h3>
              </div>
              <div className="srvc">
                <div className="">
                  <div className="caseBody srv">
                    <ul className="caseList srv">
                      {createListFromText(service.detail)}
                    </ul>
                  </div>

                  <div className="medAchHolder">
                    <h3 className="normalHeading srv">Treatment</h3>
                  </div>
                  <div className="caseBody srv">
                    <ul className="caseList srv">
                      {createListFromText(service.treatment)}
                    </ul>
                  </div>
                </div>
                <section className="srvImgs">
                  {Array(3)
                    .fill()
                    .map((_, i) => {
                      return (
                        <FadeIn key={i}>
                          <div className="srvImgs container">
                            <li>
                              <img src={images[randoms[i]]} alt="" />
                            </li>
                          </div>
                        </FadeIn>
                      );
                    })}
                </section>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="ctaBox">
        <div className="cta">
          <div className="ctaText">
            <img src={card4} alt="" className="ctaimgbottom" />
            <div className="ctaHook">
              Ready to start <br /> your treatment journey?
            </div>
          </div>
          <div className="buttonsCta">
            <button
              class="button-33"
              role="button"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Leave us a message
            </button>

            <div className="line">Appointment</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
