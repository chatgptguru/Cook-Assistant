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

function App() {
  return (
    <>
    <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/signin" element={<SignIn />} />
       <Route exact path="/signup" element={<SignUp />} />
       <Route path="/reset-password" element={<ResetPassword />} />
       <Route path="/change-password" element={<RessetPasword />} />
       <Route path="/verify-email" element={<VerifyEmail />} />
       <Route path="/password-changed" element={<PasswordChanged />} />
       <Route path="/shop" element={<Shop />} />
       <Route path="/discover-dishes" element={<DiscoverDishes />} />
       <Route path="/personal-cookbook" element={<PersonalCookbook />} />
       <Route path="/get-dishes" element={<GetDishesPage />} />
       <Route path="/dishe-details" element={<DisheDetails />} />
       <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
