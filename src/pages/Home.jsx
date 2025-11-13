import { Navigate, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import "../styles/home.css";
import { loremIpsum } from "lorem-ipsum";
import {
  doctor,
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  arrow,
  star,
  prim,
  logo,
  thy,
  vid,
  th1,
} from "../assets/constants";
import FadeIn from "../components/FadeIn";

import expertiseList from "../data/services.json";
import backupData from "../data/testimonials_backup.json";

const Home = () => {
  console.log("Home");

  const [CurrentSlide, setCurrentSlide] = useState(3);
  const containerRef = useRef(null);
  const Navigate = useNavigate();

  const [reviews, setreviews] = useState([]);

  useEffect(() => {
    setreviews(backupData);
    if (!localStorage.getItem("testimonials")) {
      localStorage.setItem("testimonials", JSON.stringify(backupData));
    }
    const cached = localStorage.getItem("testimonials");

    if (cached) {
      setreviews(JSON.parse(cached));
    } else {
      fetch("/api/testimonials")
        .then((res) => res.json())
        .then((data) => {
          setreviews(data);
          localStorage.setItem("testimonials", JSON.stringify(data));
        })
        .catch((err) => {
          console.error("Error:", err);
          setreviews(backupData);
        });
    }
  }, []);

  function navigate(direction) {
    const isDesktop = window.innerWidth > 768;
    const maxSlideDesktop = 4;
    const maxSlideMobile = 5;
    const minSlideDesktop = 2;
    const minSlideMobile = 1;

    const canMoveLeft =
      direction === "left" &&
      ((isDesktop && CurrentSlide !== minSlideDesktop) ||
        (!isDesktop && CurrentSlide !== minSlideMobile));

    const canMoveRight =
      direction === "right" &&
      ((isDesktop && CurrentSlide !== maxSlideDesktop) ||
        (!isDesktop && CurrentSlide !== maxSlideMobile));

    if (canMoveLeft || canMoveRight) {
      // console.log(`moving ${direction}`);
      setCurrentSlide((prev) => (direction === "left" ? prev - 1 : prev + 1));
    }
  }

  function getTranslate() {
    const isDesktop = window.innerWidth > 768;
    return isDesktop ? (CurrentSlide - 3) * 300 : (CurrentSlide - 3) * 315;
  }

  useEffect(() => {
    const sequence = ["left", "left", "right", "right"];
    let index = 0;

    const interval = setInterval(() => {
      navigate(sequence[index]);
      index = (index + 1) % sequence.length;
    }, 3000);

    return () => clearInterval(interval);
  }, [CurrentSlide]);

  const [fbList, setfbList] = useState(
    Array(5)
      .fill()
      .map((card, i) => ({
        key: i,
        id: i + 1,
        text: loremIpsum({
          count: Math.floor(Math.random() * 2) + 1,
          units: "sentences",
        }),
        title: "Lorem ipsum",
        stars: Math.floor(Math.random() * 3) + 3,
      })),
  );
  const cardimgs = [card1, card2, card3, card4, card5, card6, card7, card8];

  return (
    <>
      <section className="introSlide">
        <video src={vid} poster={th1} autoPlay muted loop playsInline></video>
        <div className="gradient"></div>
        
        <div className="introContent">
          <FadeIn>
            <div className="hook">
              “There is no Health without Mental Health”
            </div>

            <div className="intro">Ms. Javaria Zahra </div>
            <div className="medal">Gold Medalist</div>

            <div className="degrees">
              Senior Licensed Psychologist & Mental Health Professional /
              Trainer
              <span class="break"></span>
              MD / MS / MPhil Applied Psychology 
              <span className="mobil">
              (Gold Medal)
              </span>
              <span class="break"></span>
              Master of Science (MSc) Applied Psychology
              <span class="break mobil"></span>
               Beck Institute CBT Certified Clinician (BICBT-CC) (USA)
              <span class="break"></span>
              UAE License No. CDA - PL- 0001399
            </div>
          </FadeIn>
          <div className="introAbout">
            <button
              class="button-21"
              role="button"
              onClick={() => {
                Navigate("/about");
              }}
            >
              Learn More
            </button>
          </div>

        </div>
      </section>

      <section className="quoteSlide">
        <img src={prim} alt="" className="qouteImg" />
        <div className="q">
          <div>
            <span className="quotationMarks">"</span> Ms. Javaria Zahra is a
            highly motivated and passionate CDA licensed Psychologist and Mental
            Health Professional / Trainer with over 16 years of professional and
            clinical experience. Throughout her career, she has exhibited
            exemplary skills and expertise gained from prominent institutions in
            both the United Arab Emirates and Pakistan. Furthermore she has
            authored a book, “Development of Learning Disabilities Scale (LDS),”
            which was published by LAP- LAMBERT Academic Publishing, Germany.
            <span className="quotationMarks">"</span>
          </div>

          <button
            class="button-21"
            role="button"
            onClick={() => {
              Navigate("/contactList");
            }}
          >
            Contact Us
          </button>
        </div>
      </section>

      <div className="bar"></div>

      <section id="expertiseSlide" className="expertiseSlide">
        <div className="expertiseHook">Our Services</div>
        <div className="servicesCarousal">
          <div className="cards">
            {Array(6)
              .fill()
              .map((image, index) => (
                <FadeIn>
                  <div
                    className="card"
                    key={expertiseList[index].id}
                    onClick={() => {
                      Navigate(`/services/${index + 1}`);
                    }}
                  >
                    <img
                      src={cardimgs[index]}
                      alt={`card-${index}`}
                      className="cardImage"
                    />
                    <div className="cardTitle">{expertiseList[index].name}</div>
                    <div className="text">{expertiseList[index].desc}</div>
                  </div>
                </FadeIn>
              ))}
          </div>
        </div>
      </section>

      <div className="bar"></div>

      <section className="whyUsSlide">
        <div className="whyTop">
          <div className="whyTitle">
            Why <span>Choose Us?</span>
          </div>
          <div className="whySubscript">
            The Right Support Can Change Everything — Here’s Why <b>We</b> are
            the Right Choice
          </div>
        </div>
        <div className="whyContent">
          <div className="whyList">
            <FadeIn>
              <div className="whyPoint 1">
                <img src={card7} alt="" className="whyImg" />
                <div className="wpText">
                  <div className="pointTitle">Unrivaled Experience</div>
                  <div className="pointText">
                    With more than 16 years of dedicated practice, we bring deep
                    insight and proven methods to every client’s care.
                  </div>
                </div>
              </div>

              <div className="whyPoint 2">
                <img src={card1} alt="" className="whyImg" />
                <div className="wpText">
                  <div className="pointTitle">Patient-Certified Excellence</div>
                  <div className="pointText">
                    Trusted and recommended by the very people we serve,
                    reflecting our consistent commitment to results and
                    satisfaction.
                  </div>
                </div>
              </div>
              <div className="whyPoint 3">
                <img src={card2} alt="" className="whyImg" />
                <div className="wpText">
                  <div className="pointTitle">Skilled Professionalism</div>
                  <div className="pointText">
                    Our team combines advanced training with real-world
                    expertise to address a wide range of mental health needs.
                  </div>
                </div>
              </div>
              <div className="whyPoint 4">
                <img src={card3} alt="" className="whyImg" />
                <div className="wpText">
                  <div className="pointTitle">
                    Genuine Therapeutic Experience
                  </div>
                  <div className="pointText">
                    We create an authentic, empathetic space where clients feel
                    understood, supported, and valued.
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          <img src={thy} alt="" className="whyImgBig" />
        </div>
      </section>

      <div className="bar"></div>

      <section className="feedbackSlide">
        <div className="feedbackNumber">
          <span style={{ fontWeight: "600" }}>100+</span> patients have said
          recommended our service{" "}
        </div>
        <div className="feedbackHook">Our Happy Clients Say About Us</div>
        <div className="carousalHolder">
          <img
            src={arrow}
            alt=""
            className="Larrow"
            onClick={() => navigate("right")}
          />
          <div className="feedbackCarousal">
            <div className="slide">
              <ul className="fbList">
                {Array.isArray(reviews) &&
                  reviews.slice(0, 5).map((listItem, i) => {
                    return (
                      <li
                        key={i}
                        className="listItem Hom"
                        style={{
                          transform: `translateX(${getTranslate(CurrentSlide)}px)`,
                          transition: `transform 0.5s ease-in-out`,
                        }}
                      >
                        <div className="starList">
                          {Array(5)
                            .fill()
                            .map(() => {
                              return (
                                <img
                                  key="star"
                                  src={star}
                                  alt=""
                                  className="starimg"
                                />
                              );
                            })}
                        </div>
                        <div className="fbText">{listItem.text}</div>
                        <div className="fbTitle">{listItem.title}</div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <img
            src={arrow}
            alt=""
            className="Rarrow"
            onClick={() => navigate("left")}
          />
        </div>

        <div
          className="fbLink"
          onClick={() => {
            Navigate("/testimonials");
          }}
        >
          Check All Reviews
        </div>
      </section>
    </>
  );
};

export default Home;
