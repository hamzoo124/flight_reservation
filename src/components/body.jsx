import React, { useEffect, useState } from "react";


const Body = () => {
  const [get, setAPI] = useState([]);

  useEffect(() => {
    getapi();
  }, []);

  const getapi = async () => {
    await fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        res.json().then((result) => {
          console.log(result);
          setAPI(result);
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section className="">
        <div className="container-fluid bg-light" id="body">
          <div className="container">
            <p className="text-center" id="text">
              It's more than
            </p>
            <p className="text-center" id="text">
              just a trip
            </p>
          </div>

          <div className="row  m-auto my-5 " id="row1">
            <div className="col-sm-12 col-md-3 col-lg-3 col12 border ">
              <div className="row">
                <div className="col-2">
                  <i class="fa-solid fa-plane-departure mx-2 my-2 opacity-50"></i>
                </div>

                <div className="col-sm-10 col-md-10 col-lg-10">
                  <form className="from-control">
                    <select
                      name=""
                      id=""
                      style={{ appearance: "none" }}
                      className=" form-control my-2 w-100 opacity-50 border-0"
                    >
                      <option value="" selected>
                        {" "}
                        from where?
                      </option>
                      {get.map((i) => {
                        return (
                          <option value={i.name.common} key={i}>
                            {i.name.common}
                          </option>
                        );
                      })}
                    </select>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-3 col-lg-3 col12 border">
              <div className="row">
                <div className="col-sm-2 col-md-2 col-lg-2">
                  <i class="fa-solid fa-plane-arrival mx-2 my-2 opacity-50"></i>
                </div>

                <div className="col-sm-10 col-md-10 col-lg-10 ">
                  <form className="from-control">
                    <select
                      name=""
                      id=""
                      style={{ appearance: "none" }}
                      className=" form-control my-2 w-100 opacity-50 border-0"
                    >
                      <option value="" selected>
                        {" "}
                        where to?
                      </option>
                      {get.map((i) => {
                        return (
                          <option value={i.name.common} key={i}>
                            {i.name.common}
                          </option>
                        );
                      })}
                    </select>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 col12 border opacity-50">
              <input type="date" className="form-control border-0 my-2" />
           
              
            </div>

            <div className="col-sm-12 col-md-3 col-lg-3 col-12 border">
              <div className="row">
                <div className="col-md-2 col-sm-2 col-lg-2 col-2">
                  <i class="fa-solid fa-user my-3 mx-2 opacity-50 "></i>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col6">
                  <input
                    type="number"
                    className="form-control opacity-50 border-0"
                    placeholder="1 Adult"
                    style={{ height: "45px", lineheight: "45px", min: "0" }}
                  />
                </div>
                <div className="col-sm-2 col-md-2 col-lg-2 col-2">
                  <button
                    className="btn btn-primary my-1"
                    style={{ marginLeft: "15px" }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
         
      </section>
    </>
  );
};
export default Body;
