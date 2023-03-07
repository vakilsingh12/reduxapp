import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProduct, STATUSES } from "../store/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  // const [products, setProducts] = useState([]);
  const { data: products, status } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProduct());
    // const fetchProduct = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products?limit=5");
    //   const result = await res.json();
    //   setProducts(result);
    // };
    // fetchProduct();
  }, []);
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  if (status === STATUSES.LOADING) {
    return <h2>Loading...</h2>;
  }
  if (status === STATUSES.ERROR) {
    return <h2>Something Went Wrong</h2>;
  }
  return (
    <>
      <div className="productwrapper">
        <h1>Products</h1>
        {products.map((product, index) => {
          return (
            <div className="card" key={product.id}>
              <img
                src={product.image}
                alt="storeImages"
                srcSet={product.image}
              />
              <h4>{product.title}</h4>
              <h5>Price : {Math.round(product.price)}₹</h5>
              <button className="btn" onClick={() => handleAdd(product)}>
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
