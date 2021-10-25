import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

interface Props {
  title: string;
  description?: string;
  image: string;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "10px",
  },
});

export const MCard = ({ title, description, image }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia component="img" alt={title} height="140" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="secondary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
