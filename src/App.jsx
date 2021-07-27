import React, {useState, useEffect} from "react";
import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar";
import Main from "./components/main/main";
import categoryRequest from "./requests/categoryRequest";
import "./App.css";

export const CategoryContext = React.createContext([])
export const ManualContext = React.createContext([])
export const ImageContext = React.createContext([])
export const SetCategoryContext = React.createContext([])
export const SetManualContext = React.createContext([])
export const SetImageContext = React.createContext([])

const App = () => {

  const [categories, setCategories] = useState([]);
  const [manuals, setManuals] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchCategories =  async () => {
      const response = await categoryRequest("fetch");
      setCategories(response.data[0])
      setManuals(response.data[1])
      setImages(response.data[2])
    }
    fetchCategories()
  }, [])

  
  return(
    <CategoryContext.Provider value={categories}>
    <ManualContext.Provider value={manuals}>
    <ImageContext.Provider value={images}>
    <SetCategoryContext.Provider value={setCategories}>
    <SetManualContext.Provider value={setManuals}>
    <SetImageContext.Provider value={setImages}>
      <div></div>
      <div>
        <Header></Header>
        <div className="contents">
          <SideBar></SideBar>
          <Main></Main>
        </div>
      </div>
    </SetImageContext.Provider>
    </SetManualContext.Provider>
    </SetCategoryContext.Provider>
    </ImageContext.Provider>
    </ManualContext.Provider>
    </CategoryContext.Provider>
  );
};
export default App;
