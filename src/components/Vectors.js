import React from "react";
import useStyles from "./styles";

const LeftVector = () => {
  const classes = useStyles();
  return (
    <div className={classes.leftVector}>
      <img
        src="https://uploads-ssl.webflow.com/5f180e58c1906f15359f4591/5f57b491d1d5c2751cb41177_Vector%20(18).svg"
        alt=""
      />
    </div>
  );
};

const RightVector = () => {
  const classes = useStyles();
  return (
    <div className={classes.rightVector}>
      <img
        src="https://uploads-ssl.webflow.com/5f180e58c1906f15359f4591/5f58cd18e0360297ae9ef016_Vector%20(20).svg"
        alt=""
      />
    </div>
  );
};
export { LeftVector, RightVector };
