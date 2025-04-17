import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams(); // Extract the movie ID from the URL
  const navigate = useNavigate();

  // Complete movie data with descriptions for all movies
  const movies = [
    {
      id: "1",
      title: "Stree 2",
      description: "Prepare to be spooked and entertained in this hilarious horror-comedy sequel. With supernatural twists and rib-tickling humor, the story follows the residents of Chanderi as they once again confront the mysterious Stree. A perfect mix of scares and laughs.",
    },
    {
      id: "2",
      title: "Gadar 2",
      description: "An emotional rollercoaster of love, patriotism, and sacrifice, this epic sequel explores the power of family and courage during times of adversity. Tara Singh embarks on another heroic journey to protect his loved ones and his country.",
    },
    {
      id: "3",
      title: "Housefull 5",
      description: "Chaos, laughter, and confusion return in the fifth installment of the blockbuster comedy franchise! Packed with hilarious misunderstandings, wild antics, and a star-studded cast, Housefull 5 guarantees to leave you in splits.",
    },
    {
      id: "4",
      title: "Jolly LLB 3",
      description: "A riveting courtroom drama that balances humor with serious legal battles. Jolly returns to take on a case that challenges corruption and injustice in a compelling narrative. Sharp arguments, witty exchanges, and a powerful story make this sequel a standout.",
    },
    {
      id: "5",
      title: "Baaghi 4",
      description: "Dive into the adrenaline-fueled world of rebellion and action with Baaghi 4! Packed with breathtaking stunts, heart-pounding sequences, and an intense storyline, this movie showcases the ultimate journey of a one-man army fighting against all odds.",
    },
    {
      id: "6",
      title: "Pushpa 2",
      description: "The saga continues with Pushpa as he takes on bigger challenges in the world of smuggling and betrayal. Gritty, intense, and action-packed, this sequel delves deeper into Pushpa's rise against his enemies, with power-packed performances and gripping storytelling.",
    },
    {
      id: "7",
      title: "Kantara",
      description: "Step into the mystical world of Kantara, where folklore and spirituality collide. This visually stunning tale explores the bond between humans and nature while unraveling secrets hidden in a forest that holds ancient traditions and thrilling mysteries.",
    },
    {
      id: "8",
      title: "Toxic",
      description: "A gripping psychological thriller that delves into the dark secrets of human relationships. With unexpected twists and an eerie atmosphere, Toxic keeps you on the edge of your seat as it unravels layers of deceit, obsession, and betrayal.",
    },
    {
      id: "9",
      title: "Raid 2",
      description: "The high-stakes battle against corruption continues in this thrilling sequel. An honest and determined officer takes on the powerful elite in a gripping narrative filled with intense confrontations and thought-provoking moments of justice.",
    },
    {
      id: "10",
      title: "Sky Force",
      description: "Soar to new heights with Sky Force, an action-adventure that takes you into the heart of an air force operation. Featuring daring missions, aerial combat, and a story of bravery and teamwork, this movie is an adrenaline rush from start to finish.",
    },
    {
      id: "11",
      title: "Sikandar",
      description: "An inspiring tale of courage and determination, Sikandar portrays the journey of an underdog rising against all odds. With a mix of drama, resilience, and heartfelt moments, this movie celebrates the triumph of the human spirit.",
    },
    {
      id: "12",
      title: "Jaat",
      description: "Set in the rustic backdrop of rural India, Jaat is a compelling story of tradition, honor, and the struggles of a community. With a strong emotional core and authentic characters, this movie explores themes of identity and perseverance.",
    },
    {
      id: "13",
      title: "Chaava",
      description: "An emotional drama that dives into the complexities of family, sacrifice, and redemption. With poignant performances and a story that tugs at your heartstrings, Chaava is a cinematic experience that leaves a lasting impression.",
    },
    {
      id: "14",
      title: "Pathaan",
      description: "A high-octane spy thriller featuring jaw-dropping action sequences and a gripping storyline. Follow Pathaan as he takes on dangerous missions across the globe in this edge-of-the-seat adventure packed with twists and explosive moments.",
    },
    {
      id: "15",
      title: "Jawan",
      description: "A tale of bravery, sacrifice, and patriotism, Jawan showcases the courage of a soldier dedicated to protecting his nation. With powerful performances and intense storytelling, this movie strikes the perfect balance of action and emotion.",
    },
    {
      id: "16",
      title: "Marco",
      description: "A heartwarming journey of hope, perseverance, and self-discovery. Marco explores the life of an unlikely hero as he overcomes challenges and inspires those around him, creating a story that's both uplifting and unforgettable.",
    },
  ];

  // Find the specific movie by ID
  const movie = movies.find((movie) => movie.id === id);

  return (
    <div style={{ backgroundColor: "#1C1C1C", color: "#FFD700", padding: "50px", fontFamily: "Arial, sans-serif" }}>
      {movie ? (
        <>
          <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}>
            {movie.title}
          </h1>
          <div style={{
            backgroundColor: "#282828", 
            borderRadius: "10px", 
            padding: "30px", 
            maxWidth: "800px", 
            margin: "20px auto", 
            boxShadow: "0px 6px 12px rgba(255, 215, 0, 0.3)", 
            textAlign: "justify", 
            lineHeight: "1.6"
          }}>
            <p style={{ fontSize: "20px", color: "#FFD95A" }}>
              {movie.description}
            </p>
          </div>
          <button
            onClick={() => navigate("/book-seat")}
            style={{
              display: "block", 
              margin: "30px auto", 
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
            Book Tickets
          </button>
        </>
      ) : (
        <p style={{ fontSize: "20px", textAlign: "center", marginTop: "50px" }}>
          Sorry, movie not found! Please check back later.
        </p>
      )}
    </div>
  );
};

export default MovieDetails;
