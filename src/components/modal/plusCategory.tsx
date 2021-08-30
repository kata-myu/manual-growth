import React, {useState, useCallback, useContext} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import categoryRequest from "../../requests/categoryRequest";
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
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="filled-basic" label="新しいカテゴリ名" variant="filled" onChange={inputName} />
      <div>
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