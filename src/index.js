import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import StarRating from "./StarRating";
import { useState } from "react";

import App from "./App";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} setMovieRating={setMovieRating} />
      ;<p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating maxRating={"7"} />
    <StarRating
      maxRating={5}
      size={24}
      color="red"
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    ></StarRating>

    <Test /> */}
    <App />
  </React.StrictMode>
);
