import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "../styles/layout.css";
import {
  address,
  arrow,
  branch,
  email,
  inimg,
  logo,
  phone,
  phone2,
  message,
  logoSmall,
  wsWhite,
} from "../assets/constants";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbimg, igimg, wsimg, ytimg, menu } from "../assets/constants";
import expertiseList from "../data/services.json";
import Chatbot from "../components/chatBot";

function MainLayout() {
  // console.log("layout loaded");

  const dropRef = useRef(null);

  const [SrvDrop, setSrvDrop] = useState(false);
  const [ChatBotDisplay, setChatBotDisplay] = useState(false);
  function dropDown() {
    setSrvDrop(!SrvDrop);
    if (SrvDrop) {
      dropRef.current.style.maxHeight = "0px";
      dropRef.current.style.opacity = "0";
    } else {
      dropRef.current.style.maxHeight = "300px";
      dropRef.current.style.opacity = "1";
    }
  }

  const navigate = useNavigate();

  const servicesList = Array(8)
    .fill()
    .map((_, i) => {
      return {
        id: i,
        name: "item" + i,
      };
    });
  const scrollToElement = (selection) => {
    navigate("/", { state: { scrollTo: selection } });
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.querySelector(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const headerOptions = [
    { name: "Home", link: () => navigate("/") },
    { name: "Media", link: () => navigate("/media") },
    { name: "Services", link: () => navigate("/servicesList") },
    { name: "Testimonials", link: () => navigate("/testimonials") },
    { name: "About Us", link: () => navigate("/about") },
    { name: "Contact Us", link: () => navigate("/contactList") },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [srvDropDown, setSrvDropDown] = useState(false);
  const dropdownRef = useRef(null);
  const srvRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (srvRef.current && !srvRef.current.contains(event.target)) {
        setSrvDrop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const msg = encodeURIComponent("Hello, I want to get treatment 😊");

  return (
    <>
      <header>
        <div className="phoneBar">
          <div className="wsNo">
            {" "}
            <img src={wsimg} alt="" />
            <div
              className=""
              onClick={() =>
                window.open(`https://wa.me/14155552671?text=${msg}`)
              }
            >
+1 415-555-2671 </div>
          </div>

          <div className="phoneNo wsNo">
            {" "}
            <img src={phone} alt="" />
            <div
              className=""
              onClick={() => (window.location.href = "tel:+14155552671")}
            >
              +1 415-555-2671
            </div>
          </div>
        </div>
        <div className="headerOptions">
          <div className="phones">
            <div
              className="wsNo phoneDisp"
              onClick={() =>
                window.open(`https://wa.me/14155552671?text=${msg}`)
              }
            >
              {" "}
              <img
                src={wsimg}
                alt=""
                onClick={() => (window.location.href = "tel:+14155552671")}
              />
              +14155552671
            </div>

            <div className="phoneNo wsNo phoneDisp">
              {" "}
              <img src={phone} alt="" />
              +14155552671
            </div>
          </div>

          <div className="options-container" ref={dropdownRef}>
            <button
              className="options-button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onMouseEnter={() => {
                setSrvDropDown(!srvDropDown);
              }}
              onMouseLeave={() => {
                setSrvDropDown(!srvDropDown);
              }}
            >
              <img src={menu} alt="Menu" className="options-icon" />
            </button>

            {isDropdownOpen && (
              <div className="options-dropdown">
                <ul className="options-list">
                  {headerOptions.map((option) => (
                    <li key={option.name} className="options-item">
                      <button
                        className="options-item-button"
                        onClick={() => {
                          option.link();
                          setIsDropdownOpen(false);
                        }}
                      >
                        {option.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="headerTopBar">
          <div
            className="title"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={logo} alt="" />
            <div className="titleText">Lorem Psychologists</div>
          </div>

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
      </header>

      <div className="headerLinks">
        <div
          className="HomeBtn"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </div>
        <div className="media" onClick={() => navigate("/media")}>
          Media
        </div>
        <div
          className="services"
          ref={srvRef}
          onClick={() => setSrvDropDown(!srvDropDown)}
          onMouseEnter={() => {
            setSrvDropDown(!srvDropDown);
          }}
          onMouseLeave={() => {
            setSrvDropDown(!srvDropDown);
          }}
        >
          Services
          {srvDropDown && (
            <div className="srvDrp">
              <ul className="options-list">
                {expertiseList.map((option) => (
                  <li key={option.name} className="options-item">
                    <button
                      className="options-item-button"
                      onClick={() => {
                        setSrvDrop(false);
                        navigate(`/services/${option.id}`);
                      }}
                    >
                      {option.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <img src={arrow} alt="" className="navArrow" />
        </div>
        <div className="testimonials" onClick={() => navigate("/testimonials")}>
          Testimonials
        </div>
        <div className="AboutUsBtn" onClick={() => navigate("/about")}>
          About us
        </div>
        <div
          className="Contact"
          onClick={() => {
            navigate("/contactList");
          }}
        >
          Contact Us
        </div>
      </div>

      <Outlet className="outlet"></Outlet>
      <Chatbot visible={ChatBotDisplay} setVisible={setChatBotDisplay} />

      <div className="btnWrapper">
        <div
          className="wsBtn"
          onClick={() =>
            window.open(
              "https://wa.me/14155552671?text=Hello%20I%20want%20to%20get%20treatment",
              "_blank",
            )
          }
        >
          <img src={wsWhite} alt="" />
        </div>
        <div
          className="chatBtn"
          onClick={() => {
            setChatBotDisplay(!ChatBotDisplay);
          }}
        >
          <img src={message} alt="message btn" srcset="" />
        </div>
      </div>

      <footer>
        <div className="">
          <div className="footerLogo">
            <div className="footerTitle">Lorem Psychologists</div>

            <div className="follow">
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
          </div>
          <div className="addresses">
            <div className="branch One">
              <div className="branchName">
                {" "}
                {/* <img src={branch} alt="" />  */}
                Branch One
              </div>
              <div className="branchAddress">
                {" "}
                {/* <img src={""} alt="" /> */}
                <div className="">
                  {" "}
                  <b>Address:</b>
                  <br></br> 123 A Street 2, ABC Town Name - City
                </div>
              </div>
              <div className="branchEmail">
                {" "}
                {/* <img src={""} alt="" />  */}
                <div className="">
                  <b>Mail:</b> branchOne@company.com
                </div>
              </div>
              <div className="branchNumber">
                {" "}
                {/* <img src={""} alt="" />  */}
                <div className="">
                  <b>Number:</b> <br />
                  012-3456789
                </div>
              </div>
            </div>
            <div className="branch Two">
              <div className="branchName">
                {" "}
                {/* <img src={branch} /> */}
                Branch Two
              </div>
              <div className="branchAddress">
                {" "}
                {/* <img src={""} alt="" /> */}
                <div className="">
                  {" "}
                  <b>Address:</b>
                  <br></br> 123 A Street 2, ABC Town Name - City
                </div>
              </div>
              <div className="branchEmail">
                {" "}
                {/* <img src={""} alt="" />  */}
                <div className="">
                  <b>Mail:</b> branchOne@company.com
                </div>
              </div>
              <div className="branchNumber">
                {" "}
                {/* <img src={""} alt="" />  */}
                <div className="">
                  <b>Number:</b> <br />
                  012-3456789
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          © Lorem Psychologists 2025 - All Rights Reserved
        </div>
      </footer>
    </>
  );
}

export default MainLayout;
