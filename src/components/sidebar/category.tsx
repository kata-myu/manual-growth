// List(シンプルなリスト)
import React, {useState, useContext} from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import Modal from "react-modal";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../modal/plusCategory' was resolved to '/U... Remove this comment to see the full error message
import PlusCategoy from "../modal/plusCategory";
import "./sidebar";
import categoryRequest from "../../requests/categoryRequest";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../App' was resolved to '/Users/tech-ca... Remove this comment to see the full error message
import {SetManualContext} from "../../App";

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../App' was resolved to '/Users/tech-ca... Remove this comment to see the full error message
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
// @ts-expect-error ts-migrate(6142) FIXME: Module '../modal/plusCategory' was resolved to '/U... Remove this comment to see the full error message
import PlusCategory from '../modal/plusCategory';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props: any) {
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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

  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return (<div className={classes.root}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <List component="nav" aria-label="main mailbox folders">
      
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="category-plus" onClick={handleOpen}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ControlPointIcon />
      </div>

        {(categoriesData as any).map((category: any, index: any) => {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return (<div onClick={() => selectCategory(category.id)}>  {/*() => をつけないと無限ループが発生する。ついていないと関数が走ってしまっているっぽい */}
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <ListItem button key={index}>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <ListItemIcon>
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <MenuBookTwoToneIcon />
                </ListItemIcon>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <ListItemText primary={category.name}/>
            </ListItem>
          </div>);
    })}
        
      </List>

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Modal isOpen={isOpen} style={customStyles} onRequestClose={handleClose}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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

