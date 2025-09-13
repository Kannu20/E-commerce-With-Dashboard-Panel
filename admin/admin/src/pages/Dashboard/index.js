import { HiDotsVertical } from "react-icons/hi";
import React from "react";
import DashboardBox from "./components/dashboardBox";
import { FaCircleUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Chart } from "react-google-charts";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import Button from '@mui/material/Button';
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import Stack from "@mui/material/Stack";


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

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const chartOptions = {
  isStacked: true,
  height: 200,
  legend: { position: "top", maxLines: 3, textStyle: { color: "#fff" } },
  vAxis: { minValue: 0, textStyle: { color: "#fff" } },
  hAxis: { textStyle: { color: "#fff" } },
  backgroundColor: "transparent",
};

const Dashboard = () => {
  const options = ["Last Day", "Last Week", "Last Month", "Last Year"];
  const ITEM_HEIGHT = 48;

  // pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showBy, setShowBy] = useState('');
  const [catBy, setCatBy] = useState('');
  const [productList, setProductList] = useState([]);

  const [brandBy, setBrandBy] = useState('');
  const [searchBy, setSearchBy] = useState('');


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


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>

      <div className="right-content w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-9">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox color={["#1da256", "#48d483"]} icon={<FaCircleUser />} grow={true} />
              <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<IoCartOutline />} />
              <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<IoBagHandleOutline />} />
              <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<BsStars />} grow={true} />
            </div>
          </div>

          <div className="col-md-3 pl-0">
            <div className="box graphBox" style={{ background: "#2c78e5", padding: "15px", borderRadius: "10px" }}>
              <div className="d-flex align-item-center">
                <h4 className="text-white mb-0">Total Sales</h4>
                <span
                  className="ml-auto toggleIcon"
                  onClick={handleClick}
                  style={{ cursor: "pointer" }}
                >
                  <HiDotsVertical />
                </span>
              </div>

              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem key={option} onClick={handleClose}>
                    {option}
                  </MenuItem>
                ))}
              </Menu>

              <h3 className="text-white font-weight-bold mt-3">$3,234,567.00</h3>
              <p className="text-white">$3,243,30 in Last Month</p>

              {/* Chart Section */}
              <Chart
                chartType="ColumnChart"
                width="100%"
                height="200px"
                data={data}
                options={chartOptions}
              />
            </div>
          </div>
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
              style={{ minWidth: 200 , textAlign: "center"}}

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

export default Dashboard;
