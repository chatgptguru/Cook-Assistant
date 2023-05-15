import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import homeImageBackground from "../images/homeBackground.png"
import { motion } from "framer-motion";
import EmailVerification from '../components/EmailVerification';


const initialState = {
  fullName: "",
  email: "",
  password: "",
};
function VerifyEmail() {

  const [values, setValues] = useState(initialState);
  const [visible, setIsVisible] = useState(false)

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password, fullName } = values;

    setIsVisible(true)

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
        <div className="absolute inset-0 bg-gradient-to-t  from-gray-500 dark:from-gray-900" aria-hidden="true"></div>
      </div>


      <EmailVerification />

      {/* </main> */}

    </div >
  );
}

export default VerifyEmail;