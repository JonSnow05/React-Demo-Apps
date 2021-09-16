import React, { useEffect, useState } from "react";
import SignUpSuccess from "./SignUpSuccess";
import validation from "./validation";

const SignUpForm = () => {
  const [values, setValues] = useState({
    namef: "",
    username: "",
    password: "",
    passwordconf: "",
    email: "",
    phoneNo: "",
    address: "",
  });

  const [error, setError] = useState({});
  const [isSubmitting, setisSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validation(values));
    const errors = Object.values(validation(values)).toString();
    if (errors === "") {
      setisSubmitting(true);
    }
  };

  /*  useEffect( () => {
        if(Object.keys(error).length === 0 ){
            console.log(Object.keys(error).length);
            console.log('use effect:'+isSubmitting);
            
        }
    },[error]) */
  return (
    <>
      {isSubmitting ? (
        <SignUpSuccess />
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="signup-title">Fill Your Details Below To Sign Up</h2>
          <div className="container">
            <div className="row">
              <div className="form-group col-sm-6">
                <label htmlFor="namef">Full Name</label>
                <input
                  id="namef"
                  type="text"
                  className="form-control"
                  placeholder=" Enter name"
                  name="namef"
                  onChange={handleChange}
                />
                {error.namef && <span className="error">{error.namef}</span>}
              </div>

              <div className="form-group col-sm-6">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                />
                {error.username && (
                  <span className="error">{error.username}</span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="form-group col-sm-6">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  onChange={handleChange}
                />
                {error.password && (
                  <span className="error">{error.password}</span>
                )}
              </div>

              <div className="form-group col-sm-6">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Re-enter password"
                  name="passwordconf"
                  onChange={handleChange}
                />
                {error.passwordconf && (
                  <span className="error">{error.passwordconf}</span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="form-group col-sm-6">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Email"
                  name="email"
                  onChange={handleChange}
                />
                {error.email && <span className="error">{error.email}</span>}
              </div>

              <div className="form-group col-sm-6">
                <label>Phone No.</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Phone No."
                  name="phoneNo"
                  onChange={handleChange}
                />
                {error.phoneNo && (
                  <span className="error">{error.phoneNo}</span>
                )}
              </div>
            </div>
            <div className="form-group">
              <label>Address</label>
              <textarea
                type="textarea"
                className="form-control"
                placeholder="Enter Full Address"
                name="address"
                onChange={handleChange}
              />
              {error.address && <span className="error">{error.address}</span>}
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block signupbtn"
            >
              Sign Up
            </button>
            <p className="forgot-password text-right">
              Already registered <a href=" ">sign in?</a>
            </p>
          </div>
        </form>
      )}
    </>
  );
};

export default SignUpForm;
