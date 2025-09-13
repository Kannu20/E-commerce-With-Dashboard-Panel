// import { Link } from "react-router-dom";
// import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Chip from "@mui/material/Chip";
// import HomeIcon from "@mui/icons-material/Home";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { styled } from "@mui/material/styles";
// import { useRef, useState, useEffect } from "react";
// import { fetchDataFromApi, postProduct } from "../../utils/api";  // ✅ API helper
// const StyledBreadcrumb = styled(Chip)(({ theme }) => {
//   const backgroundColor =
//     theme.palette.mode === "light"
//       ? theme.palette.grey[100]
//       : theme.palette.grey[800];
//   return {
//     backgroundColor,
//     height: theme.spacing(3),
//     color: theme.palette.text.primary,
//     fontWeight: theme.typography.fontWeightRegular,
//     "&:hover, &:focus": {
//       backgroundColor: theme.palette.grey[300],
//       cursor: "pointer",
//     },
//     "&:active": {
//       boxShadow: theme.shadows[1],
//       backgroundColor: theme.palette.grey[400],
//     },
//   };
// });

// const ProductUpload = () => {
//   const fileInputRef = useRef(null);
//   const [preview, setPreview] = useState(null);

//   // ✅ Category state
//   const [catData, setCatData] = useState([]);

//   // ✅ Image states
//   const [imageUrl, setImageUrl] = useState("");
//   const [images, setImages] = useState([]);

//   // ✅ Form fields
//   const [formFields, setFormFields] = useState({
//     name: "",
//     description: "",
//     image: [],
//     brand: "",
//     price: 0,
//     oldprice: 0,
//     category: "",
//     countInstock: 0,
//     isFeatured: false,
//   });

//   // ✅ Fetch categories on mount
//   useEffect(() => {
//     fetchDataFromApi("/api/categories")
//       .then((res) => {
//         if (res && res.data) {
//           setCatData(res.data);
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching categories:", err);
//       });
//   }, []);

//   // File explorer open
//   const handleUploadClick = () => {
//     fileInputRef.current.click();
//   };

//   // ✅ File select hone ke baad preview aur formFields update
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setPreview(imageUrl);

//       const updatedImages = [...images, imageUrl];
//       setImages(updatedImages);

//       // ✅ formFields.image me bhi update karo
//       setFormFields((prev) => ({
//         ...prev,
//         image: updatedImages,
//       }));
//     }
//   };

//   // ✅ Handle Image URL Add
//   const handleAddImage = () => {
//     if (imageUrl.trim() === "") return;
//     const updatedImages = [...images, imageUrl];
//     setImages(updatedImages);

//     // ✅ formFields.image me bhi update karo
//     setFormFields((prev) => ({
//       ...prev,
//       image: updatedImages,
//     }));

//     setImageUrl("");
//   };

//   // ✅ Input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormFields((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const addProduct = (e) => {
//     e.preventDefault();
//     console.log("Submitting product:", formFields);

//     postProduct(formFields)   // ✅ सिर्फ formFields भेज
//       .then((res) => {
//         console.log("✅ Product Created:", res);
//         alert("Product created successfully!");
//       })
//       .catch((err) => {
//         console.error("❌ Error creating product:", err);
//         alert("Failed to create product");
//       });
//   };

//   return (
//     <>
//       <div className="right-content w-105">
//         <div className="card shadow border-0 flex-row p-4">
//           <h5 className="mb-0">Product List</h5>
//           <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
//             <Link to="/">
//               <StyledBreadcrumb
//                 component="a"
//                 href="#"
//                 label="Dashboard"
//                 icon={<HomeIcon fontSize="small" />}
//               />
//             </Link>
//             <StyledBreadcrumb
//               label="Products"
//               deleteIcon={<ExpandMoreIcon />}
//             />
//           </Breadcrumbs>
//         </div>

//         {/* Left Column - Basic Information */}
//         <form className="form" onSubmit={addProduct}>
//           <div className="left-column">
//             <div className="card">
//               <h3>Basic Information</h3>

//               {/* Name */}
//               <label className="lab">NAME</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formFields.name}
//                 onChange={handleChange}
//                 placeholder="Enter product name"
//               />

//               {/* BRAND */}
//               <label className="lab">BRAND</label>
//               <input
//                 type="text"
//                 name="brand"
//                 value={formFields.brand}
//                 onChange={handleChange}
//                 placeholder="Enter brand name"
//               />

