import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import homeImageBackground from "../images/homeBackground.png"
import { motion } from "framer-motion";
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../config/firebase'
import Swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { setMessage } from '../redux/message';
import { ColorRing } from 'react-loader-spinner';

const initialState = {
  email: "",
};
function ResetPassword() {

  const [values, setValues] = useState(initialState);
  const [visible, setIsVisible] = useState(false)
  const { message } = useSelector((state) => state.message);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const resetPassword = async (email) => {
    setIsVisible(true)
    try {
      await sendPasswordResetEmail(auth, email);
      Swal({
        icon: "success",
        title: 'reset link has been sent to your email inbox',
        showConfirmButton: true,
        // timer: 4000,
        confirmButtonColor: '#f35d34',
      });
      navigate('/signin')
    } catch (error) {

      if (error.code === 'auth/user-not-found') {
        dispatch(setMessage('User not found'));
      } else {
        dispatch(setMessage(error.message))
      }

    }
    setIsVisible(false)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email } = values;

    // setIsVisible(true)
    resetPassword(email)

  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      {/* <main className="grow"> */}

      {/*  Page illustration */}
      <div className="absolute h-screen inset-0  pt-16 box-content -z-1">
        <img className="absolute inset-0 w-full h-full object-cover " src={homeImageBackground} width="1440" height="577" alt="About" />
        {/* <div className="absolute inset-0 bg-gradient-to-t  from-gray-500 dark:from-gray-900" aria-hidden="true"></div> */}
      </div>

      <section className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">



            {/* Form */}
            <div className=" md:w-[70%] lg:w-[45%] w-full px-12 py-4 bg-white bg-opacity-25  rounded-xl  shadow-xl  mx-auto">
              {/* <div className="w-[45%] px-12 py-4  backdrop-blur-lg
               [ p-8 md:p-10 lg:p-10 ]
               [ bg-gradient-to-b from-white/60 to-white/80 ]
               [ border-[1px] border-solid border-white border-opacity-30 ]
               [ shadow-black/70 shadow-2xl ]  mx-auto"> */}  {/* Page header */}
              <div className="max-w-3xl  mx-auto text-center pb-12 md:pb-10">
                <h1 className="h3 text-white mb-4">Forgot your password?</h1>
                <p className="text-md text-gray-200">Enter your email and we’ll send you a reset link</p>
              </div>
              <form onSubmit={onSubmit} >


                <div

                  className="flex flex-wrap -mx-3 mb-4">
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
                      className="form-input w-full text-gray-300"
                      placeholder="you@email.com"
                      required
                    />
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

                <div className="flex flex-wrap  mt-6">
                  <div className="w-full rounded-md">
                    {/* <Link to="/verify-email"> */}
                    <button type="submit" className="btn text-white bg-gradient-to-r from-orange-100 rounded-xl to-orange-50 w-full">
                      Send reset link
                    </button>
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
              <div className="text-gray-400 text-center mt-6">
                <Link to="/signin" className="text-white hover:text-orange-200 font-medium transition duration-150 ease-in-out">Cancel</Link>
              </div>
            </div>

          </div>
        </motion.div>
      </section >

      {/* </main> */}

    </div >
  );
}

export default ResetPassword;