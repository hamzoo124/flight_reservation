import React from "react";
const User = () => {
  return (
    <div className="container-fuid">
      <h2 className="text-center text-secondary">
        What{" "}
        <a href="" style={{ textDecoration: "none" }}>
          Tripma
        </a>{" "}
        users are saying
      </h2>
      <div className="row m-auto my-5" style={{ width: "90%" }}>
        <div className="col-md-4 col-lg-4 col-sm-12 col-12 ">
          <div className="row">
            <div className="col-2 ">
              <img
                src="../images/avatar1.png"
                alt="Avatar"
                class="avatar"
              ></img>
            </div>
            <div className="col-10">
              <h6>
                Yifei Chen
                <br />
                Seoul, South Korea | April 2019
              </h6>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Vel perferendis dolor non harum, dolorem fugiat nesciunt 
                 doloribus voluptates commodi alias? Voluptas voluptatum impedit, 
                 exercitationem alias asperiores in quibusdam enim cupiditate?
                 </p>
            </div>
          </div>
          <span id="rateMe1"></span>
          <script src="js/addons/rating.js"></script>
        </div>
      {/* div2 */}
      <div className="col-md-4 col-lg-4 col-sm-12 col-12">
          <div className="row">
            <div className="col-2 ">
              <img
                src="../images/avatar2.png"
                alt="Avatar"
                class="avatar"
              ></img>
            </div>
            <div className="col-10 ">
              <h6>
                Yifei Chen
                <br />
                Seoul, South Korea | April 2019
              </h6>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Vel perferendis dolor non harum, dolorem fugiat nesciunt 
                 doloribus voluptates commodi alias? Voluptas voluptatum impedit, 
                 exercitationem alias asperiores in quibusdam enim cupiditate?
                 </p>
            </div>
          </div>
          <span id="rateMe1"></span>
          <script src="js/addons/rating.js"></script>
        </div>
         {/* div3 */}
         <div className="col-md-4 col-lg-4 col-sm-12 col-12 ">
          <div className="row">
            <div className="col-2 ">
              <img
                src="../images/avatar3.png"
                alt="Avatar"
                class="avatar"
              ></img>
            </div>
            <div className="col-10 ">
              <h6>
                Yifei Chen
                <br />
                Seoul, South Korea | April 2019
              </h6>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Vel perferendis dolor non harum, dolorem fugiat nesciunt 
                 doloribus voluptates commodi alias? Voluptas voluptatum impedit, 
                 exercitationem alias asperiores in quibusdam enim cupiditate?
                 </p>
            </div>
          </div>
          <span id="rateMe1"></span>
          <script src="js/addons/rating.js"></script>
        </div>
      </div>
    </div>
  );
};

export default User;
