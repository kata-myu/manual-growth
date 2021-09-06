import React, {useState, useEffect} from "react";

import Header from "./components/header/header";

import SideBar from "./components/sidebar/sidebar";

import Main from "./components/main/main";
import categoryRequest from "./requests/categoryRequest";
import "./App.css";

export const CategoryContext = React.createContext([])
export const ManualContext = React.createContext([])
export const SetCategoryContext = React.createContext<any>([])
export const SetManualContext = React.createContext<any>([])



const App = () => {

  const [categories, setCategories] = useState([]);
  const [manuals, setManuals] = useState([]);
  

  useEffect(() => {
    const fetchCategories =  async () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      const response = await categoryRequest("fetch");
      // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
      setCategories(response.data[0])
      // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
      setManuals(response.data[1])
    }
    fetchCategories()
  }, [])

  
  return(
    <CategoryContext.Provider value={categories}>
    <ManualContext.Provider value={manuals}>
    <SetCategoryContext.Provider value={setCategories}>
    <SetManualContext.Provider value={setManuals}>
      <div className="contentsBody">
        <Header></Header>
        <div className="contents" style={{backgroundColor: "#EEEEEE"}}>
          <SideBar></SideBar>
          <Main></Main>
        </div>
      </div>
    </SetManualContext.Provider>
    </SetCategoryContext.Provider>
    </ManualContext.Provider>
    </CategoryContext.Provider>
  );
};
export default App;
