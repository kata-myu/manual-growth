import React, { useContext } from "react";
// @ts-expect-error ts-migrate(6142) FIXME: Module './item' was resolved to '/Users/tech-camp/... Remove this comment to see the full error message
import MediaCard from "./item";
import "./main.css";
import AssignmentIcon from '@material-ui/icons/Assignment';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../App' was resolved to '/Users/tech-ca... Remove this comment to see the full error message
import { ManualContext } from "../../App";

const Main = () => {

  const manualsData = useContext(ManualContext)

  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return (<div className="main">
     
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="main-top">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <AssignmentIcon /> 
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="main-title">マニュアル一覧</div>
      </div>

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="items">
        
        {(manualsData as any).map((manual: any, index: any) => {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return (<div className="item" key={index}>
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <MediaCard manual={manual}/>
            </div>);
    })}
        
      </div>
    </div>);
};
export default Main;