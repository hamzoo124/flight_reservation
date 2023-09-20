import React from "react";
const Card = () => {
  return (
    <>
      <section>
        <h2 className="mb-5 mx-3">
          Find Your next adventure with these{" "}
          <a href="" style={{ textDecoration: "none" }}>
            Flight deal
          </a>
        </h2>

        <div className="container-fluid ">
          <div className="row" id="cardrow">
            <div className="col-sm-6 col-md-4 col-lg-4 col-12">
              <div class="card m-auto" id="card1">
                <img src="../images/img1.png" class="" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    The Bund, <a href="">Shanghai</a>
                    <span style={{ marginLeft: "50%" }}  class="spn">$598</span>
                    <p>china's most international city</p>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 col-12 ">
              <div class="card m-auto" id="card2">
                <img src="../images/img5.png" class="img-fluid" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Sydney Opera House, <a href="">Sydney</a>
                    <span style={{ marginLeft: "30%" }} class="spn">$981</span>
                    <p> Take a stroll along the famous harbor</p>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 col-12">
              <div class="card m-auto" id="card3">
                <img src="../images/im6.png" className="img-fluid" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Kodaji temple, <a href="">Kyoto</a>
                    <span style={{ marginLeft: "50%" }}  class="spn">$633</span>
                    <p> step back in time in the Gion distric</p>
                  </p>
                </div>
              </div>
            </div>

          </div>
          {/* second row */}
          <br />
          <br />

          <div className="row">
            <div className="col-12">
              <div class="card mb-5" id="kania">
                <img src="../images/kania.png" class="img-fluid" alt="..." />
                <div class="card-body">
                  <p class="card-title">
                    Tsavo East National Park, <a href="">Kenya</a>
                    <span style={{ marginLeft: "30%" }}  class="spn">$633</span>
                  </p>
                  <p>
                    Tsavo East National Park is one of the oldest parks in
                    Kenya. It is located in the semi-arid Taru Desert.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Card;
