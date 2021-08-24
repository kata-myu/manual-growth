import React, {useState, useEffect} from "react";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/header/header' was resolved t... Remove this comment to see the full error message
import Header from "./components/header/header";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/sidebar/sidebar' was resolved... Remove this comment to see the full error message
import SideBar from "./components/sidebar/sidebar";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/main/main' was resolved to '/... Remove this comment to see the full error message
import Main from "./components/main/main";
import categoryRequest from "./requests/categoryRequest";
import "./App.css";

export const CategoryContext = React.createContext([])
export const ManualContext = React.createContext([])
export const SetCategoryContext = React.createContext([])
export const SetManualContext = React.createContext([])


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
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <CategoryContext.Provider value={categories}>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <ManualContext.Provider value={manuals}>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <SetCategoryContext.Provider value={setCategories}>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <SetManualContext.Provider value={setManuals}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div></div>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Header></Header>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="contents">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <SideBar></SideBar>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
