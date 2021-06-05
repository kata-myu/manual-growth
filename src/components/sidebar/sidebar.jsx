import React, {useState} from "react";
import SimpleList from "./manuals";
import NewManualModal from "../modal/newManualModal";
import "./sidebar.css";
import Button from '@material-ui/core/Button';
import Modal from "react-modal";


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



const SideBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  Modal.setAppElement("#root");

  return(
    <div className="sidebar">
      <div className="new-manual-button" onClick={handleOpen}>
        <Button variant="contained" color="primary" disableElevation>
          新しいマニュアルをつくる
        </Button>
      </div>
      <div className="index">
        <SimpleList />
      </div>

      <Modal isOpen={isOpen} style={customStyles} onRequestClose={handleClose}>
        <NewManualModal />
      </Modal>
    </div>
  );
};
export default SideBar;