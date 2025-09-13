// import Dialog from "@mui/material/Dialog";
// import Rating from "@mui/material/Rating";
// import { Button } from "react-bootstrap";
// import { IoMdClose } from "react-icons/io";
// import { CiHeart } from "react-icons/ci";
// import { MdCompareArrows } from "react-icons/md";

// import QuantityBox from "../QantityBox";
// import { Link } from "react-router-dom";

// const ProductModel = (props) => {
   
//     return (
//         <Dialog
//             open={true}
//             className="productModel"
//             onClose={() => props.closeProductModel()}
//             maxWidth="md"
//             fullWidth
//         >
//             <div className="position-relative p-4">
//                 {/* Close Button */}
//                 <Button
//                     className="position-absolute top-0 end-0 m-3 bg-primary text-white border-0"
//                     onClick={() => props.closeProductModel()}
//                 >
//                     <IoMdClose size={20} />
//                 </Button>

//                 <div className="row">
//                     {/* Left: Product Image */}
//                     <div className="col-md-5 d-flex justify-content-center align-items-center">
//                         <div className="position-relative">
//                             <img
//                                 src="https://cmsimages.shoppersstop.com/Adidasweb_3bc7f319cf/Adidasweb_3bc7f319cf.png"
//                                 alt="Product"
//                                 className="img-fluid rounded shadow-sm"
//                                 style={{ maxHeight: "300px", objectFit: "contain" }}
//                             />
//                             <span className="badge bg-info position-absolute top-0 start-0 m-2">23%</span>
//                         </div>
//                     </div>

//                     {/* Right: Product Info */}
//                     <div className="col-md-7">
//                         <h4 className="font-weight-bold mb-2">ADIDAS SHOES</h4>
//                         <div className="d-flex flex-wrap align-items-center mb-2">
//                             <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" />
//                             <span className="ms-2 text-muted">1 REVIEW</span>
//                         </div>

//                         <hr />

//                         <div className="d-flex align-items-center mb-2">
//                             <del className="text-muted me-2">RS.2345</del>
//                             <span className="text-danger h5 mb-0">RS.2145</span>
//                         </div>

//                         <span className="badge bg-success mb-3">IN STOCK</span>

//                         <p className="text-muted">
//                             Best Quality Comfortable Shoes .
//                             Which Is Durable And Long Lasting With Comfortable Soul. .
//                         </p>

//                         <div className="d-flex align-items-center mb-3">
//                             <QuantityBox />
//                             <Button className="btn btn-primary ms-4 px-4 rounded-pill">Add to cart</Button>
//                             <Button className="btn btn-primary ms-3 px-4 rounded-pill">Buy Now</Button>
//                         </div>

//                         <div className="d-flex align-items-center gap-3 mt-3">
//                             <Button variant="outline-secondary" className="rounded-pill">
//                                 <CiHeart className="me-1" />
//                                 Add to Wishlist
//                             </Button>
//                             <Button variant="outline-secondary" className="rounded-pill">
//                                 <MdCompareArrows className="me-1" />
//                                 Compare
//                             </Button>
//                         </div>

//                         <ul className="mt-4 list-unstyled text-muted small">
//                             <li>✅ Comfortable</li>
//                             <li>✅ Durable</li>
//                             <li>✅ Easy To Clean</li>
//                             <li>📂 Category: Shoes</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </Dialog>
//     );
// };

// export default ProductModel;

import Dialog from "@mui/material/Dialog";
import Rating from "@mui/material/Rating";
import { Button } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";

import QuantityBox from "../QantityBox";

const ProductModel = ({ product, closeProductModel }) => {
  if (!product) return null;  // Prevent rendering if no product passed

  return (
    <Dialog
      open={true}
      className="productModel"
      onClose={closeProductModel}
      maxWidth="md"
      fullWidth
    >
      <div className="position-relative p-4">
        {/* Close Button */}
        <Button
          className="position-absolute top-0 end-0 m-3 bg-primary text-white border-0"
          onClick={closeProductModel}
        >
          <IoMdClose size={20} />
        </Button>

        <div className="row">
          {/* Left: Product Image */}
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <div className="position-relative">
              <img
                src={product.images?.[0] || "https://via.placeholder.com/300"}
                alt={product.name}
                className="img-fluid rounded shadow-sm"
                style={{ maxHeight: "300px", objectFit: "contain" }}
              />
              {product.oldprice && product.price && (
                <span className="badge bg-info position-absolute top-0 start-0 m-2">
                  {Math.round(100 - (product.price / product.oldprice) * 100)}%
                </span>
              )}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="col-md-7">
            <h4 className="font-weight-bold mb-2">{product.name}</h4>
            <div className="d-flex flex-wrap align-items-center mb-2">
              <Rating
                name="read-only"
                value={product.rating || 0}
                precision={0.5}
                readOnly
                size="small"
              />
              <span className="ms-2 text-muted">1 REVIEW</span>
            </div>

            <hr />

            <div className="d-flex align-items-center mb-2">
              {product.oldprice && (
                <del className="text-muted me-2">RS.{product.oldprice}</del>
              )}
              <span className="text-danger h5 mb-0">RS.{product.price}</span>
            </div>

            <span className="badge bg-success mb-3">
              {product.countInstock > 0 ? "IN STOCK" : "OUT OF STOCK"}
            </span>

            <p className="text-muted">{product.description}</p>

            <div className="d-flex align-items-center mb-3">
              <QuantityBox />
              <Button className="btn btn-primary ms-4 px-4 rounded-pill">
                Add to cart
              </Button>
              <Button className="btn btn-primary ms-3 px-4 rounded-pill">
                Buy Now
              </Button>
            </div>

            <div className="d-flex align-items-center gap-3 mt-3">
              <Button variant="outline-secondary" className="rounded-pill">
                <CiHeart className="me-1" />
                Add to Wishlist
              </Button>
              <Button variant="outline-secondary" className="rounded-pill">
                <MdCompareArrows className="me-1" />
                Compare
              </Button>
            </div>

            <ul className="mt-4 list-unstyled text-muted small">
              {/* You can customize category dynamically if available */}
              <li>✅ Comfortable</li>
              <li>✅ Durable</li>
              <li>✅ Easy To Clean</li>
              <li>📂 Category: {product.category?.name || "N/A"}</li>
            </ul>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductModel;

