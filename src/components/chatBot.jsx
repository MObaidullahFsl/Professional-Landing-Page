import "../styles/chatBot.css";
import { back, undo } from "../assets/constants";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ChatBot({ visible, setVisible }) {
  const [chat, setChat] = useState([]);
  const [state, setState] = useState("greeting");
  const [open, setopen] = useState(visible);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [status, setStatus] = useState(0); // 0 = idle, 1 = loading, 2 = success, 3 = error
  const chatEndRef = useRef(null);

  const navigate = useNavigate();

  // scroll to bottom whenever chat updates
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  // chatbot states
  const states = {
    greeting: {
      message: "Welcome to Al Zahra Psychologists!",
      options: ["Continue"],
    },
    menu: {
      message:
        "Greetings and welcome to Al Zahra Psychologists, where your well-being is our top priority. Please choose an option:",
      options: [
        "Book a new appointment",
        "Check Services",
        "Get in Contact",
        "General inquiries",
      ],
    },
    // --- Appointment Flow ---
    appointment_name: {
      message: "May I know your name, please?",
      input: "text",
    },
    appointment_phone: {
      message: (name) =>
        ` May I have your phone number for further assistance, <b>${name}<b>`,
      input: "phone",
      error: "Please enter a valid number.",
    },
    appointment_email: {
      message: " Kindly provide us with your email address.",
      input: "email",
      error: "Please enter a valid email address.",
    },
    appointment_done: {
      message: " Thanks! Our team will contact you very soon.",
      options: ["Back to menu"],
    },
    // --- Services Flow ---
    services: {
      message: ` These are our services:<br/>• <b>Psychological Assessment</b><br/>• <b>Behavioural Therapy</b><br/>• <b>Psychotherapy</b><br/>• <b>Social Skills Training</b><br/>• <b>Family Counselling</b><br/>• <b>Psychoeducation</b><br/><br/>Would you like to further know about these?`,
      options: [
        "Psychological Assessment",
        "Behavioural Therapy",
        "Psychotherapy",
        "Social Skills Training",
        "Family Counselling",
        "Psychoeducation",
        "Back to menu",
      ],
    },
    service_detail: {
      message:
        "Here I have redirected you to this service's page for further information!",
      options: ["Back to services", "Back to menu"],
    },
    // --- Contact Flow ---
    contact: {
      message: `
  <strong>📇 Here are our contacts:</strong><br/><br/>
  📞 <b>Phone:</b> <a href="tel:+971123456789">+971 123456789</a><br/>
  📧 <b>Email:</b> <a href="mailto:info@servicename.com">info@servicename.com</a><br/>
  🌐 <b>Website:</b> <a href="https://www.servicename.com" target="_blank">www.servicename.com</a><br/>
  📱 <b>Instagram:</b> <a href="https://instagram.com/servicename" target="_blank">@servicename</a>
`,

      options: ["Back to menu"],
    },
    // --- Inquiries Flow ---
    inquiries: {
      message: "Please choose:",
      options: ["Find out our branches", "Watch our videos", "Go back to menu"],
    },
    branches: {
      message: "We currently have branches in Dubai, Sharjah, and Abu Dhabi.",
      options: ["Back to inquiries"],
    },
    videos: {
      message:
        "You can watch our videos on our YouTube channel: youtube.com/servicename",
      options: ["Back to inquiries"],
    },
  };

  // reset
  const handleReset = () => {
    setChat([{ sender: "bot", text: states.greeting.message }]);
    setState("greeting");
    setFormData({ name: "", phone: "", email: "" });
  };
  const handleClose = () => {
    setopen(false);
    setVisible(false);
  };
  useEffect(() => {
    setopen(visible);
  }, [visible]);
  // initial greeting
  useEffect(() => {
    setChat([{ sender: "bot", text: states.greeting.message }]);
  }, []);

  // submit to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(1);
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log("Backend response:", data);
      setStatus(2);
    } catch (err) {
      console.error(err);
      setStatus(3);
    }
  };

  // handle clicks
  const handleOptionClick = (option) => {
    setChat((prev) => [...prev, { sender: "user", text: option }]);

    if (option === "Continue") {
      setState("menu");
      setTimeout(() => {
        setChat((prev) => [
          ...prev,
          { sender: "bot", text: states.menu.message },
        ]);
      }, 500);
    }

    if (option === "Book a new appointment") {
      setState("appointment_name");
      setTimeout(() => {
        setChat((prev) => [
          ...prev,
          { sender: "bot", text: states.appointment_name.message },
        ]);
      }, 500);
    }

    if (option === "Check Services") {
      setState("services");
      setTimeout(() => {
        setChat((prev) => [
          ...prev,
          { sender: "bot", text: states.services.message },
        ]);
      }, 500);
    }

    if (option === "Get in Contact") {
      setState("contact");
      setTimeout(() => {
        setChat((prev) => [
          ...prev,
          { sender: "bot", text: states.contact.message },
        ]);
      }, 500);
    }

    if (option === "General inquiries") {
      setState("inquiries");
      setTimeout(() => {
        setChat((prev) => [
          ...prev,
          { sender: "bot", text: states.inquiries.message },
        ]);
      }, 500);
    }
    if (option === "Back to services") {
      setState("services");
      setTimeout(() => {
        setChat((prev) => [
          ...prev,
          { sender: "bot", text: states.services.message },
        ]);
      }, 500);
    }

    const servicesList = [
      "Psychological Assessment",
      "Behavioural Therapy",
      "Psychotherapy",
      "Social Skills Training",
      "Family Counselling",
      "Psychoeducation",
    ];
    const serviceIndex = servicesList.indexOf(option);
    if (serviceIndex !== -1) {
      setState("service_detail");
      setTimeout(() => {
        setChat((prev) => [
          ...prev,
          { sender: "bot", text: states.service_detail.message },
        ]);
      }, 500);
      navigate(`/services/${serviceIndex + 1}`);
    }

    if (option === "Back to menu" || option === "Go back to menu") {
      setState("menu");
      setTimeout(() => {
        setChat((prev) => [
          ...prev,
          { sender: "bot", text: states.menu.message },
        ]);
      }, 500);
    }

    if (option === "Find out our branches") {
      setState("branches");
      setTimeout(() => {
        setChat((prev) => [
          ...prev,
          { sender: "bot", text: states.branches.message },
        ]);
      }, 500);
    }

    if (option === "Watch our videos") {
      setState("videos");
      setTimeout(() => {
        setChat((prev) => [
          ...prev,
          { sender: "bot", text: states.videos.message },
        ]);
      }, 500);
    }

    if (option === "Back to inquiries") {
      setState("inquiries");
      setTimeout(() => {
        setChat((prev) => [
          ...prev,
          { sender: "bot", text: states.inquiries.message },
        ]);
      }, 500);
    }
  };

  // handle appointment input transitions
  const handleInputSubmit = (value) => {
    if (state === "appointment_name") {
      setFormData((prev) => ({ ...prev, name: value }));
      setChat((prev) => [...prev, { sender: "user", text: value }]);
      setState("appointment_phone");
      setTimeout(() => {
        setChat((prev) => [
          ...prev,
          { sender: "bot", text: states.appointment_phone.message(value) },
        ]);
      }, 500);
    } else if (state === "appointment_phone") {
      setFormData((prev) => ({ ...prev, phone: value }));
      setChat((prev) => [...prev, { sender: "user", text: value }]);
      setState("appointment_email");
      setTimeout(() => {
        setChat((prev) => [
          ...prev,
          { sender: "bot", text: states.appointment_email.message },
        ]);
      }, 500);
    } else if (state === "appointment_email") {
      setFormData((prev) => ({ ...prev, email: value }));
      setChat((prev) => [...prev, { sender: "user", text: value }]);
      setState("appointment_done");
      setTimeout(() => {
        setChat((prev) => [
          ...prev,
          { sender: "bot", text: states.appointment_done.message },
        ]);
      }, 500);
      handleSubmit(new Event("submit")); // trigger backend submit
    }
  };

  return (
    <div className={`cbContainer ${open ? "open" : ""}`}>
      <div className="cbTop">
        <div className="cbBack">
          {" "}
          <img src={back} alt="" onClick={handleClose} />
        </div>
        <div className="cbTitle">
          <div className="cbName">Al Zahra Psychologists</div>
          <div className="cbHook">How can we help you?</div>
        </div>
        <div className="cbRe">
          <img src={undo} alt="" onClick={handleReset} />
        </div>
      </div>

      <div className="cbArea">
        {chat.map((msg, i) => (
          <div
            key={i}
            className={`bubble ${msg.sender}`}
            dangerouslySetInnerHTML={{ __html: msg.text }}
          />
        ))}
        <div ref={chatEndRef} />

        <div className="cbButtons">
          {states[state]?.options?.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleOptionClick(opt)}
              className="cbOp"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="cbInputs">
        {state === "appointment_name" && (
          <input
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            onKeyDown={(e) =>
              e.key === "Enter" && handleInputSubmit(formData.name)
            }
            className="cbTxt"
            autoFocus
          />
        )}
        {state === "appointment_phone" && (
          <div className="chatbot">
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
                onKeyDown: (e) =>
                  e.key === "Enter" && handleInputSubmit(formData.phone),
              }}
            />
          </div>
        )}
        {state === "appointment_email" && (
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            onKeyDown={(e) =>
              e.key === "Enter" && handleInputSubmit(formData.email)
            }
            className="cbTxt"
            autoFocus
          />
        )}
        {state !== "appointment_name" &&
          state !== "appointment_phone" &&
          state !== "appointment_email" && (
            <div>You may not type right now</div>
          )}
      </div>
    </div>
  );
}
