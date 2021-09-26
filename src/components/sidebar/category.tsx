// List(シンプルなリスト)
import React, {useState, useContext} from 'react';
import Modal from "react-modal";
import PlusCategoy from "../modal/plusCategory";
import "./sidebar";
import categoryRequest from "../../requests/categoryRequest";
import {SetManualContext} from "../../App";

import {CategoryContext} from "../../App";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import Icon from '@material-ui/core/Icon';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import PlusCategory from '../modal/plusCategory';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props: any) {
  return <ListItem button component="a" {...props} />;
}


export default function SimpleList() {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  Modal.setAppElement("#root");


  const customStyles = {
    overlay: {
      backgroundColor: "rgb(80, 80, 80, 0.8)",
    },
    content: {
      top: "10%",
      left: "60%",
      right: "50%",
      height: "75vh",
      width: "60vw",
      marginLeft: "-50vw",
      padding: "2vw 10vw",
    },
  };



  const categoriesData  = useContext(CategoryContext)
  console.log(categoriesData);

  const classes = useStyles();


  const setManuals = useContext(SetManualContext);



  const selectCategory = async (id: any) => {
    const categoryId = {id: id}
    console.log(categoryId.id);
    try{
      const manuals = await categoryRequest("select_category", categoryId);
      console.log(manuals);
      // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
      await (setManuals as any)(manuals.data[1]);
    }catch(err){
      console.log(err);
    }
  };

  return (<div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
      
      <div className="category-plus" onClick={handleOpen}>
        <ControlPointIcon />
      </div>

        {(categoriesData as any).map((category: any, index: any) => {
        return (<div onClick={() => selectCategory(category.id)}>  {/*() => をつけないと無限ループが発生する。ついていないと関数が走ってしまっているっぽい */}
            <ListItem button key={index}>
                <ListItemIcon>
                  <MenuBookTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary={category.name}/>
            </ListItem>
          </div>);
    })}
        
      </List>

      <Modal isOpen={isOpen} style={customStyles} onRequestClose={handleClose}>
        <PlusCategory handleClose={handleClose}/>
      </Modal>

      {/* <Divider /> */}
      {/* <List component="nav" aria-label="secondary mailbox folders">
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <ListItemLink href="#simple-list">
        <ListItemText primary="Spam" />
      </ListItemLink>
    </List> */}
    </div>);
}

