import React, {useState, useEffect} from "react";
import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar";
import Main from "./components/main/main";
import categoryRequest from "./requests/categoryRequest";
import "./App.css";

export const CategoryContext = React.createContext([])

const App = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories =  async () => {
      const response = await categoryRequest("fetch");
      setCategories(response.data)
    }
    fetchCategories()
  }, [])

  
  return(
    <CategoryContext.Provider value={categories}>
      <div></div>
      <div>
        <Header></Header>
        <div className="contents">
          <SideBar></SideBar>
          <Main></Main>
        </div>
      </div>
    </CategoryContext.Provider>
  );
};
export default App;
