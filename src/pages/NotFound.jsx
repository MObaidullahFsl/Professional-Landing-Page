import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>
        Oops! The page you're looking for doesn’t exist.
      </p>
      <Link to="/" style={styles.button}>
        Go Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #05c2af, #08a66c)",
    color: "#fff",
    textAlign: "center",
    padding: "40px 20px",
  },
  title: {
    fontSize: "8rem",
    margin: "0",
    fontWeight: "bold",
  },
  message: {
    fontSize: "1.25rem",
    marginBottom: "20px",
  },
  button: {
    display: "inline-block",
    backgroundColor: "#fff",
    color: "#08a66c",
    padding: "10px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  },
};

export default NotFound;
