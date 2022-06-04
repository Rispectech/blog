import { Button, FormControl, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import React from "react";
import { useGlobalContext } from "../context";
import CustomDialog from "./Dialog";
import useStyles from "./styles";

const Hero = () => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState(false);

  const { addStory } = useGlobalContext();
  const formik = useFormik({
    initialValues: {
      urlToImage: "",
      title: "",
      description: "",
      author: "",
    },
  });

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleSubmit = () => {
    const newBlog = {
      ...formik.values,
      publishedAt: new Date(Date.now()),
    };
    addStory(newBlog);
    formik.resetForm();
    handleClose();
  };
  return (
    <section className={`section ${classes.heroSection}`}>
      <h2>You dont wanna miss the latest blogs right ?</h2>
      <h4>Find the latest blogs or create some of your own</h4>

      <div className={classes.btnGroup}>
        <Button variant="contained" color="primary" onClick={() => setOpenDialog(true)}>
          Create your Own
        </Button>
        <Button color="primary" className={classes.lowBtn}>
          <a href="#latest">Explore latest blogs</a>
        </Button>
      </div>

      <CustomDialog
        open={openDialog}
        handleClose={handleClose}
        dialogTitle="Create your own Blog"
        onSubmit={handleSubmit}
      >
        <FormControl fullWidth className={classes.childProfileImg}>
          <div className={classes.dialogFieldWrapper}>
            <TextField
              fullWidth
              required
              id="urlToImage"
              name="urlToImage"
              label="Blog Picture"
              value={formik.values.urlToImage}
              variant="outlined"
              onChange={formik.handleChange}
              // helperText={"Enter image url"}
            />
          </div>

          <div className={classes.dialogFieldWrapper}>
            <TextField
              fullWidth
              required
              id="title"
              name="title"
              label="Blog Title"
              value={formik.values.title}
              variant="outlined"
              onChange={formik.handleChange}
            />
          </div>

          <div className={classes.dialogFieldWrapper}>
            <TextField
              fullWidth
              required
              id="description"
              name="description"
              label="Blog description"
              value={formik.values.description}
              variant="outlined"
              onChange={formik.handleChange}
            />
          </div>

          <div className={classes.dialogFieldWrapper}>
            <TextField
              fullWidth
              required
              id="author"
              name="author"
              label="Blog author"
              value={formik.values.author}
              variant="outlined"
              onChange={formik.handleChange}
            />
          </div>
        </FormControl>
      </CustomDialog>
    </section>
  );
};

export default Hero;
