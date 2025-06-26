import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="main_div container-fluid">
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
