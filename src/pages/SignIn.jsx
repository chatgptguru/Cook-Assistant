import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { motion } from "framer-motion";
import homeImageBackground from "../images/homeBackground.png"

import { auth } from '../config/firebase'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ColorRing } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage, setMessage } from "../redux/message";
import { setUserData, switchLoginStatus } from "../redux/auth";

const initialState = {
  email: "",
  password: "",
};

function SignIn() {

  const navigate = useNavigate();

  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [visible, setIsVisible] = useState(false)
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch()
  const auth = getAuth();
  const user = auth.currentUser;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  const login = async () => {
    setIsVisible(true)
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      console.log(user);
      dispatch(switchLoginStatus(true))
      dispatch(setUserData(user))
      navigate('/discover-dishes')
    } catch (error) {
      // dispatch(setMessage((error.response &&
      //   error.response.data &&
      //   error.response.data.message) ||
      //   error.message ||
      //   error.toString()))
      dispatch(setMessage(error.message.substring(9)))
    }
    setTimeout(() => {
      dispatch(clearMessage())
    }, 5000);
    setIsVisible(false)
  };



  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    // if (!email || !password) {

    login()
    // }>

  }


  return (
    <div className="flex flex-col min-h-screen  relative overflow-hidden ">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className=" ">
        {/*  Page illustration */}
        <div

          className="absolute  h-screen inset-0  box-content -z-1">
          <img className="relative inset-0 w-full h-full object-cover "
            src={homeImageBackground} width="1440" height="577" alt="About" />
          {/* <div className="absolute inset-0 bg-gradient-to-t  from-gray-500 dark:from-gray-900" aria-hidden="true"></div> */}
        </div>

        <section className="relative  ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="max-w-7xl md:mx-auto px-4 md:px-6 ">
            <div className="pt-32 pb-10 md:translate-y-[20%]  lg:translate-y-0   lg:pb-16 
            flex justify-center items-center">
              <div className="bg-white bg-opacity-10 px-2 shadow-xl py-5 opacity-90 md:w-[70%] lg:w-[45%] w-full rounded-xl">
                {/* Page header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
                  <h1 className="h3  text-gray-200">
                    Sign In
                  </h1>
                </div>

                {/* Form */}
                <div >


                  <form onSubmit={onSubmit} className="max-w-sm mx-auto ">
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
                          className="form-input w-full rounded-full text-gray-700"
                          placeholder="you email "
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
                          className="form-input w-full rounded-full text-gray-700"
                          placeholder="Password (at least 8 characters)"
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
                            className="text-orange-500 font-bold hover:text-gray-200 transition duration-150 ease-in-out"
                          >
                            Forgot Password?
                          </Link>
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 mx-3   text-md font-bold text-center text-gray-700">
                      {message && (
                        <div
                          className="text-red-600 h-full "
                          role="alert"
                        >
                          {message}
                        </div>
                      )}
                    </p>
                    <div className="flex flex-wrap -mx-3 mt-6">
                      <div className="w-full px-3">
                        {/* <Link to="/services"> */}
                        <button

                          type="submit"
                          className="btn text-white bg-gradient-to-r from-orange-100 to-orange-50 w-full">

                          Sign in
                        </button>
                        {/* </Link> */}
                      </div>
                    </div>
                  </form>
                  {visible &&
                    <div className="z-50 absolute top-[50%] left-[50%] -translate-x-[50%]">
                      <ColorRing visible={true}
                        height="100"
                        width="100"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                      /></div>
                  }
                  <div className="text-gray-200 text-center mt-6">
                    Don’t you have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-orange-500 font-bold hover:text-gray-200 transition duration-150 ease-in-out"
                    >
                      Sign up
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default SignIn;
