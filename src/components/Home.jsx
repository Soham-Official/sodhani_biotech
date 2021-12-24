import React from "react";
import "./home.css";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import circle from "../images/circle.png";
import health from "../images/health.png";
import nature from "../images/nature.png";
import tick from "../images/tick.png";
import recycle from "../images/recycle.png";
import imgNature from "../images/imgNature.png";
import imgConsume from "../images/imgConsume.png";
import imgBrand from "../images/imgBrand.png";
import imgFarm from "../images/imgFarm.png";
import lady from "../images/lady.png";
import earth from "../images/earth.png";

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
            <img className="imgGallery_img" src={img1} alt="" />
            <div className="subtext">
              <p>Natural Vegetable Dyes</p>
            </div>
            <div className="d-flex justify-content-center">
              <div className="border"></div>
            </div>
          </div>
          <div className="card1">
            <img className="imgGallery_img" src={img2} alt="" />
            <div className="subtext">
              <p>Natural Dye Extracts</p>
            </div>
            <div className="d-flex justify-content-center">
              <div className="border"></div>
            </div>
          </div>
          <div className="card1">
            <img className="imgGallery_img" src={img3} alt="" />
            <div className="subtext">
              <p>Liquid Dye Extracts</p>
            </div>
            <div className="d-flex justify-content-center">
              <div className="border"></div>
            </div>
          </div>
          <div className="card1">
            <img className="imgGallery_img" src={img4} alt="" />
            <div className="subtext">
              <p>Organic Cotton Fabric</p>
            </div>
            <div className="d-flex justify-content-center">
              <div className="border"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="motive">
        <div className="row">
          <div className="col-md-6  aboutLeft">
            <div className="rotate">
              <p className="aboutus">Industries we carter</p>
              <hr className="hrtag" />
            </div>
          </div>
          <div className="col-md-6 " style={{ paddingLeft: "40px" }}>
            <div className="motiveRightBox">
              Our motive is to provide you with the best suitable services in
              various industries without limiting ourselvers to any.
            </div>
          </div>
        </div>
      </div>
      <div className="homeImage">
        <img src={circle} className="circleImage" alt="" />
      </div>
      <div className="whatwedo">
        <div className="header">
          <p>
            Our{" "}
            <b>
              <i>natural</i>{" "}
            </b>{" "}
            product category
          </p>
        </div>
        <div className="tagline">
          <i>We Care About</i> <b>What We Do</b>
        </div>
        <div className="whatwedo_outside">
          <div className="whatwedoCols">
            <div className="whatwedo_cols">
              <div className="text-center">
                <img src={health} alt="" />
              </div>
              <div className="d-flex justify-content-center mt-3 mb-3">
                <div className="border2"></div>
              </div>
              <p className="text-center">
                <b>Health Benefits</b>
              </p>
              Natural Colours are Non- Toxic, Non-Allergic & Hazard Free for
              skin and are acceptable everywhere in today’s world since Medieval
              Times. With not just only use for dyeing, these colours have
              numerous Medicinal Properties which are beneficial for Healthy
              Life.
            </div>
            <div className="whatwedo_cols">
              <div className="text-center">
                <img src={nature} alt="" />
              </div>
              <div className="d-flex justify-content-center mt-3 mb-3">
                <div className="border2"></div>
              </div>
              <p className="text-center">
                <b>Environmental Impact</b>
              </p>
              They come from natural sources, natural dyes are not harmful to
              the environment, which makes it so appealing for consumers.
              Natural dyes are biodegradable and disposing them don’t cause
              pollution.
            </div>
            <div className="whatwedo_cols">
              <div className="text-center">
                <img src={tick} alt="" />
              </div>
              <div className="d-flex justify-content-center mt-3 mb-3">
                <div className="border2"></div>
              </div>
              <p className="text-center">
                <b>Renewbility</b>
              </p>
              Natural dyes are obtained from renewable sources that can be
              harnessed without imposing harm to the environment. They come from
              natural sources, natural dyes are not harmful to the environment,
              which makes it so appealing for consumers. Natural dyes are
              biodegradable and disposing them don’t cause pollution.
            </div>
            <div className="whatwedo_cols">
              <div className="text-center">
                <img src={recycle} alt="" />
              </div>
              <div className="d-flex justify-content-center mt-3 mb-3">
                <div className="border2"></div>
              </div>
              <p className="text-center">
                <b>Recycling</b>
              </p>
              Many of the natural dye which you see in our list comes from
              waste, which include products like onion peels, pomegranate peels,
              walnut shells, lac dye, marigold flowers, avocado seeds etc which
              is reducing burden from the environment eventually.
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="whatwedo">
        <div className="header">
          <p>Who will benefit</p>
        </div>
        <div className="tagline_vibrance">
          <i>Exploring vibrance of</i> <b>Natural Colours.</b>
        </div>
        <div className="whatwedo_outside">
          <div className="whatwedoCols">
            <div className="whatwedo_cols2">
              <div className="imgBox">
                <img src={imgNature} alt="" className="w-100" />
                <div className="imgText">Nature</div>
              </div>
              <div className="vibrance_subtext">
                Unlike synthetic/artificial dyes, natural dyes neither contain
                carcinogenic components nor harmful chemicals! By preferring
                natural dyes over these other choices, you are lowering human
                dependence on harmful products, thus helping preserve our
                environment. Like they say, there is no Plan-et B. Life.
              </div>
            </div>
            <div className="whatwedo_cols2">
              <div className="imgBox">
                <img src={imgConsume} alt="" className="w-100" />
                <div className="imgText">Consumers</div>
              </div>
              <div className="vibrance_subtext">
                Natural dye is a perfect alternative for responsible people who
                want the best without all the environmental defilement.. If
                you’re shopping around for dyes that are not harmful to the
                environment, you can begin your search with us. Our products are
                not only eco-friendly but also efficient in providing solutions
                for specific dyeing needs.
              </div>
            </div>
            <div className="whatwedo_cols2">
              <div className="imgBox">
                <img src={imgBrand} alt="" className="w-100" />
                <div className="imgText">Fashion Brands</div>
              </div>{" "}
              <div className="vibrance_subtext">
                Sustainability is not luxury but a necessity in today's business
                environment - A prominent reason why most fashion brands are
                switching to sustainable fashion and incorporating natural dyes.
              </div>
            </div>
            <div className="whatwedo_cols2">
              <div className="imgBox">
                <img src={imgFarm} alt="" className="w-100" />
                <div className="imgText">Local Farmers</div>
              </div>{" "}
              <div className="vibrance_subtext">
                Huge employment is generated by crop cultivation, collection of
                leaves, flowers, and fruits, including the cleaning of herbal
                materials! Fun Fact-Production of 1 kg bio indigo provides
                employment to two rural farmers. Additionally, being a legume
                crop, it also supports the environment.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="motive">
        <div className="row">
          <div className="col-md-6  aboutLeft">
            <div className="d-flex">
              <div className="rotate">
                <p className="aboutus">D.I.Y workshops</p>
                <hr className="hrtag" />
              </div>
              <div className="explore_content">
                <div className="header_explore">
                  <p>
                    Explore
                    <br />
                    <b>Natural dye studios.</b>
                  </p>
                </div>
                <div>
                  At DIY, our main objective is to revive the lost art of dyeing
                  with natural ingredients and to make it readily available for
                  everyone. And therein we aim to reduce the impact of pollution
                  caused by the chemical laden industry. To do so, we must take
                  a step back and acquaint ourselves with the lost art of
                  natural dyeing.
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 " style={{ paddingLeft: "40px" }}>
            <div style={{ textAlign: "center" }}>
              <img src={lady} alt="" className="imgLady" />
            </div>
          </div>
        </div>
      </div>
      <div className="btn btn-outline-warning viewButton ">
        View More{" "}
        <i
          className="fa fa-angle-right"
          style={{
            paddingLeft: "10px",
          }}
        ></i>
      </div>
      <div className="globe">
        <div className="header_globe">
          <p>Environmental footprints</p>
        </div>
        <div className="globe_contents">
          <div className="globeContent">
            <div className="globeContent_left">
              <div className="heading">
                <i>Dyeing to survive</i>
                <br /> <b> Colours that help the earth breath.</b>
              </div>
              <div className="globeContent_body">
                It is agreed all over the world that the textile industry is a
                significant contributor to pollution. Almost “2000” different
                types of chemicals used in the industry consume as well as
                contaminate freshwater. In legacy pollution sites, untreated
                wastewater from the chemical dye industry is being directly
                dumped into surface water. It is estimated that textile dyeing
                contributes to up to 20 percent of water pollution by swapping
                natural dyes with synthetic dyes, you are choosing a cleaner
                alternative while staying connected to nature!
              </div>
            </div>
            <i className="fa fa-angle-left leftArr"></i>
            <div className="globeContent_right">
              <img
                className="globeContent_right_image"
                src={earth}
                alt="globe"
              />
            </div>
            <i className="fa fa-angle-right rightArr"></i>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
