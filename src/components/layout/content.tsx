import React from "react";
import { Grid, Paper, makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(() => {
  return createStyles({
    paper: {
      margin: "10px 0",
      padding: "30px",
    },
  });
});

const Content = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item sm={6}>
        <Paper className={classes.paper}>left</Paper>
      </Grid>
      <Grid item sm={6}>
        <Paper className={classes.paper}>right</Paper>
      </Grid>
    </Grid>
  );
};

export { Content };
