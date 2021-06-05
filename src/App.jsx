import React, {useEffect} from "react";
import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar";
import Main from "./components/main/main";
import categoryRequest from "./requests/categoryRequest";
import "./App.css";

const App = () => {

  useEffect(() => {
    const fetchCategories =  async () => {
      const response = await categoryRequest;
      console.log(response);
    }
    fetchCategories()
  }, [])

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
