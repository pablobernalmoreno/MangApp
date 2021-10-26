import React, { useState } from "react";
import { Button, Card, makeStyles, TextField } from "@material-ui/core";
import { MCard } from "./components/MCard/MCard";
import { initialCardMockData } from "./utils/MockData/mockCardData";

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
  const [card, setCard] = useState({
    title: "",
    description: "",
    image: "",
  });

  const addArray = () => {
    setCards([...cards, card]);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCard({ ...card, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Card className={classes.addCard}>
        <div className={classes.cardTextField}>
          <TextField
            fullWidth
            name="title"
            placeholder="Titulo"
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            name="description"
            placeholder="Descripción"
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            name="image"
            placeholder="URL imagen"
            variant="standard"
            onChange={handleChange}
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
