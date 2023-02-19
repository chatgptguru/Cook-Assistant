import React, { useState, useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
// import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import homeImageBackground from "../images/homeBackground.png"
import iconCheck from '../images/iconCheck.png'
import { motion } from "framer-motion";

// import PageIllustration from "../partials/PageIllustration";
// import { clearMessage } from "../redux/message";
// import { registerUser } from "../redux/user-actions";
// import Notification from "./UI/Notification";

const initialState = {
    NewConfirmPassword: "",
    email: "",
    ConfirmPassword: "",
};

function PasswordChanged() {


    const [values, setValues] = useState(initialState);
    const [loading, setLoading] = useState(false);
    // const notification = useSelector((state) => state.uiSlice.notification);
    // const { message } = useSelector((state) => state.message);
    // const { isLoggedIn } = useSelector((state) => state.auth);
    const [visible, setIsVisible] = useState(false)

    // const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    // useEffect(() => {
    //   dispatch(clearMessage())
    // }, [])


    const onSubmit = (e) => {
        e.preventDefault();
        const { email, ConfirmPassword, NewConfirmPassword } = values;
        // if (!email || !ConfirmPassword) {
        setIsVisible(true)
        // dispatch(registerUser(values)).then((res) => {
        //   isLoggedIn && navigate('/services')
        //   // console.log(isLoggedIn)
        // }).catch((error) => {
        //   setIsVisible(false)
        // })

        // }>
    }

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/*  Site header */}
            <Header />



            {/*  Page content */}
            <main className="grow">
                {/*  Page illustration */}
                <div className="absolute h-screen inset-0  pt-16 box-content -z-1">
                    <img className="absolute inset-0 w-full h-full object-cover " src={homeImageBackground} width="1440" height="577" alt="About" />
                    <div className="absolute inset-0 bg-gradient-to-t  from-gray-500 dark:from-gray-900" aria-hidden="true"></div>
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
                        className=" mx-auto px-4 sm:px-6">
                        <div className="pt-32 pb-12 md:pt-32 md:pb-20 flex justify-center items-center">
                            <div className="bg-white bg-opacity-25  shadow-xl py-5 opacity-90 md:w-[45%] w-full rounded-xl">
                                {/* Page header */}
                                <div className=" mx-auto text-center flex flex-col justify-center items-center space-y-5 pb-12 md:pb-10">
                                    <img src={iconCheck} />
                                    <h1 className="h3 text-gray-100">
                                        Password Changed Successfully
                                    </h1>
                                    <p className="text-gray-200">
                                        New password has been set, you can now continue to use our services.
                                    </p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button type="submit"
                                        onClick={() => navigate('/signin')}
                                        className="btn text-white bg-gradient-to-r from-orange-100 to-orange-50 w-[50%]">

                                        Back to Login
                                    </button>
                                </div>

                                {/* Form */}

                            </div>

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

export default PasswordChanged;
