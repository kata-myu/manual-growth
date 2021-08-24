// Card メディア
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {useState} from "react";
import Modal from "react-modal";
import ShowModal from "../modal/showModal";
import "./main.css"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const customStyles = {
  overlay: {
    backgroundColor: "rgb(80, 80, 80, 0.8)",
  },
  content: {
    top: "10%",
    left: "60%",
    right: "50%",
    height: "75vh",
    width: "80vw",
    marginLeft: "-60vw",
    padding: "2vw 10vw",
  },
};

export default function MediaCard(props) {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  Modal.setAppElement("#root");

  return (
      <Card className={classes.root} className="card">
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            className={classes.media}
            image={props.manual.image_url}
            // image="/images/image1.jpg"  //publicがとっぷになっているっぽい
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.manual.job}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.manual.heading}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
        <Modal isOpen={isOpen} style={customStyles} onRequestClose={handleClose}>
          <ShowModal manual={props.manual} handleClose={handleClose} />
        </Modal>
      </Card>
  );
}
