import React, { useState } from "react";
import { Button, Card, makeStyles, TextField } from "@material-ui/core";
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
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  const addArray = () => {
    setCards([
      ...cards,
      {
        title: title,
        description: description,
        image: url,
      },
    ]);
  };

  const addTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event) {
      setTitle(event.target.value);
    }
  };

  const addDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event) {
      setDescription(event.target.value);
    }
  };

  const addUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event) {
      setUrl(event.target.value);
    }
  };

  return (
    <>
      <Card className={classes.addCard}>
        <div className={classes.cardTextField}>
          <TextField
            fullWidth
            placeholder="Titulo"
            variant="standard"
            onChange={addTitle}
          />
          <TextField
            fullWidth
            placeholder="Descripción"
            variant="standard"
            onChange={addDescription}
          />
          <TextField
            fullWidth
            placeholder="URL imagen"
            variant="standard"
            onChange={addUrl}
          />
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
