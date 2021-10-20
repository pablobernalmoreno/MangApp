import React from "react";
import { MCard } from "./components/MCard/MCard";

function MangApp() {
  return (
    <div className="MangApp">
      <MCard
        title="lizard"
        description="Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica"
        image="https://www.muyseguridad.net/wp-content/uploads/2018/02/Lizard-Squad.jpg"
      />
    </div>
  );
}

export default MangApp;
