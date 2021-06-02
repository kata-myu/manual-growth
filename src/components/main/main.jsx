import React from "react";
import MediaCard from "./item";
import "./main.css";
import AssignmentIcon from '@material-ui/icons/Assignment';

const Main = () => {
  return(
    <div className="main">
     
      <div className="main-top">
        <AssignmentIcon /> 
        <div className="main-title">最近作られた項目</div>
      </div>

      <div className="items">
        
        <div className="item">
          <MediaCard />
        </div>

        <div className="item">
          <MediaCard />
        </div>

        <div className="item">
          <MediaCard />
        </div>

        <div className="item">
          <MediaCard />
        </div>

        <div className="item">
          <MediaCard />
        </div>
        
        <div className="item">
          <MediaCard />
        </div>
        
      </div>
    </div>
  );
};
export default Main;