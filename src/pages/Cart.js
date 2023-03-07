import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (product) => {
    dispatch(remove(product));
  };
  if (products.length === 0) {
    return <h2>Cart Empty!</h2>;
  }
  return (
    <div>
      <div className="cartWrapper">
        {products.length &&
          products.map((res) => (
            <div className="cartWrap" key={res.id}>
              <h3>Cart</h3>
              <img src={res.image} alt="" />
              <h5>{res.title}</h5>
              <h5>{res.price}</h5>
              <button className="btn" onClick={() => handleRemove(res.id)}>
                Remove from cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cart;
