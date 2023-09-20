import React from "react";
const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row  m-auto">
        <div className="col-sm-12 col-lg-2 col-md-2 col-12  text-center " id="tripma"> Tripma</div>
        <div className="col-sm-6 col-md-2 col-lg-2 col-12 my-2">
          <span style={{marginLeft:"30px"}}>About</span>
          <ul className="opacity-50">
            <li>About Trimpa</li>
            <li>How it works</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
            <li>Forum</li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-2 col-lg-2 col-12 my-2">
        <span   style={{marginLeft:"30px"}}>Partner with us</span>
          <ul className="opacity-50">
            <li>Partnership program</li>
            <li>How it works</li>
            <li>Connectivity partner</li>
            <li>Promotion and events</li>
            <li>Cummunity</li>
            <li>LOvalty Program</li>
          </ul>
        </div>
        
        <div className="col-sm-6 col-md-2 col-lg-2 col-12 my-2">
        <span  style={{marginLeft:"30px"}}>Support</span>
          <ul className="opacity-50">
            <li>Help Center</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
            <li>Terms services</li>
            <li>Trust and safty</li>
            <li>Accessibility</li>
          </ul>
        </div>
          <div className="col-sm-6 col-md-2 col-lg-2 col-12 my-2">
        <span   style={{marginLeft:"30px"}}>Support</span>
          <ul className="opacity-50">
            <li>Help Center</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
            <li>Terms services</li>
            <li>Trust and safty</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>
      <div className="container-fluid bg-light p-2" style={{display:"flex"}}>
        <ul id="awsom" className="opacity-50">
          <li>
            <i class="fa-brands fa-twitter">
          </i>
          </li>
          <li><i class="fa-brands fa-instagram"></i></li>
          <li><i class="fa-brands fa-facebook"></i></li>

        </ul>
        <p className="opacity-50 text-end">2023 Trimpa incorporated</p>

      </div>
    </div>
  );
};
export default Footer;
