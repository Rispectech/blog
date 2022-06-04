import { Button } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const Hero = () => {
  const classes = useStyles();
  return (
    <section className={`section ${classes.heroSection}`}>
      <h2>You dont wanna miss the latest blogs right ?</h2>
      <h4>Find the latest blogs or create some of your own</h4>

      <div className={classes.btnGroup}>
        <Button variant="contained" color="primary">
          Create your Own
        </Button>
        <Button color="primary" className={classes.lowBtn}>
          Explore latest blogs
        </Button>
      </div>
    </section>
  );
};

export default Hero;
