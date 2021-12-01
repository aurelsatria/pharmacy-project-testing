import React, { Component } from "react";
import "../css/edubin/slick.css";
import "../css/edubin/animate.css";
import "../css/edubin/nice-select.css";
import "../css/edubin/jquery.nice-number.min.css";
import "../css/edubin/magnific-popup.css";
import "../css/edubin/bootstrap.min.css";
import "../css/edubin/font-awesome.min.css";
import "../css/edubin/default.css";
import "../css/edubin/style.css";
import "../css/edubin/responsive.css";

import logo from "../img/edubin/logo.png";

export class Footer extends Component {
  render() {
    return (
      <footer id="footer-part" style={{ marginTop: "50px" }}>
        <div class="footer-top pt-40 pb-70">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="footer-about mt-40">
                  <div class="logo">
                    <a href="http://localhost:3000">
                      <img src={logo} alt="Logo" width={150} />
                    </a>
                  </div>
                  <p>
                    Be Well Pharmacy is an online Pharmacy that provides various
                    medical needs, we also accept doctor's prescriptions. Stay
                    Healthy and Happy Shopping !
                  </p>
                </div>
              </div>

              <div class="col-lg-6 col-md-6 text-end">
                <div class="footer-address mt-40">
                  <div class="footer-title pb-25">
                    <h6>Contact Us</h6>
                  </div>
                  <ul>
                    <li>
                      <div class="cont">
                        <p>
                          <i class="fa fa-home"></i>
                          {" Cipete Raya, Jakarta Selatan"}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="cont">
                        <p>
                          <i class="fa fa-phone"></i>
                          {" 021-7777777 "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="cont">
                        <p>
                          <i class="fa fa-envelope-o"></i>
                          {" pharma2.purwadhika@gmail.com"} 
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-copyright pt-10 pb-25">
          <div class="container">
            <div class="row">
              <div class="col-md-8">
                <div class="copyright text-md-left text-center pt-15"></div>
              </div>
              <div class="col-md-4">
                <div class="copyright text-md-right text-center pt-15"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;