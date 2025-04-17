import React from "react";
import { useLocation } from "react-router-dom";

const SeatConfirmation = () => {
  const location = useLocation();
  const { name, email, mobile } = location.state || {}; // Retrieve data passed from BookingForm

  return (
    <div style={{
      backgroundColor: "#1C1C1C",
      color: "#FFD700",
      padding: "40px",
      textAlign: "center",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{
        fontSize: "42px",
        fontWeight: "bold",
        marginBottom: "20px",
        color: "#F2C94C"
      }}>
        Booking Confirmed
      </h1>
      <div style={{
        backgroundColor: "#282828",
        borderRadius: "10px",
        padding: "25px",
        maxWidth: "500px",
        margin: "0 auto",
        boxShadow: "0px 6px 12px rgba(255, 215, 0, 0.3)"
      }}>
        <p style={{ fontSize: "18px", marginBottom: "12px", color: "#FFD700" }}>
          <strong>Name:</strong> {name || "N/A"}
        </p>
        <p style={{ fontSize: "18px", marginBottom: "12px", color: "#FFD700" }}>
          <strong>Email:</strong> {email || "N/A"}
        </p>
        <p style={{ fontSize: "18px", marginBottom: "12px", color: "#FFD700" }}>
          <strong>Mobile:</strong> {mobile || "N/A"}
        </p>
      </div>
      <button
        onClick={() => alert('Returning to home page...')}
        style={{
          marginTop: "25px",
          padding: "12px 30px",
          backgroundColor: "#F2C94C",
          color: "#121212",
          fontSize: "16px",
          fontWeight: "bold",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          boxShadow: "0px 4px 8px rgba(255, 215, 0, 0.5)"
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default SeatConfirmation;
