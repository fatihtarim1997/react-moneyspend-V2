import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import {useFireStore} from '../../hooks/useFireStore'

export default function Form({uid}) {
    const {addDocument,response} = useFireStore('spendings');
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(uid);
    addDocument({uid,title,amount});
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Typography variant="h6" color="darkslateblue">
        Spending Information
        
      </Typography>
      <TextField
        label="Amount Title"
        variant="standard"
        value={title}
        fullWidth
        required
        onChange={(e) => setTitle(e.target.value)}
      ></TextField>
        <TextField
        label="Amount"
        variant="standard"
        value={amount}
        fullWidth
        required
        sx={{my:5}}
        onChange={(e) => setAmount(e.target.value)}
      ></TextField>
        <Button variant="contained" color="secondary" type="submit">ADD</Button>
    </form>
  );
}
