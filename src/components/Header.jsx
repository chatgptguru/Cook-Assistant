import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';
import Transition from '../utils/Transition';
import logo from '../images/logo.png'
import cookE from '../images/COOK-E.png'

import homeImageBackground from "../images/homeBackground.png"
import { getAuth, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { switchLoginStatus } from '../redux/auth';

function Header() {

  const auth = getAuth();
  const user = auth.currentUser;
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const logout = () => {
    // await signOut(auth);
    dispatch(switchLoginStatus(false))
  };

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // Handle light modes
  const [darkMode, setDarkMode] = useState(() => {
    const dark = localStorage.getItem('dark-mode');
    if (dark === null) {
      return true;
    } else {
      return dark === 'true';
    }
  });

  // useEffect(() => {
  //   localStorage.setItem('dark-mode', darkMode)
  //   if (darkMode) {
  //     document.documentElement.classList.add('dark')
  //   } else {
  //     document.documentElement.classList.remove('dark')
  //   }
  // }, [darkMode]);

  return (
    <header className=" shadow-xl shadow-gray-500 fixed  opacity-90   w-full z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="absolute h-auto inset-0  pt-16  box-content -z-1">
            <img className="absolute inset-0 w-full h-full object-cover " src={homeImageBackground} width="1440" height="577" alt="About" />
            {/* <div className="absolute inset-0 opacity-25   from-gray-400" aria-hidden="true"></div> */}
          </div>
          {/* Site branding */}
          <div className="shrink-0 mr-5">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              {/* <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="logo_a">
                    <stop stopColor="#3ABAB4" offset="0%" />
                    <stop stopColor="#7F9CF5" offset="100%" />
                  </linearGradient>
                  <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="logo_b">
                    <stop stopColor="#3ABAB4" offset="0%" />
                    <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
                  </linearGradient>
                </defs>
                <path d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z" fill="url(#logo_a)" />
                <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z" fill="url(#logo_b)" />
              </svg> */}
              <div className='flex space-x-3'>  <img src={logo} alt="logo" className="w-8 h-8" />
                <p className='flex justify-center items-center text-xl font-bold text-white'>
                  COOK-E
                </p>
              </div>

            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex  grow flex-wrap items-center font-medium">
              <li>
                <Link
                  to="/discover-dishes"
                  className="text-white hover:text-primary-600 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Food Ideas
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-white hover:text-primary-600 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/chopping-block"
                  className="text-white hover:text-primary-600 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Chopping Block
                </Link>
              </li>
              <li>
                <Link
                  to="/personal-cookbook"
                  className="text-white hover:text-primary-600 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Cookbook
                </Link>
              </li>
              {/* 1st level: hover */}

            </ul>

            {/* Desktop lights switch */}
            {/* <div className="form-switch flex flex-col justify-center ml-3">
              <input
                type="checkbox"
                name="light-switch"
                id="light-switch-desktop"
                className="light-switch sr-only"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <label className="relative" htmlFor="light-switch-desktop">
                <span
                  className="relative bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 shadow-sm z-10"
                  aria-hidden="true"
                ></span>
                <svg className="absolute inset-0" width="44" height="24" viewBox="0 0 44 24" xmlns="http://www.w3.org/2000/svg">
                  <g className="fill-current text-white" fillRule="nonzero" opacity=".88">
                    <path d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z" />
                    <circle cx="32" cy="12" r="3" />
                    <circle fillOpacity=".4" cx="12" cy="12" r="6" />
                    <circle fillOpacity=".88" cx="12" cy="12" r="3" />
                  </g>
                </svg>
                <span className="sr-only">Switch to light / dark version</span>
              </label>
            </div> */}

            {/* Desktop CTA on the right */}
            {!isLoggedIn
              ? <ul className="flex justify-end flex-wrap items-center border-2 border-primary-600 px-8 rounded-md">
                <li>
                  <Link to="/signin" className="btn-sm text-primary-600 ">
                    Login
                  </Link>
                </li>
              </ul>
              :
              <ul onClick={logout} className="flex justify-end flex-wrap items-center border-2 border-primary-600 px-8 rounded-md">
                <li>
                  <Link to="/" className="btn-sm text-primary-600 ">
                    Log Out
                  </Link>
                </li>
              </ul>

            }
          </nav>

          {/* Mobile menu */}
          <div className="inline-flex md:hidden">
            {/* Mobile lights switch */}
            {/* <div className="form-switch flex flex-col justify-center mr-6 -mt-0.5">
              <input
                type="checkbox"
                name="light-switch"
                id="light-switch-mobile"
                className="light-switch sr-only"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <label className="relative" htmlFor="light-switch-mobile">
                <span
                  className="relative bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 shadow-sm z-10"
                  aria-hidden="true"
                ></span>
                <svg className="absolute inset-0" width="44" height="24" viewBox="0 0 44 24" xmlns="http://www.w3.org/2000/svg">
                  <g className="fill-current text-white" fillRule="nonzero" opacity=".88">
                    <path d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z" />
                    <circle cx="32" cy="12" r="3" />
                    <circle fillOpacity=".4" cx="12" cy="12" r="6" />
                    <circle fillOpacity=".88" cx="12" cy="12" r="3" />
                  </g>
                </svg>
                <span className="sr-only">Switch to light / dark version</span>
              </label>
            </div> */}

            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && 'active'}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current text-primary-600 hover:animate-pulse dark:text-gray-300 dark:hover:text-gray-100 transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <Transition
              show={mobileNavOpen}
              tag="ul"
              className="fixed top-0 h-screen z-20 left-0 w-full  -ml-16 overflow-scroll   shadow-lg"
              enter="transition ease-out duration-200 transform"
              enterStart="opacity-0 -translate-x-full"
              enterEnd="opacity-100 translate-x-0"
              leave="transition ease-out duration-200"
              leaveStart="opacity-100"
              leaveEnd="opacity-0"
            >
              <nav
                id="mobile-nav"
                ref={mobileNav}
                className="fixed top-0 h-screen z-0 left-0 w-full opacity-100  -ml-16   dark:bg-gray-900 shadow-lg no-scrollbar"
              >
                {/* Background image */}
                <div className="absolute inset-0 h-auto pt-16 box-content -z-1">
                  <img className="absolute inset-0 opacity-100 w-full h-full object-cover " src={homeImageBackground} width="1440" height="577" alt="About" />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div> */}
                </div>
                <div className="py-6  pl-[64px]">
                  {/* Logo */}
                  <Link to="/" className="flex justify-center py-6 my-4" aria-label="Cruip">
                    <img src={logo} alt="logo" className="w-12 h-12" />
                  </Link>
                  {/* Links */}
                  <ul className='space-y-4'>
                    <li>
                      <Link to="/discover-dishes"
                        className=" w-full flex   bg-white shadow-xl  bg-clip-padding bg-opacity-25  justify-center text-center text-white
                       dark:text-gray-300 dark:hover:text-gray-100 py-3 
                       
                       ">
                        Food Ideas

                      </Link>
                    </li>
                    <li>
                      <Link to="/shop"
                        className=" w-full flex bg-white shadow-xl  bg-clip-padding bg-opacity-25  justify-center text-center text-white
                       dark:text-gray-300 dark:hover:text-gray-100 py-3
                       
                       ">
                        Shop
                      </Link>
                    </li>
                    <li>
                      <Link to="/personal-cookbook"
                        className=" w-full flex bg-white shadow-xl  bg-clip-padding bg-opacity-25  justify-center text-center text-white
                       dark:text-gray-300 dark:hover:text-gray-100 py-3
                       
                       ">
                        Chopping Block
                      </Link>
                    </li>
                    <li>
                      <Link to="/personal-cookbook"
                        className=" w-full flex bg-white shadow-xl  bg-clip-padding bg-opacity-25  justify-center text-center text-white
                       dark:text-gray-300 dark:hover:text-gray-100 py-3
                       
                       ">
                        CookBook
                      </Link>
                    </li>
                    {/* <li className="py-2 my-2 border-t border-b border-gray-200 dark:border-gray-800">
                      <span className="flex text-gray-600 dark:text-gray-400 py-2">Resources</span>
                      <ul className="pl-4">
                        <li>
                          <Link
                            to="/help"
                            className="text-sm flex font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 py-2"
                          >
                            Help center
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/404"
                            className="text-sm flex font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 py-2"
                          >
                            404
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link
                        to="/contact"
                        className="font-medium w-3/5 mx-[20%] flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out"
                      >
                        Login
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </Transition>
          </div>
        </div>
      </div>
    </header >
  );
}

export default Header;
