import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import BookingForm from "./components/BookingForm";
import SeatConfirmation from "./components/SeatConfirmation";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} /> {/* Separate Movie Details Page */}
          <Route path="/book-seat" element={<BookingForm />} /> {/* Separate Booking Page */}
          <Route path="/confirmation" element={<SeatConfirmation />} /> {/* Separate Confirmation Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
