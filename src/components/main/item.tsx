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
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
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

export default function MediaCard(props: any) {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  Modal.setAppElement("#root");


  
  let imageUrl;
  if(props.manual.category_id == 1){
     imageUrl = "/images/ruby.svg"
  }else if(props.manual.category_id == 2){
    imageUrl = "/images/rails.svg"
  } else if (props.manual.category_id == 3){
    imageUrl = "/images/js-image.jpg"
  }

  console.log(props.manual);

  return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Card className={classes.root} className="card">
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            className={classes.media}
            image={imageUrl}
            // {props.manual.image_url}
            // image="/images/image1.jpg"  //publicがとっぷになっているっぽい
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.manual.title} 
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.manual.heading.substr(0, 35) + "..."}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <span>カテゴリ名</span>
          <Button size="small" color="primary">
          share with twitter
          </Button>
          {/* <Button size="small" color="primary">
            Learn More
          </Button> */}
          
        </CardActions>
        <Modal isOpen={isOpen} style={customStyles} onRequestClose={handleClose}>
          <ShowModal manual={props.manual} handleClose={handleClose} />
        </Modal>
      </Card>
  );
}
