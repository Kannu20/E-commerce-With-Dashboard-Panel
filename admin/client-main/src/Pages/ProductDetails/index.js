import { useState } from "react";
import Rating from "@mui/material/Rating";
import RelatedProducts from "./RelatedProducts/Index";
import { Button } from "react-bootstrap";

const ProductDetails = () => {
  const [activeSize, setActiveSize] = useState(null);
  const [activeTab, setActiveTab] = useState("description");

  const isActive = (index) => {
    setActiveSize(index);
  };

  return (
    <section className="ProductDetails py-5 px-3" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="product-container d-flex shadow-lg rounded p-4 bg-white flex-wrap">

        {/* Left: Product Image */}
        <div className="me-4 mb-4">
          <img
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-768x691.jpg"
            alt="Product"
            className="product-image rounded"
            style={{ maxWidth: "350px", border: "1px solid #eee" }}
          />
        </div>

        {/* Right: Product Info */}
        <div className="content-right flex-grow-1">
          <h2 className="product-title mb-3 text-dark fw-bold">
            Field Roast Chao Cheese Creamy Original
          </h2>

          <div className="brand-info mb-3 d-flex align-items-center">
            <span className="label fw-bold me-2">Brand:</span>
            <span className="value text-secondary me-3">Welch's</span>
            <Rating name="read-only" value={4} readOnly />
          </div>

          <div className="d-flex align-items-center mb-2">
            <del className="text-muted me-2">RS.2345</del>
            <span className="text-danger h5 mb-0 fw-bold">RS.2145</span>
          </div>

          <span className="badge bg-success mb-3 px-3 py-2 fs-6">IN STOCK</span>

          <p className="text-secondary">
            Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt.
            Class aptent taciti sociosqu ad litora torquent.
            <br />
            Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt.
          </p>


          <div className="d-flex align-items-center gap-3 mt-3">
            <button className="rounded-pill btn btn-outline-secondary shadow-sm">❤️ Add to Wishlist</button>
            <button className="rounded-pill btn btn-outline-secondary shadow-sm">🔁 Compare</button>
            <Button className="btn btn-primary ms-3 px-4 rounded-pill">Buy Now</Button>
          </div>

          <div className="product-checklist mt-5">
            <ul className="list-unstyled text-muted">
              <li>Type: Organic</li>
              <li>MFG: Jun 4, 2021</li>
              <li>LIFE: 45 days</li>
            </ul>
          </div>

          <div className="product_meta product-meta mt-4 border-top pt-3 text-secondary">
            <span className="posted_in">
              Category:{" "}
              <a href="https://klbtheme.com/bacola/product-category/grocery-staples/" rel="tag">
                Grocery & Staples
              </a>
            </span>
          </div>

          <div className="icon-messages mt-4">
            <ul className="list-unstyled text-muted">
              <li className="d-flex align-items-center mb-2">
                <span className="me-2">🚚</span>
                Free Shipping on all orders over ₹100
              </li>
              <li className="d-flex align-items-center mb-2">
                <span className="me-2">🥛</span>
                Guaranteed 100% Organic from natural farms
              </li>
              <li className="d-flex align-items-center">
                <span className="me-2">💸</span>
                1 Day Returns if you change your mind
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ▼ Tab Section Starts Here */}
      <div className="tabs-section mt-5 p-4 bg-white rounded shadow-sm">
        <div className="tab-buttons d-flex border-bottom mb-4">
          <button
            className={`me-4 pb-2 fw-bold ${activeTab === "description" ? "border-bottom border-dark" : "text-muted"}`}
            style={{ background: "none", border: "none", cursor: "pointer" }}
            onClick={() => setActiveTab("description")}
          >
            DESCRIPTION
          </button>
          <button
            className={`pb-2 fw-bold ${activeTab === "reviews" ? "border-bottom border-dark" : "text-muted"}`}
            style={{ background: "none", border: "none", cursor: "pointer" }}
            onClick={() => setActiveTab("reviews")}
          >
            REVIEWS (1)
          </button>
        </div>

        {activeTab === "description" && (
          <div className="tab-content text-secondary">
            <p>
              lorem Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla.
              Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.
            </p>
            <p>
              Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque.
              Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies cursus ipsum.
              Sed consequat luctus ligula.
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="tab-content">
            <div className="review-item mb-4">
              <div className="d-flex align-items-center mb-2">
                <div
                  className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center me-3"
                  style={{ width: "50px", height: "50px" }}
                >
                  A
                </div>
                <div>
                  <strong>Kanishak</strong> – May 1, 2021
                  <div><Rating name="read-only" value={5} readOnly /></div>
                </div>
              </div>
              <p className="text-muted">
                Good User Experience.
              </p>
            </div>

            {/* Add Review Form */}
            <div className="add-review mt-4">
              <h5 className="mb-3">Add a review</h5>
              <form>
                <div className="mb-3">
                  <label>Your rating *</label>
                  <Rating name="simple-controlled" />
                </div>
                <div className="mb-3">
                  <label>Your review *</label>
                  <textarea className="form-control" rows="4"></textarea>
                </div>
                <div className="mb-3">
                  <label>Name *</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="mb-3">
                  <label>Email *</label>
                  <input className="form-control" type="email" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        )}
      </div>

      <br />

      <RelatedProducts />
    </section>
  );
};

export default ProductDetails;
