import React from "react";

const SidebarFilters = () => {
  return (
    <div style={{ width: "20%", backgroundColor: "#1C1C1C", color: "#FFA500", padding: "20px" }}>
      <h2 style={{ fontSize: "22px", marginBottom: "15px" }}>Filters</h2>

      {/* Categories */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Categories:</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {["Adventure", "Action", "Animation", "Comedy", "Sci-Fi", "Thriller"].map((category) => (
            <li key={category} style={{ marginBottom: "10px" }}>{category}</li>
          ))}
        </ul>
      </div>

      {/* Languages */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Language:</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {["English", "Spanish", "Hindi"].map((lang) => (
            <li key={lang} style={{ marginBottom: "10px" }}>{lang}</li>
          ))}
        </ul>
      </div>

      {/* Time */}
      <div>
        <h3>Time:</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {["Morning", "Night"].map((time) => (
            <li key={time} style={{ marginBottom: "10px" }}>{time}</li>
          ))}
        </ul>
      </div>

      {/* Apply Button */}
      <button style={{ marginTop: "20px", backgroundColor: "#FFA500", color: "#121212", border: "none", padding: "10px 20px", cursor: "pointer", fontSize: "16px" }}>
        Apply Filters
      </button>
    </div>
  );
};

export default SidebarFilters;
