import { Link, useNavigate } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import { postData } from '../../utils/api';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
      cursor: 'pointer',
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: theme.palette.grey[400],
    },
  };
});

const CategoryAdd = () => {
  const [formFields, setFormFields] = useState({
    name: '',
    images: [],
    color: ''
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'info'
  });

  const changeInput = (e) => {
    setFormFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const addImgUrl = (e) => {
    setFormFields((prev) => ({
      ...prev,
      images: [e.target.value]
    }));
  };

  const history = useNavigate();

  const addCategory = async (e) => {
    e.preventDefault();

    // ✅ validation check
    if (
      !formFields.name.trim() ||
      !formFields.color.trim() ||
      formFields.images.length === 0 ||
      !formFields.images[0].trim()
    ) {
      setSnackbar({
        open: true,
        message: "⚠️ Please fill the data in all fields",
        severity: "warning"
      });
      return;
    }

    try {
      const category = {
        name: formFields.name,
        color: formFields.color,
        images: formFields.images
      };

      const res = await postData(category);
      history('/Category');
      console.log("Category created:", res);
      setSnackbar({
        open: true,
        message: "✅ Category added successfully!",
        severity: "success"
      });
    } catch (err) {
      console.error("Error adding category:", err);
      setSnackbar({
        open: true,
        message: "❌ Failed to add category",
        severity: "error"
      });
    }
  };

  const handleClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      <div className="right-content w-105">
        <div className="card shadow border-0 flex-row p-4">
          <h5 className="mb-0">Add Category</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
            <Link to="/">
              <StyledBreadcrumb
                component="a"
                href="#"
                label="Dashboard"
                icon={<HomeIcon fontSize="small" />}
              />
            </Link>
            <StyledBreadcrumb label="Category" deleteIcon={<ExpandMoreIcon />} />
          </Breadcrumbs>
        </div>

        <form className="form" onSubmit={addCategory}>
          <div className="left-column">
            <div className="card">
              <h3>Basic Information</h3>

              <label className="lab">Category Name</label>
              <input type="text" name="name" onChange={changeInput} />

              <label className="lab">Image Url</label>
              <textarea name="images" onChange={addImgUrl}></textarea>

              <label className="lab">Color</label>
              <textarea name="color" onChange={changeInput}></textarea>

              <div className="image-buttons mt-3">
                <button type="submit" className="btn publish-btn">
                  Publish
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Snackbar for messages */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <MuiAlert
          onClose={handleClose}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
          elevation={6}
          variant="filled"
        >
          {snackbar.message}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default CategoryAdd;
