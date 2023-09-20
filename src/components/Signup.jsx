import React from "react";
const Signup = () => {
  return (
    <div className="container-fluid  w-100 bg-light my-5">
      <h3>Sign up for Trimpa </h3>
      <p>
        Trimpa is totally free to use.sign up usig your email adddsress or phone
        number below to get start
      </p>
      <form className="form-control border-0" action="">
        <input
          type="text"
          className="form-control"
          name=""
          placeholder="Email or phone number"
        />
        <br />
        <input
          type="password"
          className="form-control"
          name=""
          placeholder="Password"
        />
        <br />
        <input type="checkbox" name="" />
        <span className="mx-3">
          i agree to{" "}
          <a href="" style={{ textDecoration: "none" }}>
            terms and condition
          </a>
        </span>
        <br />
        <input type="checkbox" name="" />
        <span className="mx-3">
          Send me the latest deal alerts{" "}
          <a href="" style={{ textDecoration: "none" }}>
            terms and condition
          </a>
        </span>
        <br />
        <br />
        <input type="button" className="btn btn-primary w-100 p-2" value="create account"/>
      <div style={{display:"flex"}}>
      <hr className="ms-auto" style={{width:"25%"}} /> 
           <span className="ms-auto" style={{marginLeft:"30%"}}>or</span>
        <hr className="ms-auto" style={{width:"25%",}} /> 
      </div>
      <div className="row border ms-auto " style={{width:"60%"}}>
        <div className="col-md-2 col-lg-2 col-sm-2 p-2"><i class="fa-brands fa-google" style={{color: "#502007f"}}></i></div>
        <div className="col-md-10 col-lg-10 col-sm-10 p-2"><a href="" style={{textDecoration:"none"}}>Continue with Google</a></div>
      </div>
      <br />
      <div className="row border ms-auto" style={{width:"60%"}}>
        <div className="col-md-2 col-lg-2 col-sm-2 p-2"><i class="fa-brands fa-facebook" style={{color: "1f2751"}}></i></div>
        <div className="col-md-10 col-lg-10 col-sm-10 opacity-50 p-2"><a href="" style={{textDecoration:"none"}}>Continue with Facebook</a></div>
      </div>
      </form>
    </div>
  );
};
export default Signup;