//               {/* Description */}
//               <label className="lab">DESCRIPTION</label>
//               <textarea
//                 name="description"
//                 value={formFields.description}
//                 onChange={handleChange}
//                 placeholder="Enter product description"
//               />

//               {/* ✅ Category Dropdown */}
//               <label className="lab">CATEGORY</label>
//               <select
//                 name="category"
//                 value={formFields.category}
//                 onChange={handleChange}
//               >
//                 <option value="">-- Select Category --</option>
//                 {catData.map((cat) => (
//                   <option key={cat._id} value={cat._id}>
//                     {cat.name}
//                   </option>
//                 ))}
//               </select>

//               {/* isFeatured */}
//               <label className="lab">FEATURED PRODUCT</label>
//               <select
//                 name="isFeatured"
//                 value={formFields.isFeatured}
//                 onChange={(e) =>
//                   setFormFields((prev) => ({
//                     ...prev,
//                     isFeatured: e.target.value === "true", // ✅ boolean convert
//                   }))
//                 }
//               >
//                 <option value="true">Yes</option>
//                 <option value="false">No</option>
//               </select>


//               {/* Count In Stock */}
//               <label className="lab">PRODUCT IN STOCK</label>
//               <input
//                 type="number"
//                 name="countInstock"
//                 value={formFields.countInstock}
//                 onChange={handleChange}
//                 placeholder="Enter available stock"
//               />

//               {/* Price */}
//               <label className="lab">OLD PRICE</label>
//               <input
//                 type="number"
//                 name="oldprice"
//                 value={formFields.oldprice}
//                 onChange={handleChange}
//                 placeholder="Enter product price"
//               />

//               <label className="lab">NEW PRICE</label>
//               <input
//                 type="number"
//                 name="price"
//                 value={formFields.price}
//                 onChange={handleChange}
//                 placeholder="Enter product price"
//               />

//               {/* ✅ Image URL Input */}
//               <label className="lab">IMAGE URL</label>
//               <div className="flex gap-2 mb-3">
//                 <input
//                   type="text"
//                   value={imageUrl}
//                   onChange={(e) => setImageUrl(e.target.value)}
//                   placeholder="Enter Image URL"
//                   className="border p-2 flex-1"
//                 />
//                 <button
//                   type="button"
//                   onClick={handleAddImage}
//                   className="bg-blue-500 text-white px-3 py-1 rounded"
//                 >
//                   Add
//                 </button>
//               </div>
//               <button type="submit" className="btn publish-btn mt-3">
//                 Publish
//               </button>
//             </div>
//           </div>
//         </form>

//         {/* Media and Published */}
//         <div className="card">
//           <h3>Media And Published</h3>
//           <div className="media-grid">
//             {images.map((url, index) => (
//               <div className="media-item" key={index}>
//                 <img src={url} alt={`url-${index}`} />
//               </div>
//             ))}

//             {/* ✅ Upload Box */}
//             <div className="media-item upload" onClick={handleUploadClick}>
//               {preview ? (
//                 <img src={preview} alt="Uploaded Preview" />
//               ) : (
//                 <span>Image Upload</span>
//               )}
//             </div>

//             {/* ✅ Hidden file input */}
//             <input
//               type="file"
//               ref={fileInputRef}
//               style={{ display: "none" }}
//               onChange={handleFileChange}
//               accept="image/*"
//             />
//           </div>

//           <div className="image-buttons">
//             <button type="submit" className="btn publish-btn mt-3">
//               Publish
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductUpload;


import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { useRef, useState, useEffect } from "react";
import { fetchDataFromApi, postProduct } from "../../utils/api";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.grey[300],
      cursor: "pointer",
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: theme.palette.grey[400],
    },
  };
});

