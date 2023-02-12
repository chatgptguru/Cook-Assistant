import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

import homeImageBackground from "../images/homeBackground.png"


const initialState = {
  email: "",
  password: "",
};

function SignIn() {

  const navigate = useNavigate();

  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);

  // const { message } = useSelector((state) => state.message);


  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    // if (!email || !password) {

    navigate('/services')
    // }>

  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden ">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="absolute h-screen inset-0  pt-16 box-content -z-1">
          <img className="absolute inset-0 w-full h-full object-cover " src={homeImageBackground} width="1440" height="577" alt="About" />
          <div className="absolute inset-0 bg-gradient-to-t  from-gray-500 dark:from-gray-900" aria-hidden="true"></div>
        </div>

        <section className="relative ">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
            <div className="pt-32 pb-12 md:pt-40  md:pb-20 flex justify-center items-center">

              <div className="backdrop-filter backdrop-blur-sm shadow-xl py-5 opacity-90 md:w-[45%] w-full rounded-xl">
                {/* Page header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                  <h1 className="h3  text-gray-200">
                    Sign In
                  </h1>
                </div>

                {/* Form */}
                <div onSubmit={onSubmit} className="max-w-sm mx-auto ">


                  <form>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label
                          className="block text-gray-300 text-sm font-medium mb-1"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          className="form-input w-full rounded-full text-gray-300"
                          placeholder="you@yourcompany.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label
                          className="block text-gray-300 text-sm font-medium mb-1"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          className="form-input w-full rounded-full text-gray-300"
                          placeholder="Password (at least 10 characters)"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <div className="flex justify-between">
                          {/* <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="text-gray-400 ml-2">
                            Keep me signed in
                          </span>
                        </label> */}
                          <Link
                            to="/reset-password"
                            className="text-orange-600 hover:text-gray-200 transition duration-150 ease-in-out"
                          >
                            Forgot Password?
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mt-6">
                      <div className="w-full px-3">
                        {/* <Link to="/services"> */}
                        <button type="submit"
                          className="btn text-white bg-gradient-to-r from-orange-100 to-orange-50 w-full">

                          Sign in
                        </button>
                        {/* </Link> */}
                      </div>
                    </div>
                  </form>
                  <div className="text-gray-200 text-center mt-6">
                    Don’t you have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-orange-600 hover:text-gray-200 transition duration-150 ease-in-out"
                    >
                      Sign up
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignIn;
