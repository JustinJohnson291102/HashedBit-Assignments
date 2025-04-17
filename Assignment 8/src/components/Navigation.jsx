import React from "react";

const Navigation = () => {
  return (
    <nav style={{
      backgroundColor: "#1A1A1A", 
      padding: "15px 30px", 
      color: "#FFD700", 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)"
    }}>
      {/* Left Links */}
      <div style={{ display: "flex", gap: "30px" }}>
        <a 
          href="/" 
          style={{
            textDecoration: "none", 
            color: "#FFD700", 
            fontSize: "20px", 
            fontWeight: "bold", 
            padding: "5px 10px", 
            borderRadius: "5px", 
            transition: "background-color 0.3s"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#FFD700"}
          onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}
        >
          Home
        </a>
        <a 
          href="/movies" 
          style={{
            textDecoration: "none", 
            color: "#FFD700", 
            fontSize: "20px", 
            fontWeight: "bold", 
            padding: "5px 10px", 
            borderRadius: "5px", 
            transition: "background-color 0.3s"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#FFD700"}
          onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}
        >
          Movies
        </a>
        <a 
          href="/theaters" 
          style={{
            textDecoration: "none", 
            color: "#FFD700", 
            fontSize: "20px", 
            fontWeight: "bold", 
            padding: "5px 10px", 
            borderRadius: "5px", 
            transition: "background-color 0.3s"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#FFD700"}
          onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}
        >
          Theaters
        </a>
        <a 
          href="/news" 
          style={{
            textDecoration: "none", 
            color: "#FFD700", 
            fontSize: "20px", 
            fontWeight: "bold", 
            padding: "5px 10px", 
            borderRadius: "5px", 
            transition: "background-color 0.3s"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#FFD700"}
          onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}
        >
          News
        </a>
      </div>

      {/* Right Icons */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <span 
          style={{
            fontSize: "22px", 
            color: "#FFD700", 
            cursor: "pointer", 
            transition: "color 0.3s"
          }}
          onMouseOver={(e) => e.target.style.color = "#FFFFFF"}
          onMouseOut={(e) => e.target.style.color = "#FFD700"}
        >
          🛒
        </span>
        <span 
          style={{
            fontSize: "22px", 
            color: "#FFD700", 
            cursor: "pointer", 
            transition: "color 0.3s"
          }}
          onMouseOver={(e) => e.target.style.color = "#FFFFFF"}
          onMouseOut={(e) => e.target.style.color = "#FFD700"}
        >
          👤
        </span>
      </div>
    </nav>
  );
};

export default Navigation;
