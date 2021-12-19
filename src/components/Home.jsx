import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="welcomeSlide">
        <div>
          <h3 className="welcomeText">Welcome</h3>
          <p className="welcomeTextSub">Explore the world of Natural Dyes</p>
          <i className="fa fa-angle-down fa-2x downArrow"></i>
        </div>
      </div>
      <div className="weExplore">
        <div>
          <p>We explore</p>
          <p style={{ fontWeight: "bold" }}>
            <i>the Natural ways</i>
          </p>
          <p>of life</p>
        </div>
      </div>
      <div className="row about">
        <div className="col-md-6  aboutLeft">
          <div className="rotate">
            <p className="aboutus">About Us</p>
            <hr className="hrtag" />
          </div>
        </div>
        <div className="col-md-6 " style={{ paddingLeft: "40px" }}>
          <div className="aboutRightBox">
            We at Sodhani Biotech Pvt. Ltd. are passionate about exploring the
            Natural way of Life; We stand for an idea of being eco-fabulous:
            With environment as an inspiration and nature as our guide, a way of
            life which is the most in harmony with our natural ecosystem. We are
            a team of a youthful and enterprising mix of heads and hearts, and
            our mission is to promote the oneness of our life with environment.
            We are producing the products which are in harmony with nature and
            at the same time, are in sync with the current fashion and industry
            trends.
            <div className="learnmore">
              <p className="learnmoreText">Learn more</p>
              <hr className="learnmoreHr" />
            </div>
          </div>
        </div>
      </div>
      <div className="productCategory">
        <div className="header">
          <p>
            Our{" "}
            <b>
              <i>natural</i>{" "}
            </b>{" "}
            product category
          </p>
        </div>
        <div className="imageGallery ">
          <div className="card1">
            <img
              className="imgGallery_img"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt=""
            />
            <div className="subtext">
              <p>Natural Vegetable Dyes</p>
            </div>
            <div className="d-flex justify-content-center">
              <div className="border"></div>
            </div>
          </div>
          <div className="card1">
            <img
              className="imgGallery_img"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt=""
            />
            <div className="subtext">
              <p>Natural Dye Extracts</p>
            </div>
            <div className="d-flex justify-content-center">
              <div className="border"></div>
            </div>
          </div>
          <div className="card1">
            <img
              className="imgGallery_img"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt=""
            />
            <div className="subtext">
              <p>Liquid Dye Extracts</p>
            </div>
            <div className="d-flex justify-content-center">
              <div className="border"></div>
            </div>
          </div>
          <div className="card1">
            <img
              className="imgGallery_img"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt=""
            />
            <div className="subtext">
              <p>Organic Cotton Fabric</p>
            </div>
            <div className="d-flex justify-content-center">
              <div className="border"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;