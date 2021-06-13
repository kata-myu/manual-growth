import React, { useContext } from "react";
import MediaCard from "./item";
import "./main.css";
import AssignmentIcon from '@material-ui/icons/Assignment';
import { ManualContext } from "../../App";

const Main = () => {

  const manualsData = useContext(ManualContext)

  return(
    <div className="main">
     
      <div className="main-top">
        <AssignmentIcon /> 
        <div className="main-title">最近作られたマニュアル</div>
      </div>

      <div className="items">
        
        {manualsData.map((manual) => {
          return(
            <div className="item">
              <MediaCard manual={manual} />
            </div>
          )
        })}
        
      </div>
    </div>
  );
};
export default Main;