const ProductUpload = () => {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  // ✅ Category state
  const [catData, setCatData] = useState([]);

  // ✅ Image states
  const [imageUrl, setImageUrl] = useState("");
  const [images, setImages] = useState([]);

  // ✅ Form fields (headings ke hisaab se)
  const [formFields, setFormFields] = useState({
    name: "",
    description: "",
    brand: "",
    price: 0,
    oldprice: 0,
    category: "",
    countInstock: 0,
    rating: 0,
    orders: 0,
    sales: 0,
    images: [], // ✅ plural use karo
    isFeatured: false,
  });

  // ✅ Fetch categories on mount
  useEffect(() => {
    fetchDataFromApi("/api/categories")
      .then((res) => {
        if (res && res.data) {
          setCatData(res.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, []);

  // File explorer open
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // ✅ File select hone ke baad preview aur formFields update
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);

      const updatedImages = [...images, imageUrl];
      setImages(updatedImages);

      // ✅ formFields.images update
      setFormFields((prev) => ({
        ...prev,
        images: updatedImages,
      }));
    }
  };

  // ✅ Handle Image URL Add
  const handleAddImage = () => {
    if (imageUrl.trim() === "") return;
    const updatedImages = [...images, imageUrl];
    setImages(updatedImages);

    setFormFields((prev) => ({
      ...prev,
      images: updatedImages,
    }));

    setImageUrl("");
  };

  // ✅ Input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addProduct = (e) => {
    e.preventDefault();
    console.log("Submitting product:", formFields);

    postProduct(formFields) // ✅ send full product
      .then((res) => {
        console.log("✅ Product Created:", res);
        alert("Product created successfully!");
      })
      .catch((err) => {
        console.error("❌ Error creating product:", err);
        alert("Failed to create product");
      });
  };

  return (
    <>
      <div className="right-content w-105">
        <div className="card shadow border-0 flex-row p-4">
          <h5 className="mb-0">Upload Product</h5>
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

        {/* Form Start */}
        <form className="form" onSubmit={addProduct}>
          <div className="card">
            <h3>Product Information</h3>

            {/* Name */}
            <label className="lab">NAME</label>
            <input
              type="text"
              name="name"
              value={formFields.name}
              onChange={handleChange}
              placeholder="Enter product name"
            />

            {/* Brand */}
            <label className="lab">BRAND</label>
            <input
              type="text"
              name="brand"
              value={formFields.brand}
              onChange={handleChange}
              placeholder="Enter brand name"
            />

            {/* Description */}
            <label className="lab">DESCRIPTION</label>
            <textarea
              name="description"
              value={formFields.description}
              onChange={handleChange}
              placeholder="Enter product description"
            />

            {/* Category */}
            <label className="lab">CATEGORY</label>
            <select
              name="category"
              value={formFields.category}
              onChange={handleChange}
            >
              <option value="">-- Select Category --</option>
              {catData.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>

            {/* Stock */}
            <label className="lab">PRODUCT IN STOCK</label>
            <input
              type="number"
              name="countInstock"
              value={formFields.countInstock}
              onChange={handleChange}
              placeholder="Enter available stock"
            />

            {/* Prices */}
            <label className="lab">OLD PRICE</label>
            <input
              type="number"
              name="oldprice"
              value={formFields.oldprice}
              onChange={handleChange}
              placeholder="Enter old price"
            />

            <label className="lab">NEW PRICE</label>
            <input
              type="number"
              name="price"
              value={formFields.price}
              onChange={handleChange}
              placeholder="Enter new price"
            />

            {/* Rating */}
            <label className="lab">RATING</label>
            <input
              type="number"
              name="rating"
              value={formFields.rating}
              onChange={handleChange}
              placeholder="Enter rating (1-5)"
              min="0"
              max="5"
            />

            {/* Orders */}
            <label className="lab">ORDERS</label>
            <input
              type="number"
              name="orders"
              value={formFields.orders}
              onChange={handleChange}
              placeholder="Enter order count"
            />

            {/* Sales */}
            <label className="lab">SALES</label>
            <input
              type="number"
              name="sales"
              value={formFields.sales}
              onChange={handleChange}
              placeholder="Enter total sales"
            />

            {/* Featured */}
            <label className="lab">FEATURED PRODUCT</label>
            <select
              name="isFeatured"
              value={formFields.isFeatured}
              onChange={(e) =>
                setFormFields((prev) => ({
                  ...prev,
                  isFeatured: e.target.value === "true",
                }))
              }
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>

            {/* Image URL */}
            <label className="lab">IMAGE URL</label>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Enter Image URL"
                className="border p-2 flex-1"
              />
              <button
                type="button"
                onClick={handleAddImage}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Add
              </button>
            </div>

            {/* Submit */}
            <button type="submit" className="btn publish-btn mt-3">
              Publish
            </button>
          </div>
        </form>

        {/* Media and Preview */}
        <div className="card">
          <h3>Media And Preview</h3>
          <div className="media-grid">
            {images.map((url, index) => (
              <div className="media-item" key={index}>
                <img src={url} alt={`url-${index}`} />
              </div>
            ))}

            {/* Upload Box */}
            <div className="media-item upload" onClick={handleUploadClick}>
              {preview ? (
                <img src={preview} alt="Uploaded Preview" />
              ) : (
                <span>Image Upload</span>
              )}
            </div>

            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductUpload;
