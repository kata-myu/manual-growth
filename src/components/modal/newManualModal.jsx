import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
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

const NewManualModal = () => {
  const classes = useStyles();

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">カテゴリを選択</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>業務フロー</MenuItem>
          <MenuItem value={20}>接客マナー</MenuItem>
          <MenuItem value={30}>キッチン業務</MenuItem>
          <MenuItem value={30}>トラブル対応</MenuItem>
        </Select>
      </FormControl>
      
      <h5>新しいカテゴリをつけ足す場合は、 カテゴリ名を入力してください。</h5>
      <TextField id="filled-basic" label="新しいカテゴリ名" variant="filled" />
      <h5>業務の見出しを入力</h5>
      <TextField id="filled-basic" label="業務の見出し" variant="filled" />
      <h5>業務内容を入力</h5>
      <TextField id="filled-basic" label="業務内容" variant="filled" />
      <div>
        <input
          className="input_submit"
          type="button"
          value="登録"
          // onClick={onClickSubmit}
        />
        </div>
    </form>
  );
};
export default NewManualModal;