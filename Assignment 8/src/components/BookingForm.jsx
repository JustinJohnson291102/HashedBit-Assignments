import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", { state: formData });
  };

  return (
    <div style={{
      backgroundColor: "#1C1C1C", 
      color: "#FFD700", 
      padding: "50px", 
      textAlign: "center", 
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ fontSize: "40px", fontWeight: "bold", marginBottom: "30px" }}>Booking Form</h1>
      <form 
        onSubmit={handleSubmit} 
        style={{
          backgroundColor: "#282828", 
          padding: "40px", 
          borderRadius: "10px", 
          maxWidth: "500px", 
          margin: "0 auto", 
          boxShadow: "0px 0px 10px rgba(255, 215, 0, 0.5)"
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <label 
            style={{
              display: "block", 
              fontSize: "18px", 
              fontWeight: "bold", 
              marginBottom: "8px", 
              textAlign: "left", 
              color: "#FFD700"
            }}
          >
            Name:
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            style={{
              width: "100%", 
              padding: "10px", 
              fontSize: "16px", 
              border: "1px solid #FFD700", 
              borderRadius: "5px", 
              backgroundColor: "#1C1C1C", 
              color: "#FFD700"
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label 
            style={{
              display: "block", 
              fontSize: "18px", 
              fontWeight: "bold", 
              marginBottom: "8px", 
              textAlign: "left", 
              color: "#FFD700"
            }}
          >
            Email:
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            style={{
              width: "100%", 
              padding: "10px", 
              fontSize: "16px", 
              border: "1px solid #FFD700", 
              borderRadius: "5px", 
              backgroundColor: "#1C1C1C", 
              color: "#FFD700"
            }}
          />
        </div>

        <div style={{ marginBottom: "30px" }}>
          <label 
            style={{
              display: "block", 
              fontSize: "18px", 
              fontWeight: "bold", 
              marginBottom: "8px", 
              textAlign: "left", 
              color: "#FFD700"
            }}
          >
            Mobile:
          </label>
          <input
            type="tel"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            required
            style={{
              width: "100%", 
              padding: "10px", 
              fontSize: "16px", 
              border: "1px solid #FFD700", 
              borderRadius: "5px", 
              backgroundColor: "#1C1C1C", 
              color: "#FFD700"
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "15px 30px", 
            backgroundColor: "#FFD700", 
            color: "#121212", 
            fontSize: "18px", 
            fontWeight: "bold", 
            border: "none", 
            borderRadius: "5px", 
            cursor: "pointer", 
            boxShadow: "0px 4px 8px rgba(255, 215, 0, 0.3)"
          }}
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
