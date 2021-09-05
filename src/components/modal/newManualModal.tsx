import React, {useContext, useState, useCallback} from 'react';
import {SetManualContext} from "../../App";
import {CategoryContext} from "../../App";
import categoryRequest from "../../requests/categoryRequest";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './modal.css';

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
  const [title, settitle] = useState("");
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  
  const inputCategory = useCallback((event) => {
    setCategoryId(event.target.value)
  },[setCategoryId]);

  const inputtitle = useCallback((event) => {
    settitle(event.target.value)
  },[settitle]);

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
      formData.append('title', title);
      formData.append('heading', heading);
      formData.append('text', text);
      // const manualData = {category_id: categoryId, title: title, heading: heading, text: text}; これでは画像データが送れない。formData()を使う。
      // console.log(manualData);
      const manuals = await categoryRequest("create_manual", formData);
      console.log(manuals);
      // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
      await (setManuals as any)(manuals.data[1]);
      setCategoryId(0)
      settitle("")
      setHeading("")
      setText("")
      setImage("")
      return props.handleClose()
    }catch(err){
      console.log(err);
    }
  };


  return (<form className={classes.root} noValidate autoComplete="off">
      <FormControl className={(classes as any).formControl}>
        <InputLabel id="demo-simple-select-label">カテゴリを選択</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" 
// value={0}
onChange={inputCategory}>
          {(categories as any).map((category: any, index: any) => {
        return (<MenuItem key={index} value={category.id}>{category.name}</MenuItem>);
    })}
        </Select>
      </FormControl>
      
      <h5>タイトルを入力</h5>
      <TextField id="filled-basic" label="タイトル" variant="filled" onChange={inputtitle}/>
      <h5>問題を記入</h5>
      {/* <TextField id="filled-basic" label="問題" variant="filled" onChange={inputHeading}/> */}
      <TextareaAutosize className='textArea' aria-label="minimum height" placeholder="問題" onChange={inputHeading} />
      <h5>解答を記入</h5>
      {/* <TextField id="filled-basic" label="解答" variant="filled" onChange={inputText}/> */}
      <TextareaAutosize className='textArea' aria-label="minimum height" placeholder="解答" onChange={inputText} />
      <h5>画像（任意）</h5>
      <input type="file" id="image" name="image" accept="image/png,image/jpeg" onChange={inputImage}/>
      <div>
        <input className="input_submit" type="button" value="登録" onClick={submitForm}/>
        </div>
    </form>);
};
export default NewManualModal;