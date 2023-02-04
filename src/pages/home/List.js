import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import {useFireStore} from '../../hooks/useFireStore'
import  DeleteIcon  from "@mui/icons-material/Delete";
import React from "react";

export default function Lists({ amountData }) {
    const {deleteDocument} = useFireStore('spendings');
    const handleDelete = (id) => {
        deleteDocument(id);
    }
  return (
    <List>
      {amountData.map((item) => (
        <React.Fragment key={item.id}>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon onClick={()=>handleDelete(item.id)} />
              </IconButton>
            }>
            <ListItemText primary={item.title} secondary={item.amount} />
          </ListItem>
            <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}
