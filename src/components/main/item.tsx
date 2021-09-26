// Card メディア
import React, { useContext } from 'react';
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
import EditManualModal from '../modal/editManualModal';
import "./main.css"
import { CategoryContext } from '../../App';
import { FaTwitterSquare } from "react-icons/fa";
import { IconContext } from 'react-icons'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const styles = 
  {
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9,
      marginTop:'30'
    }
  }

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

  const [isEditOpen, setIsEditOpen] = useState(false);
  const handleEditOpen = () => {
    setIsEditOpen(true);
  };
  const handleEditClose = () => {
    setIsEditOpen(false);
  };
  Modal.setAppElement("#root");


  
  let imageUrl;
  if(props.manual.category_id == 1){
     imageUrl = "/images/ruby.svg"
  }else if(props.manual.category_id == 2){
    imageUrl = "/images/rails.svg"
  } else if (props.manual.category_id == 3){
    imageUrl = "/images/javascript.svg"
  }

  let categoryName;
  if(props.manual.category_id == 1){
    categoryName = "Ruby"
  }else if(props.manual.category_id == 2){
    categoryName = "Rails"
  } else if (props.manual.category_id == 3){
    categoryName = "JS"
  }

  return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Card className={classes.root} className="card">
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            className={classes.media}
            image={imageUrl}
            // style={styles.media}
            // {props.manual.image_url}
            // image="/images/image1.jpg"  //publicがとっぷになっているっぽい
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={{borderBlockEnd: 'solid 1px', fontWeight: 'bold', fontSize: 20 }}>
              {props.manual.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.manual.heading.substr(0, 30) + "..."}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <div >【{categoryName}】</div>
          <Button size="small" color="primary" style={{marginRight: 15, fontSize: 12, color: 'gray'}} onClick={handleEditOpen}>
            編集
          </Button>
          <Button size="small" color="primary">
            <a href='https://twitter.com/' target="_blank" style={{textDecoration: 'none', color: '#33CCFF'}}>
              share 
              <IconContext.Provider value={{size: '20px' }}>
                <span style={{marginLeft: 5}}><FaTwitterSquare /></span>
              </IconContext.Provider>
            </a>
          </Button>
          
        </CardActions>
        <Modal isOpen={isOpen} style={customStyles} onRequestClose={handleClose}>
          <ShowModal manual={props.manual} handleClose={handleClose} />
        </Modal>
        <Modal isOpen={isEditOpen} style={customStyles} onRequestClose={handleEditClose}>
          <EditManualModal manual={props.manual} handleClose={handleEditClose} />
        </Modal>
      </Card>
  );
}
