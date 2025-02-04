import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import data from "./data.json";
import './Product.css'



const Product = ({ handleClick }) => {
 
  return (
    <>
      
      <div className="container">
        <div className="row">
          {data.map((item) => {
            return (
              <>
                <div className="col-md-3">
                  <div
                    className="card  mt-5 d-flex justify-content-center "
                    style={{ width: "230px", height: "430px" }}
                  >
                    <img
                      src={item.main_image}
                      className="card-img-top p-3 img-fluid"
                      alt="..."
                      style={{
                        width: "220px",
                        height: "250px",
                        objectFit: "contain",
                      }}
                    />
                    <div className="card-body ">
                      <h5 className="card-title d-flex justify-content-center">
                        {item.mobile_name}
                      </h5>
                      <p className="card-text d-flex justify-content-center">
                        ₹ {item.price}
                      </p>
                      <p className="card-text d-flex justify-content-center">
                        Varient -{item.specifications.ram} |{" "}
                        {item.specifications.storage}
                      </p>

                      <a
                        onClick={() => handleClick(item)}
                        className="btn btn-success d-flex justify-content-center"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
