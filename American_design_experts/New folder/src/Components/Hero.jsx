import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="main_div container-fluid"
        style={{ position: "relative" }}
      >
        <svg
          className="hero-svg-blob-bg"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#7a7a7a"
            d="M49.2,-56.3C64.6,-45.7,78.6,-31,81.9,-14.2C85.1,2.6,77.7,21.6,66.7,36.6C55.8,51.6,41.3,62.7,25.3,67.9C9.3,73,-8.4,72.2,-25.2,67C-42,61.8,-57.9,52.2,-66.5,38.1C-75,23.9,-76,5.2,-73.3,-13.4C-70.5,-31.9,-64,-50.2,-51.1,-61.3C-38.3,-72.4,-19.2,-76.4,-1.1,-75C16.9,-73.7,33.7,-67,49.2,-56.3Z"
            transform="translate(100 100)"
          />
        </svg>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 heading_div">
              <h1 className="main_heading">
                Crafting Stunning Websites That Elevate Your Brand
              </h1>
              <p className="main_sub_heading">
                Innovative designs, seamless user experiences, and custom
                solutions tailored to grow your business online.
              </p>
              <div className="btns_div">
                <div className="btn btn_1">Get Quote</div>
                <div className="btn btn_2"> View Packages </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 div_form_main">
              <div className="form_div">
                <div className="text_form_div text-center">
                  <h1 className="form_heading">Get 75% Off Now</h1>
                  <p className="form_subheading">Limited Time Offer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
