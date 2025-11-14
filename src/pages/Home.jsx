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
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit.”
            </div>

            <div className="intro">Lorem Ipsum</div>
            <div className="medal">Dolor Sit Amet</div>

            <div className="degrees">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit / Sed do
              <span class="break"></span>
              Ut enim ad minim veniam
              <span className="mobil">(quis nostrud exercitation)</span>
              <span class="break"></span>
              Duis aute irure dolor in reprehenderit
              <span class="break mobil"></span>
              Excepteur sint occaecat cupidatat non proident
             
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
            <span className="quotationMarks">"</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            facilisis, justo sed bibendum sagittis, sapien risus convallis
            lectus, non vehicula purus enim in arcu. Integer malesuada lorem vel
            mauris elementum, at dignissim turpis placerat.
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
                    <div className="cardTitle">Lorem Ipsum</div>
                    <div className="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
            dui et urna consequat vulputate.
          </div>
        </div>
        <div className="whyContent">
          <div className="whyList">
            <FadeIn>
              <div className="whyPoint 1">
                <img src={card7} alt="" className="whyImg" />
                <div className="wpText">
                  <div className="pointTitle">Lorem Ipsum</div>
                  <div className="pointText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla facilisi.
                  </div>
                </div>
              </div>

              <div className="whyPoint 2">
                <img src={card1} alt="" className="whyImg" />
                <div className="wpText">
                  <div className="pointTitle">Dolor Sit Amet</div>
                  <div className="pointText">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore.
                  </div>
                </div>
              </div>
              <div className="whyPoint 3">
                <img src={card2} alt="" className="whyImg" />
                <div className="wpText">
                  <div className="pointTitle">Consectetur Adipiscing</div>
                  <div className="pointText">
                    Excepteur sint occaecat cupidatat non proident.
                  </div>
                </div>
              </div>
              <div className="whyPoint 4">
                <img src={card3} alt="" className="whyImg" />
                <div className="wpText">
                  <div className="pointTitle">Elit Sed Do</div>
                  <div className="pointText">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco.
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
          <span style={{ fontWeight: "600" }}>100+</span> lorem ipsum dolor sit
          amet{" "}
        </div>
        <div className="feedbackHook">Our Clients Say</div>
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
