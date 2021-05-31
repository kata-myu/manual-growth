import React from "react";
import "./main.css";

const Main = () => {
  return(
    <div className="main">
      <div>最近作られた項目</div>

      <div className="items">
        
        <div className="item">
          <div className="item-name">開店作業</div>
        </div>
        
        <div className="item">
    　    <div className="item-name">閉店作業</div>
        </div>
        
        <div className="item">
          <div className="item-name">クレーム</div>
        </div>
        
        <div className="item">
          <div className="item-name">清掃</div>
        </div>

      </div>
    </div>
  );
};
export default Main;