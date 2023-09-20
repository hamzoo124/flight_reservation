import React from "react";
const Places=()=>{
    return(
        <>
        <div className="container-fluid">
            <h3 className="mx-3">Explore unique <a href="" className="text-success" style={{textDecoration:'none'}}>places to stayAll</a></h3>
            <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-4 col-12">
              <div class="card m-auto" id="card1">
                <img src="../images/img4.png" class="" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                  Stay among the atolls in <a href="">Maldives</a>
                    <span style={{ marginLeft: "20%" }}  class="spn">$598</span>
                    <p>From the 2nd century AD, the islands were known as the 'Money Isles'
                         due to the abundance of cowry shells.</p>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 col-12 ">
              <div class="card m-auto" id="card2">
                <img src="../images/img2.png" class="img-fluid" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                  Experience the Ourika Valley in  <a href="">Morocco</a>
                    <span style={{ marginLeft: "14%" }}  class="spn">$981</span>
                    <p>Morocco’s Hispano-Moorish architecture blends influences from Berber culture.</p>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 col-12">
              <div class="card m-auto" id="card3">
                <img src="../images/img3.png" className="img-fluid" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                  Live traditionally in  <a href="">Mongolia</a>
                    <span style={{ marginLeft: "30%" }}  class="spn">$633</span>
                    <p> Traditional Mongolian yurts consists of an angled latticework of wood or bamboo for walls, 
                        ribs.</p>
                  </p>
                </div>
              </div>
            </div>

            </div>

        </div>
               <div className="text-center">
               <input type="button" className="btn btn-primary my-5" value="Explor mor stays"/>
               </div>
         
        </>

    )
}
export default Places;