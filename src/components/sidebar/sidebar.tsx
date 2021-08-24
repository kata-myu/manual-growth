import React, {useState} from "react";

// @ts-expect-error ts-migrate(6142) FIXME: Module './category' was resolved to '/Users/tech-c... Remove this comment to see the full error message
import SimpleList from "./category";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../modal/newManualModal' was resolved to '... Remove this comment to see the full error message
import NewManualModal from "../modal/newManualModal";
import "./sidebar.css";
import Button from '@material-ui/core/Button';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
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
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="sidebar">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="new-manual-button" onClick={handleOpen}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Button variant="contained" color="primary" disableElevation>
          新しいマニュアルをつくる
        </Button>
      </div>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="index">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <SimpleList />
      </div>

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Modal isOpen={isOpen} style={customStyles} onRequestClose={handleClose}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <NewManualModal handleClose={handleClose} />
      </Modal>
    </div>
  );
};
export default SideBar;