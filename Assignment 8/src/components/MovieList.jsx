import React from "react";
import { Link } from "react-router-dom";

const MovieListHeader = () => {
  return (
    <div style={{ backgroundColor: "#1C1C1C", color: "#FFD700", padding: "50px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "20px" }}>BOOK YOUR TICKETS FOR MOVIE</h1>
      <p style={{ fontSize: "20px", marginBottom: "30px" }}>
        Safe, secure, reliable ticketing. Your ticket to live entertainment.
      </p>
      <div>
        <button style={{
          margin: "10px", 
          backgroundColor: "#FFD700", 
          color: "#121212", 
          padding: "15px 30px", 
          fontSize: "18px", 
          cursor: "pointer", 
          border: "none" 
        }}>
          Join Us
        </button>
      </div>
    </div>
  );
};

const MovieList = () => {
  const movies = [
    { id: "1", title: "Stree 2", screen: "Platinum", price: "$15", image: "stree2.jpeg" },
    { id: "2", title: "Gadar 2", screen: "Gold", price: "$10", image: "gadar2.jpeg" },
    { id: "3", title: "Housefull 5", screen: "Silver", price: "$5", image: "housefull5.jpeg" },
    { id: "4", title: "Jolly LLB 3", screen: "Platinum", price: "$12", image: "jollyllb3.jpeg" },
    { id: "5", title: "Baaghi 4", screen: "Gold", price: "$8", image: "baaghi4.jpeg" },
    { id: "6", title: "Pushpa 2", screen: "Silver", price: "$7", image: "pushpa2.jpeg" },
    { id: "7", title: "Kantara", screen: "Platinum", price: "$15", image: "kantara.jpeg" },
    { id: "8", title: "Toxic", screen: "Gold", price: "$9", image: "toxic.jpeg" },
    { id: "9", title: "Raid 2", screen: "Silver", price: "$6", image: "raid2.jpeg" },
    { id: "10", title: "Sky Force", screen: "Platinum", price: "$13", image: "skyforce.jpeg" },
    { id: "11", title: "Sikandar", screen: "Gold", price: "$11", image: "sikandar.jpeg" },
    { id: "12", title: "Jaat", screen: "Silver", price: "$5", image: "jaat.jpeg" },
    { id: "13", title: "Chaava", screen: "Platinum", price: "$14", image: "chaava.jpeg" },
    { id: "14", title: "Pathaan", screen: "Platinum", price: "$20", image: "pathaan.jpg" },
    { id: "15", title: "Jawan", screen: "Gold", price: "$18", image: "jawan.jpg" },
    { id: "16", title: "Marco", screen: "Silver", price: "$6", image: "marco.jpeg" },
  ];

  return (
    <div>
      <MovieListHeader />
      <div style={{
        display: "grid", 
        gridTemplateColumns: "repeat(4, 1fr)", // 4 movies per row
        gap: "20px", 
        padding: "20px" 
      }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{
            backgroundColor: "#1C1C1C", 
            padding: "20px", 
            borderRadius: "10px", 
            color: "#FFD700", 
            textAlign: "center" 
          }}>
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "#FFD700" }}>
              <img src={movie.image} alt={movie.title} style={{
                width: "100%", 
                height: "200px", 
                objectFit: "cover", 
                borderRadius: "10px" 
              }} />
              <h3 style={{ fontSize: "20px", margin: "10px 0" }}>{movie.title}</h3>
            </Link>
            <p>Screen: {movie.screen}</p>
            <p>Price: {movie.price}</p>
            <button style={{
              marginTop: "10px", 
              backgroundColor: "#FFD700", 
              color: "#121212", 
              padding: "10px 20px", 
              fontSize: "16px", 
              cursor: "pointer", 
              border: "none" 
            }}>
              Buy Tickets
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
