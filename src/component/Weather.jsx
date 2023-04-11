import React from "react";
// import { makeStyles } from '@mui/material';
import "./Weather.css";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import LocalInfo from "./Localinfo";
import Today from "./Today";
import Weekly from "./Weekly";

function Weather({ today, weekly }) {
  // const classes = useStyles();

  return (
    <div className="root">
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <Card className="section">
            <LocalInfo today={today} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className="section">
            <Today today={today} />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className="section">
            <Weekly weekData={weekly} />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
export default Weather;
