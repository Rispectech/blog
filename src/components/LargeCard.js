import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useFormik } from "formik";
import CustomDialog from "./Dialog";
import { Button, FormControl, TextField } from "@material-ui/core";
import { useGlobalContext } from "../context";

const LargeCard = ({ blog, editable }) => {
  const { removeStory, addStory } = useGlobalContext();
  const [isEditing, setIsEditing] = useState(false);
  const classes = useStyles();
  const currentCalenderDate = new Date(blog.publishedAt);

  const handleClose = () => {
    setIsEditing(false);
  };

  const formik = useFormik({
    initialValues: blog,
  });

  const handleEditing = () => {
    // console.log(formik.values);
    removeStory(blog.publishedAt);
    addStory(formik.values);
    formik.resetForm(formik.initialValues);
    // console.log(formik.values);
    handleClose();
  };
  return (
    <div>
      <Grid container spacing={10} className={classes.width}>
        <Grid item sm={7}>
          <img src={blog.urlToImage} alt="" className={classes.blogImage} />
        </Grid>
        <Grid item sm={5}>
          <div className={classes.blogText}>
            <div>
              <h4>
                {`${currentCalenderDate
                  .toLocaleString("default", { month: "long" })
                  .slice(
                    0,
                    3
                  )} ${currentCalenderDate.getDate()} , ${currentCalenderDate.getFullYear()}`}
              </h4>

              {editable && (
                <div>
                  <FaEdit color="green" onClick={() => setIsEditing(true)} />
                  <AiFillDelete color="red" onClick={() => removeStory(blog.publishedAt)} />
                </div>
              )}
            </div>

            <a href={blog.url}>
              <h3>{blog.title}</h3>
            </a>

            <p>{blog.description}</p>

            <h4>{blog.author}</h4>
          </div>
        </Grid>
      </Grid>

      <CustomDialog
        open={isEditing}
        handleClose={handleClose}
        dialogTitle="Editing your blog"
        onSubmit={handleEditing}
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
    </div>
  );
};

export default LargeCard;
