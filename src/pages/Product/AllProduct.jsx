import React from "react";
import "./AllProduct.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function AllProduct() {
  const [allProduct, setAllProduct] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setAllProduct(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="all-product">
        <div className="filter-container">
          <h1 className="filter-heading">Filters</h1>
        </div>
        <div className="product-container">
          <h4 className="all-product-heading">Showing All Products</h4>
          <div className="all-product-view">
            {allProduct?.map(
              ({ _id, productImg, subtitle, originalPrice, rating }) => (
                <div className="products-view" key={_id}>
                  <div className="product-img">
                    <NavLink to={`/product/${_id}`}>
                      <img src={productImg} alt="products" />
                    </NavLink>
                    <NavLink to="/signin" className="wishlist">
                      <i class="fa-regular fa-heart"></i>
                    </NavLink>
                  </div>
                  <div>
                    <p className="product-title">{subtitle}</p>
                    <div className="product-detail">
                      <p>₹{originalPrice}</p>
                      <p className="product-rating">
                        {rating}
                        <i class="fa-solid fa-star"></i>
                      </p>
                    </div>
                  </div>
                  <div className="product-card-btn">
                    <button>Add to Cart</button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default AllProduct;
