import React, { useState, useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import homeImageBackground from "../images/homeBackground.png"
import { motion } from "framer-motion";

import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { clearMessage, setMessage } from "../redux/message";
import Swal from 'sweetalert';

const initialState = {
  fullName: "",
  email: "",
  password: "",
};

function SignUp() {

  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [visible, setIsVisible] = useState(false)
  const { message } = useSelector((state) => state.message);

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const register = async () => {
    setIsVisible(true)
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      Swal({
        icon: "success",
        title: "Account created successfully",
        showConfirmButton: false,
        timer: 2000,
        confirmButtonColor: '#f0481a',
      });
      setTimeout(() => {
        navigate('/signin')
      }, 2000);
      console.log(user);
    } catch (error) {
      // console.log(error.message);
      dispatch(setMessage(error.message.substring(9)))
    }
    setTimeout(() => {
      dispatch(clearMessage())
    }, 5000);
    setIsVisible(false)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password, fullName } = values;
    // if (!email || !password) {

    register()
    // dispatch(registerUser(values)).then((res) => {
    //   isLoggedIn && navigate('/services')
    //   // console.log(isLoggedIn)
    // }).catch((error) => {
    //   setIsVisible(false)
    // })

    // }>
  }



  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/*  Site header */}
      <Header />



      {/*  Page content */}
      <main className="grow ">
        {/*  Page illustration */}
        <div className="absolute h-auto inset-0  pt-16 box-content -z-1">
          <img className="absolute inset-0 w-full h-full object-cover " src={homeImageBackground} width="1440" height="577" alt="About" />
          {/* <div className="absolute inset-0 bg-gradient-to-t  from-gray-500 dark:from-gray-900" aria-hidden="true"></div> */}
        </div>

        <section className="relative ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="max-w-7xl mx-auto px-4  md:px-6">
            <div className="pt-32 pb-10 md:translate-y-[20%]  lg:translate-y-0   lg:pb-16 
            flex justify-center items-center">
              <div className="bg-white bg-opacity-10 px-2 shadow-xl py-5 opacity-90 md:w-[70%] lg:w-[45%] w-full rounded-xl">
                {/* Page header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
                  <h1 className="h3 text-gray-200">
                    Welcome to <span className="text-orange-50">COOK-E</span>
                  </h1>
                </div>

                {/* Form */}
                <div className="max-w-sm mx-auto">

                  <form onSubmit={onSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label
                          className="block text-gray-300 text-sm font-medium mb-1"
                          htmlFor="full-name"
                        >
                          Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          name="fullName"
                          value={values.fullName}
                          onChange={handleChange}
                          type="text"
                          className="form-input w-full text-gray-700"
                          placeholder="Your name"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label
                          className="block text-gray-300 text-sm font-medium mb-1"
                          htmlFor="email"
                        >
                          Email <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          className="form-input w-full text-gray-700"
                          placeholder="your email"
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
                          Password <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          className="form-input w-full text-gray-700"
                          placeholder="Password (at least 8 characters)"
                          required
                        />
                      </div>
                    </div>
                    <p className="my-2 mx-3   text-md font-bold text-center text-gray-700">
                      {message && (
                        <div
                          className="text-red-600 h-full "
                          role="alert"
                        >
                          {message}
                        </div>
                      )}
                    </p>
                    <div className="text-[14px] text-gray-200 text-center">
                      I agree to be contacted by Cook-E about this offer as per
                      the Cook-E{" "}
                      <Link
                        to="#"
                        className="underline text-orange-50 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </div>
                    <div className="flex flex-wrap -mx-3 mt-6">
                      <div className="w-full px-3">
                        {/* <Link to="/services"> */}
                        <button type="submit" className="btn text-white bg-gradient-to-r from-orange-100 to-orange-50 w-full">

                          Sign Up
                        </button>
                        {/* </Link> */}
                      </div>
                    </div>
                    {/* <p className="mt-8 mx-3 text-xs font-bold text-center text-gray-700">
                    {message && (
                      <div
                        className={successful ? "text-green-600" : "text-red-500"}
                        role="alert"
                      >
                        {message}
                      </div>
                    )}
                  </p> */}
                  </form>
                  <div className="text-gray-400 flex space-x-2 justify-center text-center mt-6">
                    Already using Cook-E?{" "}
                    <div
                      to="signin"
                      onClick={() => navigate('/signin')}
                      className="text-orange-400 ml-2 hover:text-gray-200 transition duration-150 ease-in-out"
                    >
                      Sign in
                    </div>
                  </div>
                </div>
              </div>
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
              {/* {notification && (
                <Notification
                  status={notification.status}
                  title={notification.title}
                  message={notification.message}
                />
              )} */}
            </div>
          </motion.div>
        </section>

      </main>
    </div>
  );
}

export default SignUp;




