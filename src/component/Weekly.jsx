import React from "react";
import './Weekly.css'
import { CardMedia, Grid, Typography } from "@mui/material";

function Weekly({ weekDate }) {
  // const classes = useStyle();
  return (
    <CardMedia className="root">
      <Grid className="gridList" cellHeight="auto" spacing={4}>
        {weekDate.map((data) => (
          //GridListTitle not found in mui
          <GridListTitle key={data.key} cols={0.5} className="day">
            {data.key === 0 ? (
              <Typography className="info" gutterBottom color="error">
                Today
              </Typography>
            ) : (
              <Typography className="info" gutterBottom color="error">
                {data.day}
              </Typography>
            )}
            <img
              src={`https://openweathermap.org/img/w/${data.icon}.png`}
              alt={data.icon}
              className="weather__icon"
            />
            <Typography gutterBottom className="info">
              {data.lTemp}°C - {data.hTemp} °C
            </Typography>
            <Typography variant="h6" gutterBottom>
              {data.main},
            </Typography>
            <h4 style={{ fontWeight: "bold", paddingBottom: "10px" }}>
              {data.desc}
            </h4>
          </GridListTitle>
        ))}
      </Grid>
    </CardMedia>
  );
}

export default Weekly;
