import React from "react";
import "./sidebar.css";

const SideBar = () => {
  return(
    <div className="sidebar">
      <div>新しいマニュアルをつくる</div>
      <div className="index">
        <div className="manual">マニュアル１</div>
        <div className="manual">マニュアル２</div>
        <div className="manual">マニュアル３</div>
        <div className="manual">マニュアル４</div>
      </div>
    </div>
  );
};
export default SideBar;