import React, {useState, useCallback, useContext} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import categoryRequest from "../../requests/categoryRequest";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../App' was resolved to '/Users/tech-ca... Remove this comment to see the full error message
import {SetCategoryContext} from "../../App";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const PlusCategory = (props: any) => {
  const classes = useStyles();


  const setCategories  = useContext(SetCategoryContext)

  const [name, setName] = useState("");
  
  const inputName = useCallback((event) => {
    setName(event.target.value)
  },[setName]);
  

  const submitForm = async () => {
    try{
      const categoryData = {name: name};
      const categories = await categoryRequest("create", categoryData);
      console.log(categories);
      // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
      await (setCategories as any)(categories.data[0]);
      setName("")
      return props.handleClose()
    }catch(err){
      console.log(err);
    }
  };

  return(
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <form className={classes.root} noValidate autoComplete="off">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <TextField id="filled-basic" label="新しいカテゴリ名" variant="filled" onChange={inputName} />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <input
          className="input_submit"
          type="button"
          value="登録"
          onClick={submitForm}
        />
        </div>
    </form>
  );
};
export default PlusCategory;