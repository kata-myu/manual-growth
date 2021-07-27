import React, {useContext, useState, useCallback} from 'react';
import {SetManualContext} from "../../App";
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

const NewManualModal = (props) => {

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
      formData.append('category_id', categoryId);
      formData.append('job', job);
      formData.append('heading', heading);
      formData.append('text', text);
      // const manualData = {category_id: categoryId, job: job, heading: heading, text: text}; これでは画像データが送れない。formData()を使う。
      // console.log(manualData);
      const manuals = await categoryRequest("create_manual", formData);
      console.log(manuals);
      await setManuals(manuals.data[1]);
      setCategoryId(0)
      setHeading("")
      setText("")
      return props.handleClose()
    }catch(err){
      console.log(err);
    }
  };


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">カテゴリを選択</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={0}
          onChange={inputCategory}
        >
          {categories.map((category, index) => {
            return(
              <MenuItem key={index} value={category.id}>{category.name}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
      
      <h5>マニュアル名を入力</h5>
      <TextField id="filled-basic" label="マニュアル名" variant="filled" onChange={inputJob} />
      <h5>業務の見出しを入力</h5>
      <TextField id="filled-basic" label="業務の見出し" variant="filled" onChange={inputHeading} />
      <h5>業務内容を入力</h5>
      <TextField id="filled-basic" label="業務内容" variant="filled" onChange={inputText} />
      <h5>画像</h5>
      <input type="file" id="image" name="image" accept="image/png,image/jpeg" onChange={inputImage} />
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
export default NewManualModal;