import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useFormik } from "formik";
import CustomDialog from "./Dialog";
import { Button, FormControl, TextField } from "@material-ui/core";

const LargeCard = ({ blog, editable }) => {
  const [isEditing, setIsEditing] = useState(false);
  const classes = useStyles();
  const currentCalenderDate = new Date(blog.publishedAt);

  const handleClose = () => {
    setIsEditing(false);
  };

  const formik = useFormik({
    initialValues: blog,
  });
  return (
    <div>
      <Grid container spacing={10}>
        <Grid item sm={7}>
          <img src={blog.urlToImage} alt="" className={classes.blogImage} />
        </Grid>
        <Grid item sm={5}>
          <a href={blog.url} className={classes.blogText}>
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
                  <FaEdit color="green" />
                  <AiFillDelete color="red" />
                </div>
              )}
            </div>

            <h3>{blog.title}</h3>

            <p>{blog.description}</p>

            <h4>{blog.author}</h4>
          </a>
        </Grid>
      </Grid>

      <CustomDialog open={isEditing} handleClose={handleClose} dialogTitle="Editing your blog">
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
