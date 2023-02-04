import { Container, Grid, Paper } from "@mui/material";
import Form from "./Form";
import Lists from "./List";
import "./Home.module.css";

import {useAuthContext} from '../../hooks/useAuthContext'
import {useCollection} from '../../hooks/useCollection'

export default function Home() {
  const {user}=useAuthContext();

  const {documents,error}=useCollection('spendings',['uid','==',user.uid]);
  console.log(error)
  return (
    <Container sx={{ mt: 8 }}>
      <Grid container spacing={2}>
        <Grid item md={8} sm={12} xs={12}>
          {error && <p>{error}</p>}
          {documents && <Lists amountData={documents} />}
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Form uid={user.uid} />
        </Grid>
      </Grid>
    </Container>
  );
}
