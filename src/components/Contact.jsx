import React from "react";
import "./contact.css";
import img1 from "../images/newContact1.png";
import img2 from "../images/contact-border.jpeg";
import Input from "./Input";

const Contact = () => {
  return (
    <>
      <div>
        <div className="contact ">
          <div className="">
            <div className="row messageRow">
              <div className="col-md-5 ">
                <div className="messageSection">
                  <h3 className="messageHeading">Message</h3>
                  <p className="messageBody mt-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Necessitatibus, odit voluptates laudantium .
                  </p>
                </div>
              </div>
              <div className="col-md-7">
                <div className="imgOuterDiv">
                  <img className="imgDiv" src={img1} alt="" />
                </div>
              </div>
            </div>
            <div className="row maprow ">
              <div className="col-md-7">
                <div className="map">
                  <img src={img2} className="mapborderImg" alt="" />
                  <div className="iframe">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6123466463264!2d75.77905851540322!3d26.852279469152595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5bf191c6adb%3A0x4af3c3644b32dfc7!2sSodhani%20Biotech%20Private%20Limited!5e0!3m2!1sen!2sin!4v1639250092367!5m2!1sen!2sin"
                      width="100%"
                      className="iframe_inner"
                      height="450"
                      loading="lazy"
                      title="map"
                    ></iframe>
                  </div>

                  <div className="row contactLowerBody mt-4">
                    <div className="col-4 ">
                      <div className="cols">
                        <div className="location">
                          <i className="fa fa-map-marker fa-2x"></i>
                          <p>
                            277 , Mahaveer Nagar 2, <br />
                            Maharani Farm,Gayatri Nagar A,
                            <br /> Durgapura ,Jaipur , Rajasthan
                            <br /> INDIA
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 ">
                      <div className="cols">
                        <div className="email">
                          <i className="fa fa-envelope-o fa-2x"></i>
                          <p>info@naturaldyes.in</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 ">
                      <div className="cols1">
                        <div className="call">
                          <i className="fa fa-phone fa-2x"></i>
                          <p>+91-141-4112368</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 contact_form_container">
                <div className="contact-form">
                  <div className="">
                    <h3 className="contactHeader">Get in touch with us</h3>
                    <div className="form-body ">
                      <input type="text" placeholder="Name" className="input" />
                      <input
                        type="text"
                        placeholder="Email"
                        className="input"
                      />
                      <Input />
                      <input
                        type="text"
                        placeholder="Company"
                        className="input"
                      />
                      <select className="input select" placeholder="">
                        <option>Select Your Product Category</option>
                        <option>Product1</option>
                        <option>Product2</option>
                        <option>Product3</option>
                        <option>Product4</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Message"
                        className="input"
                      />
                      <div className="button">
                        <div
                          className="btn btn-warning"
                          style={{
                            marginTop: "80px",
                            padding: "15px",
                            paddingLeft: "50px",
                            paddingRight: "50px",
                            fontSize: "14px",
                            backgroundColor: "#f8831e",
                            color: "white",
                          }}
                        >
                          Get In Touch
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5"></div>
      </div>
    </>
  );
};

export default Contact;
