

import React, { useState } from "react";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {

  
  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  return (
    <>
      <center>
        <h1>Shopping Cart</h1>
      </center>
      {cart.length === 0 ? (
        <center>
          <h2>Your Cart is Empty</h2>
        </center>
      ) : (
        cart.map((item) => (
          <div className="container mt-4" key={item.id}>
            <div className="row">
              <div className="col-md-1">
                {item.sub_images?.map((img, index) => (
                  <div className={`box${index + 1} box mt-3`} key={index}>
                    <img
                      src={img}
                      alt="Sub Image"
                      width="100%"
                      height="100%"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ))}
              </div>

              <div className="col-md-5">
                <div className="img_con">
                  <img
                    id="imgid"
                    src={item.main_image}
                    alt={item.mobile_name}
                    width="100%"
                    height="100%"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <h1 className="fw-bold">{item.mobile_name}</h1>
                <p className="text-muted">
                  ({item.specifications?.ram} RAM,{" "}
                  {item.specifications?.storage})
                </p>
                <h2 className="text-success">
                  <small className="text-muted">₹ {item.price}</small>
                </h2>
                <p>
                  <strong>Color:</strong> {item.color}
                </p>

                <div className="mt-3">
                  <div className="quantity">
                    <i
                      className="bi bi-plus-square fs-4 mx-3"
                      onClick={() => increaseQuantity(item.id)}
                    />
                    {item.quantity}
                    <i
                      className="bi bi-dash-square fs-4 mx-3"
                      onClick={() => decreaseQuantity(item.id)}
                    />
                  </div>

                  <button
                    className="btn btn-success mt-4  btn-lg mx-2"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target={`#offcanvas${item.id}`}
                    aria-controls={`offcanvas${item.id}`}
                  >
                    Buy Now
                  </button>

                  <button
                    className="btn btn-danger btn-lg mt-4 mx-2"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>

                <div className="mt-4">
                  <p>
                    <strong>Delivery:</strong>
                  </p>
                </div>
                <ul className="mt-4">
                  <h5>Highlights</h5>
                  <li>
                    {item.specifications?.ram} RAM |{" "}
                    {item.specifications?.storage} ROM
                  </li>
                  <li>{item.specifications?.camera}</li>
                  <li>{item.specifications?.battery}</li>
                  <li>{item.specifications?.processor}</li>
                  <li>Warranty: {item.warranty}</li>
                </ul>
              </div>
            </div>

            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id={`offcanvas${item.id}`}
              aria-labelledby={`offcanvas${item.id}Label`}
            >
              <button
                type="button"
                className="btn-close btn-lg text-reset offset-10 mt-3"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                style={{ width: "60px", height: "60px" }}
              ></button>
              <div className="offcanvas-header">
                <div>
                  <h5 id={`offcanvas${item.id}Label`}>Checkout Summary</h5>
                  <br />
                  <h6>Selected Product:</h6>
                  <img
                    src={item.main_image}
                    alt={item.mobile_name}
                    height="150px"
                    width="150px"
                    style={{ objectFit: "contain", marginBottom: "10px" }}
                  />
                </div>
              </div>
              <div className="offcanvas-body">
                <h5>Quantity : {item.quantity}</h5>
                <h5>Price :  { item.price}</h5>
                <h5>Sub Total : ₹ {item.price * item.quantity}</h5>
                <p>Proceed to checkout to complete your purchase.</p>

                <div className="text-center mt-4">
                  <h3>
                    Total Price:{" "}
                    <span className="text-success">₹ {calculateTotal()}</span>
                  </h3>
                </div>
                <br />
                <center>
                  <button type="button" className="btn btn-outline-success btn-lg" >
                    Place Order
                  </button>
                </center>
              </div>
            </div>
          </div>
    
        ))
      )}
    </>
  );
};

export default Cart;
