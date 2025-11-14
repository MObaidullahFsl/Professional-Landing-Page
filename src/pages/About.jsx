import React from "react";
import "../styles/about.css";
import { si8, si7, sec, sec2 } from "../assets/constants";
import FadeIn from "../components/FadeIn";
import servicesList from "../data/Allservice.json";

function About() {
  return (
    <>
      <FadeIn>
        <div className="aboutTitle">
          About Lorem Ipsum Dolor Sit Amet Consectetur 
        </div>
      </FadeIn>
      <div className="abtAll">
        <section className="abt first">
          <div className="contentabt">
            <div className="titleabt">Professional Career</div>
            <FadeIn>
              <div className="textabt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </div>
            </FadeIn>
          </div>
          <img src={sec} alt="" className="abtimg" />
        </section>

        <FadeIn>
          <section className="abt inter1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 
            Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
          </section>
        </FadeIn>

        <section className="abt second">
          <img src={sec2} alt="" className="abtimg" />
          <div className="contentabt">
            <div className="titleabt">Achievements</div>
            <FadeIn>
              <div className="textabt">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</li>
              </div>
            </FadeIn>
          </div>
        </section>

        <FadeIn>
          <section className="abt inter2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </section>
        </FadeIn>

        <section className="listabt">
          <div className="titleabt">Specializations</div>
          <div className="textabt list">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="listText">
            {Array(6)
              .fill()
              .map((_, i) => (
                <FadeIn>
                  <li key={i}>Lorem ipsum dolor sit amet {i+1}</li>
                </FadeIn>
              ))}
          </div>
        </section>

        <section className="listabt">
          <div className="titleabt">Qualifications</div>
          <div className="listText">
            <FadeIn>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
            </FadeIn>
          </div>
        </section>

        <section className="listabt">
          <div className="titleabt">Subspecialities</div>
          <div className="listText">
            <FadeIn>
              <li>Lorem ipsum 1</li>
              <li>Lorem ipsum 2</li>
              <li>Lorem ipsum 3</li>
              <li>Lorem ipsum 4</li>
              <li>Lorem ipsum 5</li>
              <li>Lorem ipsum 6</li>
            </FadeIn>
          </div>
        </section>

        <section className="listabt">
          <div className="titleabt">Languages</div>
          <div className="listText">
            <FadeIn>
              <li>Lorem</li>
              <li>Ipsum</li>
              <li>Dolor</li>
              <li>Sit</li>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
