import React from "react";
import "./Home.css"


const Home = () => {
  const cimg = require.context('./home_images/carousel', false, /\.(jpg|jpeg|png)$/)
  const cimg_arr = cimg.keys().map(cimg)
 
   const img = require.context(
     "./home_images/simple_img",
     false,
     /\.(jpg|jpeg|png)$/
   );
  const img_arr = img.keys().map(img);

    const img1 = require.context(
      "./home_images/imgs",
      false,
      /\.(jpg|jpeg|png)$/
    );
    const img_arr1 = img1.keys().map(img1);
  


 
  
  return (
    <>
      {/* <img src={cimg_arr[0]} alt="" height='100px' width='100%' /> */}
      <div className="container-fluid  mt-4">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src={cimg_arr[0]}
                className="d-block w-100"
                alt="..."
                height="250px"
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src={cimg_arr[1]}
                className="d-block w-100"
                alt="..."
                height="250px"
              />
            </div>
            <div className="carousel-item">
              <img
                src={cimg_arr[2]}
                className="d-block w-100"
                alt="..."
                height="250px"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img src={img_arr1[0]} alt="" height="100px" width="100%" />
            </div>
            <div className="col-md-6">
              <img
                src={img_arr1[1]}
                alt=""
                height="200px"
                width="100%"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="col-md-6">
              <img
                src={img_arr1[2]}
                alt=""
                height="200px"
                width="100%"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="col-md-6">
              <img
                src={img_arr1[3]}
                alt=""
                height="200px"
                width="100%"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="col-md-6">
              <img
                src={img_arr1[4]}
                alt=""
                height="200px"
                width="100%"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        <div className="container mt-3">
          <div className="row">
            <center><h1>Winter Specials</h1></center>
            <div className="col-md-3 imgcon">
              <img src={img_arr[0]} alt="" height="100px" />
            </div>
            <div className="col-md-3 imgcon">
              <img src={img_arr[5]} alt="" height="100px" />
            </div>
            <div className="col-md-3 imgcon">
              <img src={img_arr[2]} alt="" height="100px" />
            </div>
            <div className="col-md-3 imgcon">
              <img src={img_arr[3]} alt="" height="100px" className="imgin" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 imgcon">
              <img src={img_arr[6]} alt="" height="100px" />
            </div>
            <div className="col-md-3 imgcon">
              <img src={img_arr[7]} alt="" height="100px" />
            </div>
            <div className="col-md-3 imgcon">
              <img src={img_arr[8]} alt="" height="100px" />
            </div>
            <div className="col-md-3 imgcon">
              <img src={img_arr[5]} alt="" height="100px" className="imgin" />
            </div>
          </div>
        </div>

        <hr className="featurette-divider" />
      </div>
    </>
  );
};

export default Home;
