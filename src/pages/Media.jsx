import React, { useEffect, useState } from "react";
import "../styles/media.css";
import { useRef } from "react";
import {
  si1,
  si2,
  si3,
  si4,
  si5,
  si6,
  si7,
  si8,
  th2,
  vid2,
} from "../assets/constants";
import FadeIn from "../components/FadeIn";
import backupVids from "../data/vids_backup.json";

const Media = () => {
  const images = [si1, si2, si3, si4, si5, si6, si7, si8];
  const casesRef = useRef(null);
  const picRef = useRef(null);
  const [Open, setOpen] = useState(false);
  const [OpenPic, setOpenPic] = useState(false);
  const [videos, setVideos] = useState(null);
  const isDesktop = window.innerWidth > 768;

  function transition() {
    setOpen((prev) => !prev);
    if (!Open) {
      if (isDesktop) {
        casesRef.current.style.maxHeight = "1200px";
      } else {
        casesRef.current.style.maxHeight = "2500px";
      }
    } else {
      casesRef.current.style.maxHeight = "40px";
    }
  }
  function picTransition() {
    setOpenPic((prev) => !prev);
    if (!OpenPic) {
      if (isDesktop) {
        picRef.current.style.maxHeight = "350px";
        picRef.current.style.padding = "5px 10px";
      } else {
        picRef.current.style.maxHeight = "250px";
        picRef.current.style.padding = "15px 10px";
      }
    } else {
      picRef.current.style.maxHeight = "0px";
      picRef.current.style.padding = "0px";
    }
  }


useEffect(() => {
  // Load API if needed
  if (!window.YT) {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  let players = [];

  // helper to init when API is ready
  function initPlayers() {
    const iframes = document.querySelectorAll(".vidCard iframe");
    players = Array.from(iframes).map((iframe) => {
      return new window.YT.Player(iframe, {
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              players.forEach((p) => {
                if (p !== event.target) p.pauseVideo();
              });
            }
          },
        },
      });
    });
  }

  // polling for iOS Safari (YT might load async)
  const checkYT = setInterval(() => {
    if (window.YT && window.YT.Player) {
      clearInterval(checkYT);
      initPlayers();
    }
  }, 300);

  return () => clearInterval(checkYT);
}, []);


  useEffect(() => {
    setVideos(backupVids); // comment for dev
    const cached = localStorage.getItem("videos");
    if (!cached) {
      fetch("/api/latestVids")
        .then((res) => res.json())
        .then((data) => {
          setVideos(data);
          localStorage.setItem("videos", JSON.stringify(data));
        })
        .catch((err) => console.error("Video Load Error:", err));
    } else {
      setVideos(JSON.parse(cached));
    }
  }, []);

  if (!videos) {
    return (
      <div className="videoLoader">
        <div className="loaderGradient"></div>
        <div className="loaderContent">
          <div className="spinner"></div>
          <p>Loading Latest Videos...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="introSlide media">
        <video src={vid2} poster={th2} autoPlay muted loop playsInline></video>

        <div className="gradient"> </div>
        <div className="introContent">
          <div className="hook">
            Senior Licensed Psychologist & Mental Health Professional
          </div>

          <div className="intro">Media Archive</div>

          <div className="degrees">Lorem Psychologists</div>
        </div>
      </section>

      <section className="cases">
        <div className="medAch" ref={casesRef}>
          <div className="medAchHolder">
            <div
              className="plus"
              onClick={() => {
                transition();
              }}
            >
              {Open ? "-" : "+"}
            </div>
            <h3 className="normalHeading">Recent Activity & Events</h3>
          </div>

          <FadeIn>
            <li className="inCard">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7359593381737492480?collapsed=1"
                height="876"
                width="100"
                frameborder="0"
                allowfullscreen=""
                title="Embedded post"
              ></iframe>
            </li>
          </FadeIn>
          <FadeIn>
            <li className="inCard">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7358160069277966340?collapsed=1"
                height="668"
                width="504"
                frameborder="0"
                allowfullscreen=""
                title="Embedded post"
              ></iframe>
            </li>
          </FadeIn>

          <FadeIn>
            <li className="inCard">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7356660043536121857?collapsed=1"
                height="876"
                width="504"
                frameborder="0"
                allowfullscreen=""
                title="Embedded post"
              ></iframe>
            </li>
          </FadeIn>

          {/* <FadeIn>
            <li className="inCard">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7355677092061048832?collapsed=1"
                height="876"
                width="504"
                frameborder="0"
                allowfullscreen=""
                title="Embedded post"
              ></iframe>
            </li>
          </FadeIn> */}

          <div className="fbLink tst">
            <a
              href="https://www.linkedin.com/in/javaria-zahra-gold-medalist-10914475/"
              target="_blank"
              rel="noopener noreferrer"
            >
              See More Posts
            </a>
          </div>
        </div>
      </section>
      <section className="pictureGallery">
        <div className="medAchHolder pic">
          <div
            className="plus"
            onClick={() => {
              picTransition();
            }}
          >
            {OpenPic ? "-" : "+"}
          </div>
          <h3 className="normalHeading">Picture Gallery</h3>
        </div>
        <ul className="picSlide" ref={picRef}>
          {Array(8)
            .fill()
            .map((_, i) => {
              return (
                <li key={i} className="pgli">
                  <img src={images[i]} alt="" />
                </li>
              );
            })}
        </ul>
      </section>
      <section className="videoGallery edu">
        <h1 className="normalHeading">Educational Videos</h1>
        <ul className="vidSlide">
          {Array.isArray(videos) &&
            videos.slice(0, 4).map((video, i) => {
              // Extract the YouTube video ID from the link
              //const videoId = new URL(video.link).searchParams.get("v");

              return (
                <FadeIn key={i}>
                  <li className="vidCard">
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube-nocookie.com/embed/${video.videoId}?enablejsapi=1`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </li>
                </FadeIn>
              );
            })}
        </ul>
      </section>
    </>
  );
};

export default Media;
