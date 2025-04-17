import React from "react";

const MainBanner = () => {
  return (
    <div style={{ backgroundColor: "#121212", color: "#FFD700", padding: "70px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "40px", fontWeight: "bold", marginBottom: "20px" }}>Now Playing</h1>
      <p style={{ fontSize: "20px", marginBottom: "30px" }}>Get movie tickets to your favorite films today!</p>
      <div>
        <button style={{ margin: "15px", backgroundColor: "#FFD700", color: "#121212", padding: "20px 40px", fontSize: "18px", cursor: "pointer", border: "none" }}>Get Tickets</button>
        <button style={{ margin: "15px", backgroundColor: "#FFD700", color: "#121212", padding: "20px 40px", fontSize: "18px", cursor: "pointer", border: "none" }}>Explore Movies</button>
      </div>
    </div>
  );
};

export default MainBanner;
