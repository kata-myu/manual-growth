import React, {useContext, useState, useCallback} from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../App' was resolved to '/Users/tech-ca... Remove this comment to see the full error message
import {SetManualContext} from "../../App";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../App' was resolved to '/Users/tech-ca... Remove this comment to see the full error message
import {CategoryContext} from "../../App";
import categoryRequest from "../../requests/categoryRequest";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const NewManualModal = (props: any) => {

  const categories  = useContext(CategoryContext)
  const setManuals  = useContext(SetManualContext)
  // const headers = { "Content-Type": "multipart/form-data" };

  const classes = useStyles();

  const [categoryId, setCategoryId] = useState(0);
  const [job, setJob] = useState("");
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  
  const inputCategory = useCallback((event) => {
    setCategoryId(event.target.value)
  },[setCategoryId]);

  const inputJob = useCallback((event) => {
    setJob(event.target.value)
  },[setJob]);

  const inputHeading = useCallback((event) => {
    setHeading(event.target.value)
  },[setHeading]);

  const inputText = useCallback((event) => {
    setText(event.target.value)
  },[setText]);

  const inputImage = useCallback((event) => {
    setImage(event.target.files[0])
  },[setImage]);

  

  const submitForm = async () => {
    try{
      const formData = new FormData();
      formData.append('image', image);
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'number' is not assignable to par... Remove this comment to see the full error message
      formData.append('category_id', categoryId);
      formData.append('job', job);
      formData.append('heading', heading);
      formData.append('text', text);
      // const manualData = {category_id: categoryId, job: job, heading: heading, text: text}; これでは画像データが送れない。formData()を使う。
      // console.log(manualData);
      const manuals = await categoryRequest("create_manual", formData);
      console.log(manuals);
      // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
      await (setManuals as any)(manuals.data[1]);
      setCategoryId(0)
      setJob("")
      setHeading("")
      setText("")
      setImage("")
      return props.handleClose()
    }catch(err){
      console.log(err);
    }
  };


  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return (<form className={classes.root} noValidate autoComplete="off">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FormControl className={(classes as any).formControl}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <InputLabel id="demo-simple-select-label">カテゴリを選択</InputLabel>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Select labelId="demo-simple-select-label" id="demo-simple-select" 
// value={0}
onChange={inputCategory}>
          {(categories as any).map((category: any, index: any) => {
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return (<MenuItem key={index} value={category.id}>{category.name}</MenuItem>);
    })}
        </Select>
      </FormControl>
      
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <h5>マニュアル名を入力</h5>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <TextField id="filled-basic" label="マニュアル名" variant="filled" onChange={inputJob}/>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <h5>業務の見出しを入力</h5>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <TextField id="filled-basic" label="業務の見出し" variant="filled" onChange={inputHeading}/>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <h5>業務内容を入力</h5>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <TextField id="filled-basic" label="業務内容" variant="filled" onChange={inputText}/>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <h5>画像</h5>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <input type="file" id="image" name="image" accept="image/png,image/jpeg" onChange={inputImage}/>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <input className="input_submit" type="button" value="登録" onClick={submitForm}/>
        </div>
    </form>);
};
export default NewManualModal;