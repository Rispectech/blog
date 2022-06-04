import { Grid, List, ListItemIcon } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  const classes = useStyles();
  return (
    <section className={classes.footer}>
      <Grid container className={classes.footerSection} spacing={3}>
        <Grid item className={classes.footerText} sm={3}>
          <h4>Roblogs</h4>
          <p> Your Ideal Website when looking for blogs</p>
        </Grid>

        <Grid item className={classes.footerTextDark} sm={3}>
          <h4>Made by</h4>
          <p> Rishabh Verma </p>
        </Grid>

        <Grid item className={classes.footerTextDark} sm={3}>
          <h4>Contacts </h4>
          <a href="mailto:rishabhverma132001@gmail.com"> rishabhverma132001@gmail.com </a>
        </Grid>

        <Grid item sm={3}>
          <div>
            <List>
              <ListItemIcon>
                <a
                  href="https://www.facebook.com/profile.php?id=100064087578416"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#3B5998" }}
                >
                  <div className={classes.socialMediaIcon}>
                    <FaFacebookF />
                  </div>
                </a>
              </ListItemIcon>
              <ListItemIcon>
                <a
                  href="https://github.com/Rispectech"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#000" }}
                >
                  <div className={classes.socialMediaIcon}>
                    <FaGithub />
                  </div>
                </a>
              </ListItemIcon>
              <ListItemIcon>
                <a
                  href="https://www.linkedin.com/in/rishabh-verma-7a98a5200/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#2867B2" }}
                >
                  <div className={classes.socialMediaIcon}>
                    <FaLinkedinIn />
                  </div>
                </a>
              </ListItemIcon>
            </List>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Footer;
