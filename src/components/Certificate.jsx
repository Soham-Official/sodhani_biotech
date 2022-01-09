import React from "react";
import "./certificate.css";
import img1 from "../images/newContact1.png";

const Certificate = () => {
  return (
    <div className="certificate">
      {/* <div className="row certificate_row">
        <div className="col-md-8 center">
          <div>
            <div className="left_col">
              <h3 className="certificate_heading">Certificates</h3>
              <p className="certificate_subtext">
                Lorem ipsum dolor sit amet,consectetur adipscing elit Nam
                pellentesque sagittis dapibus.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-md-4 center
        right"
        >
          <div className="right_col">dvdv</div>
        </div>
      </div> */}
      <div className="row messageRow">
        <div className="col-md-5 left_col ">
          <div className="messageSection">
            <h3 className="certificate_heading">Certificates</h3>
            <p className="certificate_subtext mt-4">
              Lorem ipsum dolor sit amet,consectetur adipscing elit Nam
              pellentesque sagittis dapibus.
            </p>
          </div>
        </div>
        <div className="col-md-7">
          <div className="imgOuterDiv">
            <img className="imgDiv" src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
