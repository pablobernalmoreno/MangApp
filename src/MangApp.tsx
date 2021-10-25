import React, { useState } from "react";
import {
  Button,
  Card,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { MCard } from "./components/MCard/MCard";
import {
  cardMockData,
  initialCardMockData,
} from "./utils/MockData/mockCardData";

const useStyles = makeStyles({
  cardsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  addCard: {
    maxWidth: 345,
    display: "flex",
    flexDirection: "row",
  },
  cardTextField: {
    margin: "10px",
  },
  addButton: {
    display: "flex",
    alignItems: "center",
  },
});

function MangApp() {
  const classes = useStyles();

  const [cards, setCards] = useState(initialCardMockData);

  const addArray = () => {
    setCards([...cards, cardMockData]);
  };

  return (
    <>
      <Card className={classes.addCard}>
        <div className={classes.cardTextField}>
          <TextField fullWidth placeholder="Titulo" variant="standard" />
          <TextField fullWidth placeholder="Descripción" variant="standard" />
          <TextField fullWidth placeholder="URL imagen" variant="standard" />
        </div>
        <div className={classes.addButton}>
          <Button variant="contained" color="primary" onClick={addArray}>
            Add
          </Button>
        </div>
      </Card>
      <div className={classes.cardsContainer}>
        {cards.map((card, key) => (
          <MCard
            title={`${key} ${card?.title}`}
            description={card?.description}
            image={card?.image}
          />
        ))}
      </div>
    </>
  );
}

export default MangApp;
