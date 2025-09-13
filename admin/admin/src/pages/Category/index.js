
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaPencilAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import {
  Button,
  Pagination,
  Breadcrumbs,
  Chip,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { styled } from '@mui/material/styles';
import { deleteData, editData, fetchDataFromApi } from '../../utils/api';

// Styled Breadcrumb component
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

const Category = () => {
  const [catData, setCatData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [open, setOpen] = useState(false);

  const [totalPages, setTotalPages] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState(1);

  const [formFields, setFormFields] = useState({
    name: '',
    images: [],
    color: '',
  });

  // ✅ Fetch categories with pagination
  const fetchCategories = (pageNum, perPageNum) => {
    fetchDataFromApi(`/api/categories?page=${pageNum}&perPage=${perPageNum}`)
      .then((res) => {
        if (res && res.data) {
          setCatData(res.data);
          setTotalPages(res.totalPages || 1);
          setPage(res.currentPage || 1);
        } else {
          setCatData([]);
          setTotalPages(1);
        }
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  };

  useEffect(() => {
    fetchCategories(page, perPage);
  }, [page,perPage]);

  // ✅ Pagination change
  const handleChange = (event, value) => {
    fetchCategories(value, perPage);
  };

  // ✅ Per page change
  const handlePerPageChange = (e) => {
    setPerPage(parseInt(e.target.value));
    setPage(1);
  };

  // ✅ Edit category
  const editCategory = (id) => {
    if (!id) return;

    setOpen(true);
    setEditId(id);

    fetchDataFromApi(`/api/categories/${id}`)
      .then((res) => {
        if (res && res.data) {
          setFormFields({
            name: res.data.name || '',
            images:
              Array.isArray(res.data.images) && res.data.images.length > 0
                ? res.data.images
                : ['https://via.placeholder.com/48'],
            color: res.data.color || '',
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching category:', error);
      });
  };

  // ✅ Update category
  const categoryEditFun = (e) => {
    e.preventDefault();

    editData(`/api/categories/${editId}`, formFields)
      .then((res) => {
        fetchCategories(page, perPage); // refresh after edit
        setOpen(false);
      })
      .catch((error) => {
        console.error('Error updating category:', error);
      });
  };

  // ✅ Delete category
  const deleteCat = (id) => {
    console.log("Deleting category id:", id);
    deleteData(`/api/categories/${id}`)
      .then(() => {
        // ✅ Frontend se turant remove
        setCatData((prev) => prev.filter((item) => item._id !== id));
      })
      .catch((error) => {
        console.error('Error deleting category:', error);
      });
  };


  // ✅ Input change
  const changeInput = (e) => {
    setFormFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const addImgUrl = (e) => {
    setFormFields((prev) => ({
      ...prev,
      images: [e.target.value],
    }));
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-95 flex-row p-4">
          <h5 className="mb-0">Category List</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
            <Link to="/">
              <StyledBreadcrumb
                component="a"
                href="#"
                label="Dashboard"
                icon={<HomeIcon fontSize="small" />}
              />
            </Link>

            <Link to="/categoryAdd">
              <StyledBreadcrumb
                component="a"
                href="#"
                label="Add Category"
              
              />
            </Link>
            
          </Breadcrumbs>
        </div>

        <div className="card shadow border-0 p-3 mt-4">
          <div className="row cardFilters mt-3 d-flex justify-content-between align-items-center">
            {/* Per page dropdown */}

          </div>

          <div className="table-responsive mt-3" style={{ overflowX: 'auto' }}>
            <table
              className="table table-bordered v-align"
              style={{
                minWidth: 900,
                borderCollapse: 'separate',
                borderSpacing: '0 8px',
                fontSize: '0.95rem',
              }}
            >
              <thead
                className="thead-dark"
                style={{
                  backgroundColor: '#a9b8cdff',
                  color: '#fff',
                  fontWeight: '600',
                }}
              >
                <tr>
                  <th>UID</th>
                  <th>CATEGORY</th>
                  <th>IMAGE</th>
                  <th>COLOR</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                {catData.map((item, index) => (
                  <tr key={item._id} style={{ backgroundColor: '#f9faff' }}>
                    <td>#{(page - 1) * perPage + (index + 1)}</td>
                    <td>{item.name || 'No Name'}</td>
                    <td>
                      <img
                        src={
                          item.images && item.images[0]
                            ? item.images[0]
                            : 'https://via.placeholder.com/48'
                        }
                        alt={item.name || 'Category'}
                        style={{
                          width: 48,
                          height: 48,
                          objectFit: 'cover',
                          borderRadius: 8,
                        }}
                      />
                    </td>
                    <td>{item.color || 'N/A'}</td>
                    <td>
                      <div className="actions d-flex" style={{ gap: 8 }}>
                        <Button color="secondary" style={{ minWidth: 40 }}>
                          <FaEye />
                        </Button>
                        <Button
                          color="success"
                          style={{ minWidth: 40 }}
                          onClick={() => editCategory(item._id)}
                        >
                          <FaPencilAlt />
                        </Button>
                        <Button
                          color="error"
                          style={{ minWidth: 40 }}
                          onClick={() => deleteCat(item._id)}
                        >
                          <MdDelete />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
           
          

            {/* ✅ Pagination */}
            <Pagination
              count={totalPages}
              page={page}
              variant="outlined"
              color="primary"
              showFirstButton
              showLastButton
              onChange={handleChange}
            />
          </div>
          <div className='mt-2 w-100'>

                      <select
                        value={perPage}
                        onChange={handlePerPageChange}
                        className="form-select w-auto"
                      >
                        <option value={3}>3 per page</option>
                        <option value={5}>5 per page</option>
                        <option value={10}>10 per page</option>
                        <option value={20}>20 per page</option>
                      </select>
          </div>
        </div>
      </div>

      {/* ✅ Edit Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit Category</DialogTitle>
        <form onSubmit={categoryEditFun}>
          <DialogContent>
            <TextField
              autoFocus
              required
              margin="dense"
              name="name"
              label="Category Name"
              fullWidth
              value={formFields.name || ''}
              onChange={changeInput}
            />
            <TextField
              required
              margin="dense"
              name="images"
              label="Category Image"
              fullWidth
              value={formFields.images[0] || ''}
              onChange={addImgUrl}
            />
            <TextField
              required
              margin="dense"
              name="color"
              label="Category Color"
              fullWidth
              value={formFields.color || ''}
              onChange={changeInput}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} variant="outlined">
              Cancel
            </Button>
            <Button type="submit" className="btn-blue">
              
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default Category;

