import React, { useEffect, useState } from "react";
import { star, th3, user, vid3 } from "../assets/constants";
import "../styles/test.css";
import FadeIn from "../components/FadeIn";
import backupData from "../data/testimonials_backup.json"

const Testimonials = () => {
  const [reviews, setreviews] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);
  
  
  useEffect(() => {
    setreviews(backupData);
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
        .catch((err) => {console.error("Error:", err)
          setreviews(backupData) 
        });
        
    }
  }, []);

  if (!reviews) {
    return (
      <div className="videoLoader">
        <div className="loaderGradient"></div>
        <div className="loaderContent">
          <div className="spinner"></div>
          <p>Loading Testimonials...</p>
        </div>
      </div>
    );
  }
  return (
    <>
      <section className="introSlide test">
        <video src={vid3} poster={th3} autoPlay muted loop playsInline></video>

        <div className="gradient"> </div>
        <div className="introContent">
          <div className="hook"></div>

          <div className="intro">Testimonials</div>

          <div className="degrees">Hear what our patients have to say.</div>
        </div>
      </section>

      <section className="tstContent">
        {Array.isArray(reviews) &&
          reviews.slice(0, visibleCount).map((r, i) => {
            return (
              <FadeIn className="tstFade">
                <div className="tstBox">
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
                  <div className="tstText">{r.text}</div>
                  <div className="tstRow">
                    <img src={user} alt="" className="tstimg" />
                    <div className="tstName">
                      <div className="tstTop">verified patient</div>
                      <div className="tstBottom">{r.date}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
      </section>

      <div
        className="fbLink tst"
        onClick={() => {
          setVisibleCount((prev) => prev + 3);
        }}
      >
        {visibleCount < reviews.length
          ? "Load More Reviews"
          : "No More Reviews To Load"}
      </div>
    </>
  );
};

export default Testimonials;
