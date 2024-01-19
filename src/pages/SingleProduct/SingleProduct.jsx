import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";

function SingleProduct() {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(`/api/products/${productId}`);
      const data = await response.json();
      setSingleProduct(data.product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="single-product-details">
      <div className="product-image-view">
        <img
          className="product-image"
          src={singleProduct?.productImg}
          alt="product"
        />
      </div>
      <div className="product-details">
        <h2 className="product-heading">{singleProduct?.subtitle}</h2>
        <p className="product-description">{singleProduct?.description}</p>
        <div className="product-detail-view">
          <span className="product-price">₹{singleProduct?.originalPrice}</span>
          <span className="product-rating">
            {singleProduct?.rating}
            <i class="fa-solid fa-star"></i>
          </span>
        </div>
        <div className="product-cart-btn">
          <button className="primary-btn">Add to Cart</button>
          <button className="secondary-btn">Go to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
