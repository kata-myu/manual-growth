import React, { useContext } from "react";
import MediaCard from "./item";
import "./main.css";
import AssignmentIcon from '@material-ui/icons/Assignment';
import { ManualContext } from "../../App";

const Main = () => {

  const manualsData = useContext(ManualContext)

  return (<div className="main">
     
      <div className="main-top">
        <AssignmentIcon /> 
        <div className="main-title">投稿一覧</div>
      </div>

      <div className="items">
        
        {(manualsData as any).map((manual: any, index: any) => {
        return (<div className="item" key={index}>
              <MediaCard manual={manual}/>
            </div>);
    })}
        
      </div>
    </div>);
};
export default Main;