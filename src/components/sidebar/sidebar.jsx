import React from "react";
import SimpleList from "./manuals";
import "./sidebar.css";
import Button from '@material-ui/core/Button';


const SideBar = () => {
  return(
    <div className="sidebar">
      <div className="new-manual-button">
        <Button variant="contained" color="primary" disableElevation>
          新しいマニュアルをつくる
        </Button>
      </div>
      <div className="index">
        <SimpleList />
      </div>
    </div>
  );
};
export default SideBar;