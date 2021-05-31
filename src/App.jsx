import React from "react";
import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar";
import Main from "./components/main/main";
import "./App.css";

const App = () => {
  return(
    <div>
      <Header></Header>
      <div className="contents">
        <SideBar></SideBar>
        <Main></Main>
      </div>
    </div>
  );
};
export default App;
