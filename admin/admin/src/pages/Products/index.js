import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from "react";
import { FaEye, FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Stack from "@mui/material/Stack";   // ✅ Added Stack

import {
  fetchDataFromApi,
  editData,
  deleteData
} from '../../utils/api';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

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

const Product = () => {
  const [showBy, setShowBy] = useState('');
  const [catBy, setCatBy] = useState('');
  const [brandBy, setBrandBy] = useState('');
  const [searchBy, setSearchBy] = useState('');
  const [productList, setProductList] = useState([]);

  // pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  // edit state
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formFields, setFormFields] = useState({
    name: "",
    brand: "",
    price: "",
    oldprice: "",
    countInstock: 0,
    images: [],
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetchDataFromApi("/api/products").then((res) => {
      console.log("API Response:", res);
      setProductList(res || []);
    });
  };

  // ✅ Edit product open
  const editProduct = (id) => {
    setEditId(id);
    setOpen(true);
    fetchDataFromApi(`/api/products/${id}`).then((res) => {
      if (res) {
        setFormFields({
          name: res.name || "",
          brand: res.brand || "",
          price: res.price || "",
          oldprice: res.oldprice || "",
          countInstock: res.countInstock || 0,
          images:
            Array.isArray(res.images) && res.images.length > 0
              ? res.images
              : ["https://via.placeholder.com/48"],
        });
      }
    });
  };

  // ✅ Update product
  const productEditFun = (e) => {
    e.preventDefault();
    editData(`/api/products/${editId}`, formFields)
      .then(() => {
        fetchProducts(); // refresh after edit
        setOpen(false);
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  // ✅ Delete product
  const deleteProduct = (id) => {
    deleteData(`/api/products/${id}`)
      .then(() => {
        setProductList((prev) => prev.filter((item) => item._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  // ✅ input change
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

  // ✅ Filtering Logic
  const filteredProducts = productList.filter((item) => {
    const matchSearch =
      !searchBy ||
      item._id?.toString().includes(searchBy) ||
      item.name?.toLowerCase().includes(searchBy.toLowerCase());
    const matchCategory = !catBy || item.category?._id === catBy;
    const matchBrand = !brandBy || item.brand?.toLowerCase() === brandBy.toLowerCase();
    const matchShow = !showBy || item.countInstock >= parseInt(showBy, 10);

    return matchSearch && matchCategory && matchBrand && matchShow;
  });

  // ✅ Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div className="right-content w-100">
        {/* header */}
        <div className="card shadow border-0 w-95 flex-row p-4">
          <h5 className="mb-0">Product List</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
            <Link to="/">
              <StyledBreadcrumb
                component="a"
                href="#"
                label="Dashboard"
                icon={<HomeIcon fontSize="small" />}
              />
            </Link>
            <StyledBreadcrumb label="Products" deleteIcon={<ExpandMoreIcon />} />
          </Breadcrumbs>
        </div>

        <div className="card shadow border-0 p-3 mt-4">
          <h3 className="hd">Best Selling Products</h3>

          {/* ✅ Filters with Stack */}
          <Stack direction="row" spacing={8} mb={3}>
            <TextField
              label="Search by ID/Name"
              size="small"
              value={searchBy}
              onChange={(e) => setSearchBy(e.target.value)}
              style={{ minWidth: 200 }}
            />

            <FormControl size="small" style={{ minWidth: 200 }}>
              <Select value={catBy} onChange={(e) => setCatBy(e.target.value)} displayEmpty>
                <MenuItem value="">All Categories</MenuItem>
                <MenuItem value="cat1">Category 1</MenuItem>
                <MenuItem value="cat2">Category 2</MenuItem>
              </Select>
            </FormControl>

            <FormControl size="small" style={{ minWidth: 200 }}>
              <Select value={brandBy} onChange={(e) => setBrandBy(e.target.value)} displayEmpty>
                <MenuItem value="">All Brands</MenuItem>
                <MenuItem value="Nike">Nike</MenuItem>
                <MenuItem value="Adidas">Adidas</MenuItem>
              </Select>
            </FormControl>

            <FormControl size="small" style={{ minWidth: 200 }}>
              <Select value={showBy} onChange={(e) => setShowBy(e.target.value)} displayEmpty>
                <MenuItem value="">Show All</MenuItem>
                <MenuItem value="5">Stock ≥ 5</MenuItem>
                <MenuItem value="10">Stock ≥ 10</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          {/* Product Table */}
          <div className="table-responsive mt-3" style={{ overflowX: "auto" }}>
            <table className="table table-bordered v-align">
              <thead
                className="thead-dark"
                style={{
                  backgroundColor: "#a9b8cdff",
                  color: "#fff",
                  fontWeight: "600",
                }}
              >
                <tr>
                  <th>UID</th>
                  <th>PRODUCT</th>
                  <th>BRAND</th>
                  <th>PRICE</th>
                  <th>STOCK</th>
                  <th>RATING</th>
                  <th>ORDERS</th>
                  <th>SALES</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {currentProducts.map((item, index) => (
                  <tr key={item._id} style={{ backgroundColor: "#f9faff" }}>
                    <td>#{startIndex + index + 1}</td>
                    <td>
                      <div className="d-flex align-items-center" style={{ gap: 12 }}>
                        <img
                          src={item.images?.[0] || "https://via.placeholder.com/48"}
                          alt={item.name}
                          style={{
                            width: 48,
                            height: 48,
                            objectFit: "cover",
                            borderRadius: 8,
                          }}
                        />
                        {item.name}
                      </div>
                    </td>
                    <td>{item.brand}</td>
                    <td>
                      <del style={{ color: "#a3a3a3" }}>${item.oldprice}</del>{" "}
                      <span style={{ color: "#e53935", fontWeight: "700" }}>
                        ${item.price}
                      </span>
                    </td>
                    <td>{item.countInstock}</td>
                    <td>{item.rating}⭐</td>
                    <td>{item.orders}</td>
                    <td>{item.sales}</td>
                    <td>
                      <div style={{ display: "flex", gap: 8 }}>

                          <Button color="secondary" style={{ minWidth: 40 }}>
                        <Link to="Product/Details">
                            <FaEye />
                        </Link>
                          </Button>
                        <Button
                          color="success"
                          style={{ minWidth: 40 }}
                          onClick={() => editProduct(item._id)}
                        >
                          <FaPencilAlt />
                        </Button>
                        <Button
                          color="error"
                          style={{ minWidth: 40 }}
                          onClick={() => deleteProduct(item._id)}
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
            <div className="d-flex justify-content-between align-items-center mt-3">
              <p className="para">
                Show <b>{filteredProducts.length}</b> items
              </p>
              <Pagination
                count={totalPages}
                page={page}
                onChange={(e, value) => setPage(value)}
                color="primary"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Edit Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit Product</DialogTitle>
        <form onSubmit={productEditFun}>
          <DialogContent>
            <TextField
              autoFocus
              required
              margin="dense"
              name="name"
              label="Product Name"
              fullWidth
              value={formFields.name || ""}
              onChange={changeInput}
            />
            <TextField
              required
              margin="dense"
              name="brand"
              label="Brand"
              fullWidth
              value={formFields.brand || ""}
              onChange={changeInput}
            />
            <TextField
              required
              margin="dense"
              name="oldprice"
              label="Old Price"
              fullWidth
              type="number"
              value={formFields.oldprice || ""}
              onChange={changeInput}
            />
            <TextField
              required
              margin="dense"
              name="price"
              label="Price"
              fullWidth
              type="number"
              value={formFields.price || ""}
              onChange={changeInput}
            />
            <TextField
              margin="dense"
              name="countInstock"
              label="Stock"
              fullWidth
              type="number"
              value={formFields.countInstock || ""}
              onChange={changeInput}
            />
            <TextField
              margin="dense"
              name="images"
              label="Image URL"
              fullWidth
              value={formFields.images?.[0] || ""}
              onChange={addImgUrl}
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

export default Product;
