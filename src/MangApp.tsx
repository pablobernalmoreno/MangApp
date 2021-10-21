import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { MCard } from "./components/MCard/MCard";
import {
  cardMockData,
  initialCardMockData,
} from "./utils/MockData/mockCardData";

function MangApp() {
  const [cards, setCards] = useState(initialCardMockData);

  const addArray = () => {
    setCards([...cards, cardMockData]);
  };

  return (
    <div className="MangApp">
      <Button variant="contained" color="primary" onClick={addArray}>
        Add
      </Button>
      {cards.map((card, key) => (
        <MCard
          title={`${key} ${card?.title}`}
          description={card?.description}
          image={card?.image}
        />
      ))}
    </div>
  );
}

export default MangApp;
