import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import the main App component
import "./App.css"; // Import the CSS file for styling

// Create the root element where the React app will render
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component inside the root element
root.render(<App />);
