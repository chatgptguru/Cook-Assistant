import Home from "./pages/Home";
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import './css/style.css'
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import PageNotFound from "./pages/PageNotFound";
import VerifyEmail from "./pages/VerifyEmail";
import RessetPasword from "./pages/RessetPassword";
import PasswordChanged from "./pages/PasswordChanged";
import Shop from "./pages/Shop";
import DiscoverDishes from "./pages/DiscoverDishes";
import PersonalCookbook from "./pages/PersonalCookbook";
import GetDishesPage from "./pages/GetDishesPage";
import DisheDetails from "./pages/DisheDetails";
import ChoppingBlock from "./pages/Chopping Block";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
import { getAuth } from "firebase/auth";
import GetRecipe from "./pages/GetRecipe";

function App() {
  
  const auth = getAuth()
  const currentUser = auth.currentUser
  // console.log("user : " + JSON.stringify(user))
  // console.log("user id : " + user?.uid)

  const {isLoggedIn} = useSelector((state)=> state.auth)


console.log("user?.emailVerified  :"+currentUser?.emailVerified )

  return (
    <>
    <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/signin" element={isLoggedIn ? <Home /> :<SignIn />} />
       <Route exact path="/signup" element={isLoggedIn ? <Home /> : <SignUp />} />
       <Route path="/reset-password" element={<ResetPassword />} />
       <Route path="/change-password" element={<RessetPasword />} />
       <Route path="/verify-email" element={!currentUser?.emailVerified ? <VerifyEmail /> : <DiscoverDishes />} />
       <Route path="/password-changed" element={<PasswordChanged />} />
       <Route path="/shop" element={isLoggedIn ? <Shop /> :<Home />} />
       <Route path="/discover-dishes" element={(isLoggedIn && currentUser?.emailVerified) ? <DiscoverDishes /> : <SignIn />} />
       <Route path="/personal-cookbook" element={isLoggedIn ?<PersonalCookbook /> : <SignIn />} />
       <Route path="/get-dishes" element={isLoggedIn ?<GetDishesPage /> : <SignIn />} />
       <Route path="/dishe-details" element={isLoggedIn  ? <DisheDetails /> : <SignIn />} />
       <Route path="/get-recipe" element={isLoggedIn ?<GetRecipe /> : <SignIn />} />
       <Route path="/chopping-block" element={isLoggedIn ? <ChoppingBlock /> : <SignIn />} />
       <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
